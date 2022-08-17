import React, { memo } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { Wrapper } from './style'


function Error() {
    const navigate = useNavigate()
  
  return (
    <Wrapper>
        <div className="searchbox">
                <div className="content">
                    <div className="left">
                        <div><i className="iconfont icon-youjiantou3" onClick={() => navigate('/')}></i></div>
                        <div className='error-pic'>
                          <img src="https://img01.yzcdn.cn/vant/empty-image-default.png" alt="" />
                          <span>404 is not found</span>
                        </div>
                        
                    </div>
                </div>
            </div>
    </Wrapper>
  )
}
export default Error