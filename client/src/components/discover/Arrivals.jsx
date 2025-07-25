import React from "react";

function Arrivals({ item }) {
    return (
        <div
          className="p-[2px] rounded-[20px] h-full transition-transform duration-300 hover:scale-105"
          style={{
            background:
              "linear-gradient(90deg, #a259ff 0%, #f21bff 50%, #ffb86c 100%)",
            minHeight: '520px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div className="relative flex flex-col bg-[#0D0D2B] text-white shadow-xl p-2 rounded-[18px] overflow-hidden h-full">
            {/* Image */}
            <div className="relative">
              <img
                src={item.itemImg}
                alt={item.itemTitle}
                className="rounded-t-[16px] w-full h-56 object-cover"
              />
              <div className="absolute left-4 -bottom-6 flex items-center bg-[#181A2A] bg-opacity-90 rounded-full px-4 py-2 shadow-lg border border-gray-700 gap-2">
                <img
                  src={item.userImg}
                  alt="User"
                  className="w-8 h-8 rounded-full border border-gray-700"
                />
                <span className="text-sm font-medium">{item.userEmail}</span>
              </div>
            </div>
    
            {/* Content */}
            <div className="flex flex-col flex-1 justify-between px-5 pt-10 pb-2 text-left">
              <div className="mb-2 mt-2 text-lg font-semibold text-white truncate">
                {item.itemTitle}
              </div>
              <div className="flex justify-between items-center text-sm mb-2">
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">Price</span>
                  <span className="font-semibold ml-1 text-green-400">
                    {item.itemPrice} ETH
                  </span>
                </div>
                <span className="text-gray-400">
                  {item.itemLeft} of {item.totalItem}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="text-gray-400">Highest Bid:</span>
                <span className="font-semibold ml-1 text-green-400">
                  {item.highestBid} ETH
                </span>
              </div>
            </div>
    
            {/* Footer */}
            <div className="flex justify-between items-center px-5 py-3 border-t border-gray-700 mt-auto text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <span className="text-green-400">&#9679;</span>
                <span>{item.uploadtime || "6"} Hours Ago</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-400">&#10084;</span>
                <span>{item.likes || "134"} Like</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Arrivals;
