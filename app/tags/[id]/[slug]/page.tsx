import TagsListNews from "@/app/components/tags/tagslistnews";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// ดึง tag info
async function fetchTagInfo(tagId: string) {
  const res = await fetch(
    `https://backend.teroasia.com/apis2/index_test.php?a=get_tag&tag_id=${tagId}&limit=1&o=0`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  const json = await res.json();
  return json?.data?.tag_info ?? null;
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}): Promise<Metadata> {
  try {
    const { id, slug } = await params;
    const tagInfo = await fetchTagInfo(id);
    if (!tagInfo) throw new Error("Not found");

    return {
      title: `แท็ก: ${tagInfo.tag_name}`,
      description: `ข่าวที่เกี่ยวข้องกับแท็ก ${tagInfo.tag_name}`,
    };
  } catch (e) {
    return { title: "Tag Not Found" };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) {
  const { id, slug } = await params;
  const tagInfo = await fetchTagInfo(id);

  if (!tagInfo || !tagInfo.tag_name) return notFound();

  const expectedSlug = decodeURIComponent(tagInfo.tag_name);
  const currentSlug = decodeURIComponent(slug);

  if (expectedSlug !== currentSlug) return notFound();

  return (
    <main className="flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-3xl text-gray-700">
          แท็ก : <span className="ml-2 text-red-600">{tagInfo.tag_name}</span>
        </h1>
      </div>

      <div className="container mx-auto">
        <TagsListNews data={{ tag_info: tagInfo }} />
      </div>
    </main>
  );
}
