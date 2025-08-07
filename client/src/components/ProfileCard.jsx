import { React, useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ProfileCard = ({
  name = "User Name",
  role = "Creative NFTs Designer",
  bio = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio labore.",
  shortId = "Xjo03s-osi6732...",
  bgImage = "https://i.ibb.co/q9XMGq3/bg.jpg",
  profileImage = "https://i.ibb.co/JpmYDNf/profile.jpg",
}) => {
  const [localName, setLocalName] = useState(name);
  const [localRole, setLocalRole] = useState(role);
  const [localBio, setLocalBio] = useState(bio);
  const [localShortId, setLocalShortId] = useState(shortId);
  const [localBgImage, setLocalBgImage] = useState(bgImage);
  const [localProfileImage, setLocalProfileImage] = useState(profileImage);

  // If props change, update state (for dynamic API data)
  useEffect(() => {
    setLocalName(name);
    setLocalRole(role);
    setLocalBio(bio);
    setLocalShortId(shortId);
    setLocalBgImage(bgImage);
    setLocalProfileImage(profileImage);
  }, [
    name,
    role,
    bio,
    shortId,
    bgImage,
    profileImage,
  ]);

  return (
    <div className="bg-[#0b1120] rounded-2xl overflow-hidden shadow-xl text-white text-center p-6">
      <div className="relative">
        <img
          src={localBgImage}
          alt="Background"
          className="w-full h-40 object-cover rounded-t-2xl"
        />
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <img
            className="w-16 h-16 rounded-full border-4 border-[#0b1120]"
            src={localProfileImage}
            alt="Profile"
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold">{localName}</h2>
        <p className="text-sm text-purple-400">{localRole}</p>
        <p className="text-sm text-gray-400 mt-3">{localBio}</p>

        <div className="flex items-center bg-[#141a2e] rounded-lg px-3 py-2 mt-4">
          <input
            type="text"
            value={localShortId}
            onChange={(e) => setLocalShortId(e.target.value)}
            className="flex-1 bg-transparent text-white border-none outline-none"
            placeholder="Enter item name"
          />
          <button className="ml-2 text-gray-400 hover:text-white p-2 rounded-lg transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16h8M8 12h8m-6-4h6m2 2a9 9 0 11-6.219-8.487"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center space-x-4 mt-4 text-lg">
          <a href="#" className="hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-red-600">
            <FaGooglePlusG />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-pink-600">
            <FaInstagram />
          </a>
        </div>

        <button className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full text-white font-semibold shadow-md hover:opacity-90">
          FOLLOW
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
