'use client'
import React, { useState } from 'react';
interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (searchTerm: string) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('');
    onClose();
    window.open('/search/'+searchTerm, '_blank')
    
    
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/2 p-8 rounded-lg">
        <h2 className="text-gray-600 text-xl font-bold mb-4">ค้นหา</h2>
        <input
          type="text"
          className=" text-gray-600 border border-gray-400 px-3 py-2 rounded-md w-full mb-4"
          placeholder="ป้อนคำค้นหา..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mr-2"
            onClick={onClose}
          >
            ยกเลิก
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={handleSearch}
          >
            ค้นหา
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;