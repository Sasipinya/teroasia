export default function NewsSectionSkeleton({ height = 300 }: { height?: number }) {
    return (
      <div className="w-full p-4 bg-gray-100 animate-pulse rounded-lg mb-4">
        <div className="h-48 bg-gray-300 rounded-md mb-4" />
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    );
  }
  