import { useState, useEffect } from "react";
import axios from "axios";
import Arrivals from "../discover/Arrivals";
import { useLocation } from "react-router-dom";
import { buildApiUrl } from "../../config/api";

export default function NewArrivals({ categories = [], isHomePage = false }) {
  const [nfts, setNfts] = useState([]);
  const [sortedNfts, setSortedNfts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsPerPage] = useState(isHomePage ? 8 : 12);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  // Default categories if none provided
  const defaultCategories = [
    "All",
    "Art",
    "Virtual Worlds",
    "Purchases",
    "NFT Gifts",
    "Collectibles",
    "Gifts",
    "Trading Cards",
  ];

  // Use provided categories or default categories
  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  // Check if this is the home page (either from prop or location)
  const isHomePageContext = isHomePage || location.pathname === "/";

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(buildApiUrl("/api/nfts"));
        console.log("Fetched NFTs:", response.data); // Debug log
        console.log("Number of NFTs:", response.data.length); // Debug log
        
        if (response.data && Array.isArray(response.data)) {
          setNfts(response.data);
          setSortedNfts(response.data);
        } else {
          console.error("Invalid NFT data format:", response.data);
          setError("Invalid data format received from server");
        }
      } catch (err) {
        console.error("Error fetching NFTs:", err);
        setError("Failed to load NFTs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchNFTs();
  }, []);

  // Handle category filtering
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);

    let filtered = [...nfts];
    if (category !== "All") {
      filtered = nfts.filter((nft) => nft.category === category);
    }

    // Apply current sorting to filtered results
    let sorted = [...filtered];
    if (sortOption === "price-low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "newest") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setSortedNfts(sorted);
  };

  // Handle sorting
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);

    let sorted = [...sortedNfts];
    if (value === "price-low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "price-high-low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (value === "newest") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else {
      // Reset to filtered results without sorting
      let filtered = [...nfts];
      if (selectedCategory !== "All") {
        filtered = nfts.filter((nft) => nft.category === selectedCategory);
      }
      sorted = filtered;
    }
    setSortedNfts(sorted);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedNfts.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return (
      <section className="py-10 bg-[#0D0D2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10 bg-[#0D0D2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-red-400 text-lg mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-[#0D0D2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isHomePageContext ? (
          <div className="text-center mb-12">
            <h2 className="bg-gradient-to-r font-bold text-2xl from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Discover New Items
            </h2>
            <h2 className="text-4xl font-bold text-white mb-4">
              New Listed Items
            </h2>
          </div>
        ) : (
          <>
            {/* Category Filter */}
            {displayCategories.length > 0 && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {displayCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-purple-600 text-white"
                          : "bg-[#181A2A] text-gray-300 hover:bg-[#2A2D3A] border border-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
                   <p className="text-gray-300 text-sm">
                     Showing {indexOfFirstItem + 1}–
                     {Math.min(indexOfLastItem, sortedNfts.length)} of{" "}
                     {sortedNfts.length} results
                     {selectedCategory !== "All" && ` in ${selectedCategory}`}
                   </p>
                   <select
                     value={sortOption}
                     onChange={handleSortChange}
                     className="bg-[#181A2A] text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:border-purple-500 transition"
                   >
                     <option value="default">Default sorting</option>
                     <option value="price-low-high">Price: Low to High</option>
                     <option value="price-high-low">Price: High to Low</option>
                     <option value="newest">Newest First</option>
                   </select>
                 </div>
              </div>
            )}
          </>
        )}

        {/* NFT Cards Grid */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentItems.map((nft) => (
              <Arrivals key={nft._id} nft={nft} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-gray-400 text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedCategory !== "All"
                  ? `No NFTs in ${selectedCategory}`
                  : "No NFTs Available"}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {selectedCategory !== "All"
                  ? `There are currently no NFTs in the ${selectedCategory} category.`
                  : "Be the first to create and list an NFT!"}
              </p>
              {!isHomePageContext && (
                <button
                  onClick={() => window.location.href = "/createitem"}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold"
                >
                  Create Your First NFT
                </button>
              )}
            </div>
          </div>
        )}

        {/* Pagination - Only show on dedicated page */}
        {!isHomePageContext && sortedNfts.length > itemsPerPage && (
          <div className="flex justify-center mt-8 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                currentPage === 1
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              Prev
            </button>
            <button
              disabled={indexOfLastItem >= sortedNfts.length}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                indexOfLastItem >= sortedNfts.length
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
