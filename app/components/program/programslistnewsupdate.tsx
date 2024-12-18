'use client';
import React, { useState, useEffect } from 'react';
import { OptimizedImage } from '../../../lib/utils/optimizesimage';
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

function ProgramsListNewsUpdate({ data }: { data: any }) {
  const [count, setCount] = useState(0);
  const [dataCount, setDataCount] = useState(0); 
  const [flagShowButton, setFlagShowButton] = useState('hide');

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
    }else{
      setFlagShowButton('show');
    }
  }, [count, dataCount]); // Update flagShowButton when count or dataCount changes

  return (
    <div className="container mx-auto p-2 text-gray-600 mb-10">
      <div className="flex ">
       
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

export default ProgramsListNewsUpdate;