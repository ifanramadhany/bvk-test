import React from 'react';

export default function ex() {
  return (
    <div className="h-screen flex flex-col">
      {/* header logo  */}
      <div className="header-logo w-screen flex items-center">
        <img className="h-8 ml-20" src={kf_logo_white} alt="" />
      </div>
      {/* header users  */}
      <div className="header-users w-screen flex bg-blue-200 shadow-lg">
        {/* logged-in apoteker  */}
        <div className="loggedIn-apoteker h-12">
          <span>apoteker yg login</span>
        </div>
        {/* selected customer to chat */}
        <div className="w-full h-12">
            <span>customer yg dipilih untuk chat</span>
          </div>
      </div>
      <div className="chat-section w-screen flex">
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
