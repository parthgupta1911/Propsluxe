import React, { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";

const View = () => {
  const [showColors, setShowColors] = useState(true);
  const colors = [
    {
      _id: 9001,
      title: "Hill Facing",
    },
    {
      _id: 9002,
      title: "Sea Facing",
    },
    {
      _id: 9003,
      title: "Modern Cities",
    },
    {
      _id: 9004,
      title: "Peacefully Silent",
    },
    {
      _id: 9005,
      title: "Farmhouse",
    },
  ];

  return (
    <div>
      <div
        onClick={() => setShowColors(!showColors)}
        className="cursor-pointer"
      >
        <NavTitle title="Sort By View" icons={true} />
      </div>
      {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {colors.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default View;
