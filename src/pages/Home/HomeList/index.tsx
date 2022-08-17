import React, { useState, useEffect, memo } from 'react'
import { HomeListWrapper } from './style'
import {Link} from 'react-router-dom'


const HomeList = () => {
    return (
        <HomeListWrapper>
          <div className="list">
          <Link to='#'>
            <img src="/src//assets//images/home/list1.png" alt="" />
            <span>单词训练</span>
           </Link>
           <Link to='#'>
           <img src="/src//assets//images/home/list2.png" alt="" />
            <span>单词本</span>
           </Link>
           <Link to='#'>
            <img src="/src//assets//images/home/list3.png" alt="" />
            <span>单词自检</span>
           </Link>
           <Link to='#'>
           <img src="/src//assets//images/home/list4.png" alt="" />
            <span>单词速听</span>
           </Link>
          </div>
        </HomeListWrapper>
    )
}


export default memo(HomeList) 