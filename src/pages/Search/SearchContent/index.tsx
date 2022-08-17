import React, { useState, useEffect, memo, useRef, useMemo } from 'react'
import { Wrapper } from './style'
import { useNavigate } from 'react-router-dom'

const SearchContent = () => {
   
    return (
        <Wrapper>
            <div className="search-history">
                <div className="title">
                    <h1 >搜索历史 </h1>
                    <i className='iconfont icon-shuaxin'></i>
                </div>

            </div>
        </Wrapper>
    )
}


export default memo(SearchContent)