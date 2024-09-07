import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 flex items-center rounded-md px-4 bg-slate-100">
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent outline-none py-[11px]"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="text-slate-400 hover:text-black mr-3 text-xl cursor-pointer"
          onClick={onClearSearch}
        />
      )}  
      <FaMagnifyingGlass
        className="text-slate-400 hover:text-black cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
