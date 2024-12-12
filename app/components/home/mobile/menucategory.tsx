
interface Program {
  program_permalink: string;
  program_mini_icon: string;
  program_name: string;
}

interface CategoryData {
  category_name: string;
  category_name_en: string;
  programs: Program[];
}

interface MiddleNavigate {
  middle_navigate: {
    [key: number]: CategoryData;
  };
}

'use client';

import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import dynamic from 'next/dynamic';

const LogoSlider = dynamic(() => import('./logoslider').then((mod) => mod.LogoSlider),
{ssr: false, loading: () => <p>Loading...</p>});




export default function MenuCategory({ data }: { data: MiddleNavigate }) {


  if (!data) return <div>Loading...</div>;
  const [tabs, setTabs] = useState<CategoryData[]>([]);
  useEffect(() => {
    const newTabs = [1, 2, 3].map(index => ({
      category_name: data?.middle_navigate[index]?.category_name,
      category_name_en: data?.middle_navigate[index]?.category_name_en,
      programs: data?.middle_navigate[index]?.programs
    })).filter(tab => tab.category_name && tab.category_name_en && tab.programs);

    setTabs(newTabs);
  }, [data]);



  return (
    <div className="container mx-auto px-4">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-3xl   bg-[#e3e3e3]">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `w-full rounded-3xl py-3.5 text-lg font-medium leading-5
                 ${selected
                  ? 'bg-[#ed1d24] shadow text-white'
                  : 'text-slate-700 hover:bg-white/[0.12] hover:text-[#ed1d24]'
                }`
              }
            >
              {tab.category_name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-1">
          {tabs.map((tab, index) => (
            <Tab.Panel
              key={index}
              className={`rounded-3xl bg-white p-3
                  focus:outline-none `}
            >
              <LogoSlider programs={tab.programs} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}