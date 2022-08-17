import React, { useState, useEffect, memo } from 'react'
import { HomeWordsWrapper } from './style'


const HomeWords = () => {
    return (
        <HomeWordsWrapper>
            <div className="home-word">
                <div className="word">
                    <div className="word-hd">
                        <div className="word-content">
                            <div className="word-pic">
                                <img src="/src/assets/images/home//shouye.jpg" alt="" />
                            </div>
                            <div className="word-mid">
                                <div className="word-mid-box">
                                    <h6>四级词汇</h6>
                                    <div className="word-mid-btn">调整计划</div>
                                </div>
                                <div className="word-mid-last">每日20词, 剩余156天</div>
                                <div className="word-mid-range">
                                    <span className="word-mid-rangev2"></span>
                                    <span className="word-mid-rangev3"></span>
                                </div>
                                <div className="word-right">
                                    <span>已学单词</span>
                                    <span className="word-right-time"> 22/3130</span>
                                </div>
                            </div>
                        </div>
                        <div className="word-dialog">点这里,查看本书单词<span className="word-dialog-desc"></span></div>
                    </div>
                </div>
                <div className="plan">
                    <div className="plan-container">
                        <div className="plan-top">
                            <span className="plan-top-left">今日计划</span>
                            <span className="plan-top-right">领先一步,6月份四级考分见</span>
                        </div>
                        <div className="plan-mid">
                            <span className="plan-mid-txt ">需新学</span>
                            <span className='plan-mid-txtv2' >需复习</span>
                        </div>
                        <div className="plan-number">
                            <div className="plan-number-new">
                                <span className="plan-number-num">20 </span>
                                <span className="plan-number-txt">词</span>
                            </div>
                            <div>
                                <div className="plan-number-review">
                                    <span className="plan-number-num">5 </span><span className="plan-number-txt">词</span>
                                </div>
                            </div>
                        </div>
                        <div className="iconfont icon-dengdai">&nbsp; 预计用时8分钟</div>
                        <div className="start" >开始背单词吧！</div>
                    </div>

                </div>
            </div>
        </HomeWordsWrapper>
    )
}


export default memo(HomeWords)