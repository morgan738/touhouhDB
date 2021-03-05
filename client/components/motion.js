import * as React from 'react'
import {motion} from 'framer-motion'

export const Motion = ({i}) => {
  return (
    <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
      <img src={i.imageURL} className="allCharImg" />
    </motion.li>
  )
}
