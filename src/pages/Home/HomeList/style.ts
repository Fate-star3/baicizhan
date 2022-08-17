import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const HomeListWrapper = styled.div`
    width: 100%;
   .list {
    display:flex;
    width: 100%;
    height:${px2rem(100)};
    align-items: center;
    justify-content:space-between;
        a {
            display:flex;
            width: ${px2rem(75)};
            height: ${px2rem(75)};
            flex-direction:column;
            align-items: center;
            justify-content:space-around;
            background-color: #fff;
            border-radius:${px2rem(5)};
            img {
                width :${px2rem(50)};
            }
            span {
                font-size:${px2rem(14)};
                color: #9696a0;
            }
        }
   }
`