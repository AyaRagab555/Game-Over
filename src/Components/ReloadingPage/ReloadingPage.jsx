import React from 'react';
import { motion } from "framer-motion"


export default function ReloadingPage() {
  return <>
  <div className="center">
  <motion.i animate={{y:["100%", "-100%"]}} transition={{duration: 0.5 ,repeat: Infinity,repeatType: 'reverse'}} className="bi bi-circle pink fs-3 mx-2"></motion.i>    
  <motion.i animate={{y:["100%", "-100%"]}} transition={{duration: 0.5 ,repeat: Infinity,repeatType: 'reverse',delay:0.4}} className="bi bi-triangle-fill pirple fs-3 mx-2"></motion.i>
  <motion.i animate={{y:["100%", "-100%"]}} transition={{duration: 0.5 ,repeat: Infinity,repeatType: 'reverse',delay: 0.2}} className="bi bi-square text-warning fs-3 mx-2"></motion.i>
  <motion.i animate={{y:["100%", "-100%"]}} transition={{duration: 0.5 ,repeat: Infinity,repeatType: 'reverse',delay: 0.6}} className="bi bi-diamond-fill text-success fs-3 mx-2"></motion.i>
</div>
</>
}
