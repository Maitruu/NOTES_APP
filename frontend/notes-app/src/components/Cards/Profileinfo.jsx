import React from "react";
import { getinitials } from "../../utils/helper";
// import { Link } from 'react-router-dom'

const Profileinfo = ({ userInfo, onLogout }) => {
  return (
    userInfo && (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center text-xl font-bold justify-center rounded-full text-slate-900 bg-primary">
          {getinitials(userInfo.fullName)}
        </div>
        <div>
          <p className="text-sm font-medium">{userInfo.fullName}</p>
          {/* <Link to="/login"><button className='text-sm text-slate-700 underline'>Logout</button></Link> */}
          <button
            className="text-sm text-slate-700 underline"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default Profileinfo;
