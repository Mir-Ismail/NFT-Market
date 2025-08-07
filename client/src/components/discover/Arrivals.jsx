import React from "react";
import { useNavigate } from "react-router-dom";
import { buildFileUrl } from "../../config/api";

function Arrivals({ nft }) {
  const navigate = useNavigate();

  const handleNFTClick = (nftId) => {
    navigate(`/item/${nftId}`);
  };

  const getTimeAgo = (createdAt) => {
    if (!createdAt) return "Recently";
    
    const now = new Date();
    const created = new Date(createdAt);
    const diffInHours = Math.floor((now - created) / (1000 * 60 * 60));

    if (diffInHours < 1) return "Just now";
    if (diffInHours === 1) return "1 Hour Ago";
    if (diffInHours < 24) return `${diffInHours} Hours Ago`;

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return "1 Day Ago";
    return `${diffInDays} Days Ago`;
  };

  const getFilePath = (file) => {
    if (!file) return "https://via.placeholder.com/300x200?text=Image+Not+Found";
    
    if (typeof file === "string") {
      return buildFileUrl(file);
    } else if (file && file.storagePath) {
      return buildFileUrl(file.storagePath);
    }
    return "https://via.placeholder.com/300x200?text=Image+Not+Found";
  };

  if (!nft) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-400 text-center">
          <p>No NFT data</p>
        </div>
      </div>
    );
  }

  // Extract data from NFT object
  const item = {
    itemImg: getFilePath(nft.file),
    userImg: nft.author?.pic || "https://i.ibb.co/JpmYDNf/profile.jpg",
    userName: nft.author?.name || "Unknown",
    userEmail: nft.author?.email || "unknown@example.com",
    itemTitle: nft.name || "Untitled NFT",
    itemPrice: nft.price || 0,
    itemLeft: nft.copies || 0,
    totalItem: nft.totalCopies || nft.copies || 1,
    highestBid: nft.price || 0,
    uploadtime: getTimeAgo(nft.createdAt),
    likes: "20",
  };

  return (
    <div
      className="p-[2px] rounded-[20px] h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
      style={{
        background:
          "linear-gradient(90deg, #a259ff 0%, #f21bff 50%, #ffb86c 100%)",
      }}
      onClick={() => handleNFTClick(nft._id)}
    >
      <div className="relative flex flex-col bg-[#0D0D2B] text-white shadow-xl p-2 rounded-[18px] overflow-hidden h-full">
        {/* Image */}
        <div className="relative">
          <img
            src={item.itemImg}
            alt={item.itemTitle}
            className="rounded-t-[16px] w-full h-48 object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/300x200?text=Image+Not+Found";
            }}
          />
          <div className="absolute left-4 -bottom-6 flex items-center bg-[#181A2A] bg-opacity-90 rounded-full px-3 py-2 shadow-lg border border-gray-700 gap-2">
            <img
              src={item.userImg}
              alt="User"
              className="w-6 h-6 rounded-full border border-gray-700 object-cover"
              onError={(e) => {
                e.target.src = "https://i.ibb.co/JpmYDNf/profile.jpg";
              }}
            />
            <span className="text-xs font-medium truncate max-w-20">
              @{item.userName}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-4 pt-8 pb-3">
          <div className="mb-3">
            <h3 className="text-base font-semibold text-white truncate">
              {item.itemTitle}
            </h3>
          </div>
          
          <div className="space-y-2 mb-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Price</span>
              <span className="font-semibold text-green-400">
                {item.itemPrice} ETH
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Copies</span>
              <span className="text-gray-300">
                {item.itemLeft} of {item.totalItem}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Highest Bid</span>
              <span className="font-semibold text-green-400">
                {item.highestBid} ETH
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-4 py-3 border-t border-gray-700 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <span className="text-green-400">&#9679;</span>
            <span>{item.uploadtime}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-red-400">&#10084;</span>
            <span>{item.likes} Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrivals;
