import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'


export const Wrapper = styled.div`
    .searchbox {
        position:fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
      .content {
        display:flex;
        justify-content:space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #fff;
        .left {
            flex:1;
            width: 100%;
            height:100%;
            .iconfont {
                padding:0 ${px2rem(10)};
            }
       
    }
      }  
    
      
    }
    .error-pic {
        position:absolute;
        top: 30%;
        left: 50%;
        transform:translate(-50%,-50%);
        width: 200px;
        img {
            width: 100%;
        }
        span {
            font-size:${px2rem(16)};
            padding-left:${px2rem(40)};
            color: #ccc;
        }
    }
   
` 