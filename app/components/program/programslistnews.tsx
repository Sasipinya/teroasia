'use client';
import React, { useState, useEffect } from 'react';
import { OptimizedImage } from '../utils/optimizesimage';
import Columnlist from './columlist';
import getCountNewsInProgram from './FetchGetcountnewsinprogram';
import Link from 'next/link';

const callFunction = (program_id: number, count: number) => {
  const pages = [];
  for (let i = 0; i <= count; i++) {
    let key = 'page_' + i;
    pages.push(
      <Columnlist index={i} key_for_search={program_id} key={key} />,
    );
  }
  return <div className="container">{pages}</div>;
};

function ProgramsListNews({ data }: { data: any }) {
  const [count, setCount] = useState(0);
  const [dataCount, setDataCount] = useState(0); 
  const [flagShowButton, setFlagShowButton] = useState('show');

  useEffect(() => {
    const fetchData = async () => {
      let dataCountCheck = (await getCountNewsInProgram(data.info.program_id)).data.pages - 1;
      setDataCount(dataCountCheck); 
    };
    fetchData();
  }, [data.info.program_id]); // Fetch dataCount when program_id changes

  useEffect(() => {
    if (count > dataCount) {
      setFlagShowButton('hide');
    }
  }, [count, dataCount]); // Update flagShowButton when count or dataCount changes

  return (
    <div className="container mx-auto p-2 text-gray-600 mb-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full  md:w-[320px] p-2 pb-2 md:pb-0">
          <div
            style={{ backgroundColor: data.info.tvp_color }}
            className={`h-full rounded-md flex flex-col justify-between`}
          >
            <div className=" p-3 mt-3 w-full flex justify-center">
              <OptimizedImage
                src={data.info.tvp_logo}
                width={400}
                height={500}
                style={{ height: 'auto' }}
                alt={data.info.program_name}
                
              />
            </div>
            <div className="text-center px-3 mb-5">
              <h1 className=" text-xl font-bold text-white">
                {data.info.program_name}
              </h1>
              <h2 className=" text-sm text-white mb-4">
                {data.info.program_desc}{' '}
              </h2>
              <Link href={`/allnews/${data.info.program_slug}?page=1`} >
                  <button className="bg-gray-300 text-black hover:bg-red-600 hover:text-white font-bold py-3 px-10 rounded-3xl ">
                    ดูทั้งหมด
                  </button>
                </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex">{callFunction(data.info.program_id, count)}</div>
          {flagShowButton == 'show' ? (
            <div className="flex justify-center mt-3">
              <button
                type="button"
                className="btn rounded-3xl text-base md:text-lg py-2 px-8 bg-red-600 text-white hover:bg-gray-300 hover:text-gray-700"
                onClick={() => setCount((prevState) => prevState + 1)}
              >
                โหลดข่าวเพิ่มเติม ...
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProgramsListNews;