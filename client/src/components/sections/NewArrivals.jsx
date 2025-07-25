import { motion } from "framer-motion";
import Arrivals from "../discover/Arrivals";
import new1 from '../../assets/images/new_1.jpg';

export default function NewArrivals() {
  const arrivalDetails = [
    {
      itemImg: new1,
      userImg: "/assets/user1.png",
      userEmail: "@Amilia Nnor",
      itemTitle: "Bored Ape Yacht Club",
      itemPrice: "0.081",
      itemLeft: 1,
      totalItem: 10,
      highestBid: "0.02",
      uploadtime: "4",
      likes: "20",
    },
    {
      itemImg: new1,
      userImg: "/assets/user2.png",
      userEmail: "@JohanDone",
      itemTitle: "After Snow: Attraction",
      itemPrice: "0.081",
      itemLeft: 3,
      totalItem: 10,
      timeLeft: "3h 17m",
      highestBid: "0.02",
      uploadtime: "4",
      likes: "20",
    },
    {
      itemImg: new1,
      userImg: "/assets/user3.png",
      userEmail: "@LarySmith",
      itemTitle: "Mortimer Crypto Mystic",
      itemPrice: "0.081",
      itemLeft: 2,
      totalItem: 10,
      timeLeft: "2h 51m",
      highestBid: "0.02",
      uploadtime: "4",
      likes: "20",
    },
    {
      itemImg: new1,
      userImg: "/assets/user4.png",
      userEmail: "@SmithWright",
      itemTitle: "People are the Pillars",
      itemPrice: "0.081",
      itemLeft: 5,
      totalItem: 10,
      timeLeft: "6h 09m",
      highestBid: "0.02",
      uploadtime: "4",
      likes: "20",
    },
  ];
  return (
    <section className="py-20 pb-32 bg-[#0D0D2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-pink-400 font-semibold mb-2">Discover New Items</h3>
        <h2 className="text-4xl font-bold text-white mb-4">New Listed Items</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {arrivalDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-3d relative group transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <Arrivals item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}