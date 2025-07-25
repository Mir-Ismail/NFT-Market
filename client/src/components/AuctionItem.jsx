import React from "react";

function AuctionItem({ itemDetails }) {
  return (
    <>
      {itemDetails.map((item, index) => (
        <div
          key={index}
          className="p-[2px] rounded-[20px] mb-4 transition-transform duration-300 hover:scale-105"
          style={{
            background:
              "linear-gradient(90deg, #a259ff 0%, #f21bff 50%, #ffb86c 100%)",
          }}
        >
          <div
            className="relative flex flex-col justify-between bg-[#0D0D2B] text-white shadow-xl p-2 rounded-[18px] overflow-hidden"
            style={{ minHeight: "480px" }}
          >
            {/* Image with overlayed user info */}
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
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.userEmail}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1 justify-between px-5 pt-10 pb-5">
              <div className="mb-2 mt-2 text-lg font-semibold text-white truncate text-center">
                {item.itemTitle}
              </div>
              <div className="flex justify-between items-center text-sm mb-4">
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

              {/* Timer */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div
                    key={unit}
                    className="bg-[#1B1C31] rounded-lg p-2 text-center"
                  >
                    <div className="text-base font-bold text-[#A259FF]">
                      {item.timeLeft[unit]}
                    </div>
                    <div className="text-xs text-green-400 tracking-wide">
                      {unit}
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-4 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:opacity-90 mt-auto">
                PLACE BID
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AuctionItem;
