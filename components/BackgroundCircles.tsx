import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 0.8],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center"
    >
      <div className=" absolute border border-[#edf1cf]/30 mt-52 rounded-full h-[200px] w-[200px] animate-ping" />
      <div className=" absolute border border-slate-500/20 mt-52 rounded-full h-[300px] w-[300px]" />
      <div className=" absolute border border-slate-500/20 mt-52 rounded-full h-[500px] w-[500px] " />
      <div className=" absolute border  mt-52 rounded-full h-[650px] w-[650px] opacity-20 animate-ping border-[#edf1cf] " />
      <div className=" absolute border border-slate-500/20 mt-52 rounded-full h-[800px] w-[800px] " />
    </motion.div>
  );
}
