import React, { useState } from "react";
import Profileinfo from "../Cards/Profileinfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {
  const [searchQuery, setsearchQuery] = useState("");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear(); 
    navigate("/login");
  };

  const handleSearch = () =>{
    if(searchQuery){
      onSearchNote(searchQuery);
    }
  }

  const onClearSearch = () =>{
    setsearchQuery("")
    handleClearSearch()
  }

  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop shadow">
        <h2 className="text-xl font-bold text-black py-2">Notes</h2>

        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setsearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

        <Profileinfo userInfo={userInfo} onLogout={onLogout} />
      </div>
    </>
  );
};

export default Navbar;
