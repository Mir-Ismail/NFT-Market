import React from "react";
import auc1 from "../assets/images/auc_1.jpg";

function AuctionItem() {
  const itemDetails = [
    {
      itemImg: auc1,
      userImg: "/assets/user1.png",
      userEmail: "@Amilia Nnor",
      itemTitle: "Bored Ape Yacht Club",
      itemPrice: "0.081",
      itemLeft: 1,
      totalItem: 10,
      timeLeft: {
        days: "16",
        hours: "20",
        minutes: "7",
        seconds: "41",
      },
    },
    {
      itemImg: auc1,
      userImg: "/assets/user2.png",
      userEmail: "@JohanDone",
      itemTitle: "After Snow: Attraction",
      itemPrice: "0.081",
      itemLeft: 3,
      totalItem: 10,

      timeLeft: {
        days: "16",
        hours: "20",
        minutes: "7",
        seconds: "41",
      },
    },
    {
      itemImg: auc1,
      userImg: "/assets/user3.png",
      userEmail: "@LarySmith",
      itemTitle: "Mortimer Crypto Mystic",
      itemPrice: "0.081",
      itemLeft: 2,
      totalItem: 10,

      timeLeft: {
        days: "16",
        hours: "20",
        minutes: "7",
        seconds: "41",
      },
    },
    {
      itemImg: auc1,
      userImg: "/assets/user4.png",
      userEmail: "@SmithWright",
      itemTitle: "People are the Pillars",
      itemPrice: "0.081",
      itemLeft: 5,
      totalItem: 10,
      timeLeft: {
        days: "16",
        hours: "20",
        minutes: "7",
        seconds: "41",
      },
    },
  ];
  return (
    <section className="py-10 bg-[#0D0D2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
            New Arrivals
          </span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-2xl">
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
        </div>
      </div>
    </section>
  );
}

export default AuctionItem;
