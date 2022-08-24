import React, { useState, useEffect, memo } from 'react'
import { HomeInfoWrapper } from './style'

interface HomeInfoProps {
    homeinfo: any[];
}


const HomeInfo: React.FC<HomeInfoProps> = (props) => {
    const { homeinfo } = props
    // console.log(homeinfo);
    
    return (
        <HomeInfoWrapper>
            {
                homeinfo.map((item, index) => {
                    return <div key={index + item.imgsrc}>
                        <div className="list">
                            <div className="list-content">
                                <div className="list-contentv2" >
                                    <div className="list-left">
                                        <h6>{item.title}</h6>
                                        <span className="list-txt">{item.text} </span>
                                    </div>
                                    <img src={"/src/assets//images/home/" + item.imgsrc} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </HomeInfoWrapper>
    )
}


export default memo(HomeInfo)