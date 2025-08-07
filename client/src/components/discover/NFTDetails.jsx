import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Clock, AlignJustify } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { buildFileUrl } from "../../config/api";

const NFTDetails = ({ nft }) => {
  const [bids, setBids] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Only create mock bids if nft exists and has a price
    if (!nft || !nft.price) {
      setBids([]);
      return;
    }

    const mockBids = [
      {
        id: 1,
        amount: nft.price,
        bidder: {
          name: "Wadee-Nel",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        },
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      },
      {
        id: 2,
        amount: (nft.price * 0.8).toFixed(2),
        bidder: {
          name: "Johan Donem",
          avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        },
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
      },
      {
        id: 3,
        amount: (nft.price * 0.6).toFixed(2),
        bidder: {
          name: "Morgan Wright",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        },
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
      },
      {
        id: 4,
        amount: (nft.price * 0.4).toFixed(2),
        bidder: {
          name: "Amillia Nnor",
          avatar:
            "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        },
        timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(), // 8 hours ago
      },
    ];
    setBids(mockBids);
  }, [nft]);

  if (!nft) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-2xl font-bold mb-4">NFT not found</div>
          <div className="text-gray-400">
            The NFT you're looking for doesn't exist or has been removed.
          </div>
        </div>
      </div>
    );
  }

  // Calculate USD values (assuming 1 ETH = $1571.24)
  const ethToUsd = 1571.24;
  const currentPriceUsd = (parseFloat(nft.price || 0) * ethToUsd).toFixed(2);
  const highestBidUsd = (parseFloat(nft.price || 0) * ethToUsd).toFixed(2);

  // Function to get file path
  const getFilePath = (file) => {
    if (typeof file === "string") {
      return buildFileUrl(file);
    } else if (file && file.storagePath) {
      return buildFileUrl(file.storagePath);
    }
    return "https://via.placeholder.com/300x200?text=Image+Not+Found";
  };

  // Function to handle author click
  const handleAuthorClick = () => {
    console.log("Author data:", nft.author); // Debug log
    if (nft.author && nft.author._id) {
      navigate(`/author-profile/${nft.author._id}`);
    } else {
      console.log("No author ID found, cannot navigate");
    }
  };

  return (
    <section className="py-10 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-white">
          {/* Left Section: NFT Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={getFilePath(nft.file)}
                alt={nft.name}
                className="w-full h-[608px] object-contain rounded-2xl shadow-2xl border border-gray-600/30"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Image+Not+Found";
                }}
              />
              {/* Subtle border effect */}
              <div className="absolute inset-0 rounded-2xl border border-dashed border-gray-500/20 pointer-events-none"></div>
            </div>
          </div>

          {/* Middle Section: NFT Details */}
          <div className="lg:col-span-4 space-y-2">
            {/* Category Tag */}
            <div className="max-w-60 rounded-full px-4 flex space-x-2 border-2 border-slate-100 p-2 text-medium font-medium text-white hover">
              <AlignJustify />
              <div className="cursor-pointer hover:text-purple-700">
                {nft.category || "Uncategorized"}
              </div>
            </div>

            {/* NFT Title */}
            <h1 className="text-2xl font-medium text-white">
              {nft.name || "Untitled NFT"}
            </h1>

            {/* Current Price */}
            <div className="p-1 py-1rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-200 text-white text-lg">
                  Current Price
                </span>
                <div className="text-right">
                  <div className="text-white-200">{nft.price || 0} ETH</div>
                  <div className="text-purple-200 text-lg">
                    ${currentPriceUsd}
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-400 text-right">
                {nft.copies || 1}/{nft.totalCopies || 1}
              </div>
            </div>

            {/* NFT Metadata */}
            <div className="space-y-4 p-2 rounded-xl">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Artist</span>
                <span
                  className="text-white font-small cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={handleAuthorClick}
                >
                  {nft.author?.name ||
                    nft.author?.email ||
                    (nft.author ? "Author (No Name)" : "Unknown Author")}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Size</span>
                <span className="text-white font-medium">
                  {nft.size || "Unknown"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Created</span>
                <span className="text-white font-small">
                  {nft.createdAt
                    ? new Date(nft.createdAt).toLocaleDateString()
                    : "Unknown"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Collection</span>
                <span className="text-purple-300 font-medium">
                  {nft.category || "Uncategorized"} Collection
                </span>
              </div>
            </div>

            {/* Item Owner */}
            <div className="flex items-center space-x-4 p-2 rounded-x">
              <img
                src={nft.author?.pic || "https://i.ibb.co/JpmYDNf/profile.jpg"}
                alt={nft.author?.name || "Owner"}
                className="w-12 h-12 rounded-full border-2 border-purple-500 object-cover"
                onError={(e) => {
                  e.target.src = "https://i.ibb.co/JpmYDNf/profile.jpg";
                }}
              />
              <div>
                <div
                  className="font-small text-white cursor-pointer hover:text-purple-400 transition-colors"
                  onClick={handleAuthorClick}
                >
                  {nft.author?.name ||
                    nft.author?.email ||
                    (nft.author ? "Author (No Name)" : "Unknown Author")}
                </div>
                <div className="text-sm text-gray-400">Item Owner</div>
              </div>
            </div>

            {/* Highest Bid */}
            <div className=" p-2 rounded-xl border border-gray-700/50 bg-slate-900">
              <h2 className="text-xl font-bold mb-4 text-white">Highest Bid</h2>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={
                      bids[0]?.bidder.avatar ||
                      "https://i.ibb.co/JpmYDNf/profile.jpg"
                    }
                    alt={bids[0]?.bidder.name || "Bidder"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="text-white font-small">
                    {bids[0]?.bidder.name || "No bids yet"}
                  </span>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <div>
                      <div className="font-bold text-white">
                        {nft.price || 0} ETH
                      </div>
                      <div className="text-purple-300">${highestBidUsd}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Purchase Button */}
            <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-4 rounded-xl font-bold text-white text-lg hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Link to="/connect-wallet">PURCHASE NOW</Link>
            </button>
          </div>

          {/* Right Section: Bids and History */}
          <div className="lg:col-span-3 space-y-6">
            {/* Latest Bids */}
            <div className="p-2 rounded-xl border border-gray-700/50">
              <h2 className="text-xl font-bold mb-4 text-white">Latest Bids</h2>
              <div className="space-y-4">
                {bids.length > 0 ? (
                  bids.slice(0, 4).map((bid, index) => {
                    const bidUsd = (parseFloat(bid.amount) * ethToUsd).toFixed(
                      2
                    );
                    const bidTime = new Date(bid.timestamp).toLocaleTimeString(
                      [],
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    );
                    return (
                      <div
                        key={bid.id}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={bid.bidder.avatar}
                            alt={bid.bidder.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm text-white">
                              by {bid.bidder.name}
                            </div>
                            <div className="text-xs text-gray-400">
                              Bid at {bid.amount} ETH
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-purple-300 font-small">
                            ${bidUsd}
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-gray-400">
                            <Clock className="w-3 h-3" />
                            <span>{bidTime}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-gray-400 text-center py-4">
                    No bids yet
                  </div>
                )}
              </div>
            </div>

            {/* History */}
            <div className="p-4 rounded-xl border border-gray-700/50">
              <h2 className="text-xl font-bold mb-4 text-white">History</h2>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={
                      nft.author?.pic || "https://i.ibb.co/JpmYDNf/profile.jpg"
                    }
                    alt={nft.author?.name || "Author"}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm text-white">
                      Listed by{" "}
                      {nft.author?.name || nft.author?.email || "Unknown"}
                    </div>
                    <div className="text-xs text-gray-400">
                      Price {nft.price || 0} ETH
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>
                    {nft.createdAt
                      ? new Date(nft.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "Unknown"}
                  </span>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 text-center">
              <h3 className="font-bold mb-4 text-white">Biding Ends In :</h3>
              <Countdown
                date={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)} // 7 days from now
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="bg-gray-900 border border-gray-600 rounded-lg p-3 mb-1">
                        <div className="text-2xl font-bold text-white">
                          {days}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">days</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 border border-gray-600 rounded-lg p-3 mb-1">
                        <div className="text-2xl font-bold text-white">
                          {hours}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">hours</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 border border-gray-600 rounded-lg p-3 mb-1">
                        <div className="text-2xl font-bold text-white">
                          {minutes}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gray-900 border border-gray-600 rounded-lg p-3 mb-1">
                        <div className="text-2xl font-bold text-white">
                          {seconds}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">seconds</div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTDetails;
