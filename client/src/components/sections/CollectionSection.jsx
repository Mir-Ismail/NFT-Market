import CollectionCard from "../collectionCard";

const collections = [
  {
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    title: "Cyberpunk City Art",
    owner: "Naretor-Nole",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Murphy the Mutant",
    owner: "Johan Doe",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Beeple Special Edition",
    owner: "Nole_moreta",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
    title: "Floyd Mayweather Jr.",
    owner: "Kera_one",
  },
];

export default function CollectionSection() {
  return (
    <section className="py-20 bg-[#0D0D2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="bg-gradient-to-r font-bold text-2xl from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Our Top Collections
        </h2>
        <h2 className="text-4xl font-bold text-white mb-4">
          Popular Collections
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
       
        <div className="flex flex-wrap justify-center gap-4">
          {collections.map((col, idx) => (
            <CollectionCard
              key={idx}
              image={col.image}
              title={col.title}
              owner={col.owner}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
