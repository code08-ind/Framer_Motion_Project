import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 10px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      // yoyo: 10,//! it will do a to and fro motion in and out to see into the properties of yoyo about increase and decrease in it's size and do it for 5 times in and 5 times out
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <NavLink to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </NavLink>
      <Loader />
    </motion.div>
  )
}

export default Home;