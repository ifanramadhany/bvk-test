import React, { useState } from "react";
import { kf_logo_white, rekomendasi_obat } from "../assets";
import { NoCustomerSelected } from "../components/ChatPageComponents";
import "../css/ChatPage.css";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";

export default function ChatPage() {
  const [customerSelected, setCustomerSelected] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      {/* header logo  */}
      <div className="header-logo w-screen flex items-center">
        <img className="h-8 ml-20" src={kf_logo_white} alt="" />
      </div>
      {/* headers users  */}
      <div className="header-users w-screen flex shadow-md">
        {/* logged-in apoteker  */}
        <div className="loggedIn-apoteker h-12 bg-yellow-100">
          <span>apoteker yg login</span>
        </div>
        {/* selected customer to chat */}
        {customerSelected ? (
          // customer selected
          <div className="w-full h-12 flex justify-between">
            {/* customer info */}
            <div className="customer-info h-full flex justify-evenly items-center">
              {/* profile picture customer  */}
              <img className="h-10 w-10 object-cover rounded-full" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              {/* customer name */}
              <p className="customer-name w-28 font-semibold">Maulana Rozi</p>
              {/* chat status */}
              <div className="h-6 w-auto bg-sky-200 rounded-xl flex justify-center items-center">
                <p className="text-xs font-bold text-blue-500 mx-3">Ditangani</p>
              </div>
            </div>
            <div className="option-customer-info h-full flex items-center mr-8">
              <IconButton>
                <SearchIcon sx={{ fontSize: 30, color: "#003A78" }} />
              </IconButton>
              <IconButton>
                <MoreVertIcon sx={{ fontSize: 30, color: "#003A78" }} />
              </IconButton>
            </div>
          </div>
        ) : (
          // no customer selected
          <NoCustomerSelected></NoCustomerSelected>
        )}
      </div>
      <div className="h-full w-screen flex">
        <div className="chat-list">
          {/* chat list */}
          <div className="h-full">
            <span>chat-list</span>
          </div>
        </div>
        <div className="chat-activity">
          {/* chat activity */}
          <div className="h-full flex flex-col justify-center items-center">
            <img className="h-32" src={rekomendasi_obat} alt="" />
            <span className="text-rekomendasi-obat font-bold mt-4">
              Rekomendasi Obat
            </span>
            <div className="w-96">
              <p className="text-rekomendasi-obat mt-2 text-center">
                Berikan rekomendasi obat atau kebuhutuhan lainnya yang paling
                sesuai dengan kebutuhan pasien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
