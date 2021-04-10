import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      delay: 0.5
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
}

const nextVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 10px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      // yoyo: 10,//! it will do a to and fro motion in and out to see into the properties of yoyo about increase and decrease in it's size and do it for 5 times in and 5 times out
      duration: 0.3,
      yoyo: Infinity//! repeat for infinite times
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}//! variants allow us to have a clean code writeup
      initial="hidden"
      animate="visible"//! DON'T NEED TO APPLY TRANSITION SEPARATELY
      exit="exit"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                color: "#f8e112",
                originX: 0,
                textShadow: "0px 0px 8px white"
              }}
              transition={{ type: "spring", stiffness: 320 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
        // initial="hidden"
        // animate="visible"//! we don't need them as they will be automatically inherited from parent variant
        >
          <NavLink to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
            >Next</motion.button>
          </NavLink>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;