import * as React from 'react'
import {motion} from 'framer-motion'

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

export const Motion = ({i}) => {
  //const style = { border: `2px solid ${colors[i]}` }
  return (
    <motion.li whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>
      {/* <div className="icon-placeholder" style={style} /> */}

      {/* <div className="text-placeholder" style={style} /> */}

      {/* <div className="allCharDiv" /> */}

      <img src={i.imageURL} className="allCharImg" />
    </motion.li>
  )
}
