import { CheckCircle, Target, Users, Award } from "lucide-react";
import { motion } from "framer-motion";
import "./CreateItem.css";
import ProfileCard from "../components/ProfileCard";
import { useState } from "react";
import axios from "axios";

function CreateItem() {
  // const [profileData, setProfileData] = useState({
  //   name: "Morgan Wright",
  //   role: "Creative NFTs Designer",
  //   bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio labore.",
  //   shortId: "Xjo03s-osi6732...",
  //   bgImage: "https://i.ibb.co/q9XMGq3/bg.jpg",
  //   profileImage: "https://i.ibb.co/JpmYDNf/profile.jpg",
  // });
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [size, setSize] = useState("");
  const [copies, setCopies] = useState(1);
  const [file, setFile] = useState(null);
  const handleFileChange = async (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!file) {
      alert("Please upload a file");
      return;
    }
    if (!itemName || !category || !price) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", itemName);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("royalties", royalties);
      formData.append("size", size);
      formData.append("copies", copies);

      const response = await axios.post(
        "http://localhost:8234/api/nft/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("NFT created successfully:", response.data);

      toast.success("NFT created successfully!");

      // Reset form
      setItemName("");
      setCategory("");
      setDescription("");
      setPrice("");
      setRoyalties("");
      setSize("");
      setCopies(1);
      setFile(null);
    } catch (error) {
      console.error("Error creating NFT:", error);
      alert(
        `Error creating NFT: ${error.response?.data?.error || error.message}`
      );
    }
  };

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every strategy is designed with measurable ROI and growth metrics in mind",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We grow when you grow",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do",
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        {/* NFTMarket Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>

        {/* Modern Geometric Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-26 h-26 border border-purple-500 rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-yellow-400 rotate-12 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-15 h-15 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
        <div
          className="shape-3d shape-pyramid top-20 left-15 animate-floating3d opacity-14"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="shape-3d shape-cube top-1/4 right-15 animate-spiral opacity-16"
          style={{ animationDelay: "1.3s" }}
        ></div>
        <div
          className="shape-3d shape-sphere bottom-1/3 left-1/4 animate-rotate3d opacity-13"
          style={{ animationDelay: "2.1s" }}
        ></div>
        <div
          className="shape-3d shape-pyramid top-1/2 right-1/3 animate-orbit opacity-17"
          style={{ animationDelay: "0.6s" }}
        ></div>
        <div
          className="shape-3d shape-cube bottom-15 left-15 animate-morphing opacity-12"
          style={{ animationDelay: "3.4s" }}
        ></div>
        <div
          className="shape-3d shape-sphere top-45 left-1/2 animate-floating3d opacity-15"
          style={{ animationDelay: "1.9s" }}
        ></div>
        <div
          className="shape-3d shape-pyramid bottom-20 right-20 animate-spiral opacity-18"
          style={{ animationDelay: "2.7s" }}
        ></div>
        <div
          className="shape-3d shape-cube top-65 right-1/4 animate-rotate3d opacity-11"
          style={{ animationDelay: "0.3s" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-5xl font-bold mb-8 leading-tight">
              <span
                className="text-white"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
              >
                Create New Item
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-small max-w-4xl mx-auto leading-relaxed">
              Home - Create New Item
            </p>
          </motion.div>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-span-1 sm-12"
            >
              <ProfileCard />
            </motion.div>

            {/* Right Create Item Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-span-2 bg-[#0b1120] p-8 rounded-2xl text-white shadow-xl"
            >
              {/* Title */}
              <h2 className="text-2xl font-bold mb-6">Create Item</h2>

              {/* Upload File Box */}
              <div className="border border-gray-600 border-dashed rounded-lg p-6 text-center mb-6">
                <p className="text-sm text-gray-400 mb-4">
                  PNG, GIF, WEBP, MP4 or MP3. Max 100mb
                </p>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block cursor-pointer bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                >
                  UPLOAD FILE
                </label>
                {file && (
                  <div className="mt-2 text-sm text-green-400">{file.name}</div>
                )}
              </div>

              {/* Item Name */}
              <div className="mb-4">
                <label className="block text-sm mb-2">Item name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-[#141a2e] text-white border border-gray-600"
                  placeholder="Enter item name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div className="mb-4">
                <label className="block text-sm mb-2">
                  Choose item Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Art",
                    "Virtual Worlds",
                    "Purchases",
                    "NFT Gifts",
                    "Collectibles",
                    "Gifts",
                    "Trading Cards",
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`border border-white/30 rounded-full px-4 py-1 text-sm transition ${
                        category === cat
                          ? "bg-purple-700 text-white"
                          : "hover:bg-purple-700"
                      }`}
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm mb-2">Item Description</label>
                <textarea
                  rows="3"
                  className="w-full p-2 rounded bg-[#141a2e] text-white border border-gray-600"
                  placeholder="Write about the item..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              {/* Price, Royalties, Size */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-2">Price (ETH)</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-[#141a2e] text-white border border-gray-600"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Royalties</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-[#141a2e] text-white border border-gray-600"
                    value={royalties}
                    onChange={(e) => setRoyalties(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Size</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-[#141a2e] text-white border border-gray-600"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  />
                </div>
              </div>

              {/* Number of Copies */}
              <div className="mb-6">
                <label className="block text-sm mb-2">Number of copies</label>
                <input
                  type="number"
                  className="w-full p-2 rounded bg-[#141a2e] text-white border border-gray-600"
                  value={copies}
                  onChange={(e) => setCopies(Number(e.target.value))}
                />
              </div>

              {/* Create Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:opacity-90"
              >
                CREATE ITEM
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateItem;
