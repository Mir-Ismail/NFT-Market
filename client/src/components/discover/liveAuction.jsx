import { motion } from "framer-motion";
import AuctionItem from "../AuctionItem";
import auc1 from "../../assets/images/auc_1.jpg";

function LiveAuction() {
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
      timeLeft: "3h 17m",
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
      timeLeft: "2h 51m",
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
      timeLeft: "6h 09m",
      timeLeft: {
        days: "16",
        hours: "20",
        minutes: "7",
        seconds: "41",
      },
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-[#0D0D2B] text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-yellow-400/10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Auctions Details
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 font-medium max-w-4xl mx-auto">
              Home - Auctions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Auction Cards Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Live Auction
            </span>
          </h2>

          {/* Responsive Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-2xl">
            <AuctionItem itemDetails={itemDetails} className="rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default LiveAuction;
