import React, { useState, useEffect, memo } from 'react'
import { HomeSearchWrapper } from './style'
import {useNavigate} from 'react-router-dom'

const HomeSearch = () => {
    const navigate = useNavigate()
    return (
        <HomeSearchWrapper>
            <div className="search">
                <div className="search-content">
                    <span className="iconfont icon-qiandao"></span>
                    <div className="search-input" onClick={() => navigate('/search')}>
                        <i className="iconfont icon-fangdajing"></i>
                        <span className="search-txt">查词</span>
                    </div>
                    <span className="iconfont icon-xinxi1"></span>
                </div>
            </div>
        </HomeSearchWrapper>
    )
}


export default memo(HomeSearch)