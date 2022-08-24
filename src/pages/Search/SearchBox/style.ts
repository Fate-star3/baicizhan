import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
   
   .searchbox {
        position:fixed;
        left: 0;
        top: 0;
        width: 100%;
        height:${px2rem(50)};
      .content {
        display:flex;
        justify-content:space-around;
        align-items: center;
        width: 100%;
        height: 100%;

        .left {
            background-color: #fff;
            flex:1;
            border-radius:${px2rem(5)};
            height:${px2rem(30)};
            margin:0 ${px2rem(10)};
            vertical-align:middle;
            .iconfont {
                padding:0 ${px2rem(10)};
                &::before {
                    font-size:${px2rem(10)};
                }
                
            }

        input{
            width:${px2rem(200)};
            height:${px2rem(30)};
            outline:none;
            border:0;
            padding: 0;
            font-size:${px2rem(14)};

        }
       
    }
      }  
      .right {
            font-size:${px2rem(18)};
            color: #000;
            
        }
      
    }
   

`