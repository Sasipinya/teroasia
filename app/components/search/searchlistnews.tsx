'use client';
import React, { useState, useEffect } from 'react';
import Columnlist from './columlist';
import getCountNewsInSearch from './FetchGetcountnewsinsearch';
const callFunction = (keyword:string) => {
 
  return <div className="container"><Columnlist  index="0" key_for_search={keyword}  /></div>;
};
function SearchListNews({ keyword }: { keyword: string }) {
 

  return (
    <div className="container mx-auto p-2 text-gray-600 mb-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1">
          <div className="flex">{callFunction(keyword)}</div>
          
        </div>
      </div>
    </div>
  );
}

export default SearchListNews;