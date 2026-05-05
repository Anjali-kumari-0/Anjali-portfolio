import { techStack } from "../data/tech";

export const TechStack = () => {
  return (
    <div className="mx-10 mt-10 border border-white/10 rounded-xl p-4 flex gap-6 justify-center flex-wrap">
      {techStack.map((tech) => (
        <span key={tech.name} className="text-gray-900 px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 border border-gray-700 rounded-2xl text-xs shadow-lg font-bold flex items-center">
          {/* <img src={tech.image} alt={tech.name} className="w-6 h-6 inline-block mr-2" /> */}
           {tech.name}
        </span>
      ))}
    </div>
  );
};