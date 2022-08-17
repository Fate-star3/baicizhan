import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`
     .search-history {
        background-color: #fff;
        margin-top:${px2rem(50)};
        .title {
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding:${px2rem(10)};
            h1 {
                font-size:${px2rem(18)};
            }
        }
    }

`