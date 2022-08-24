import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const HomeInfoWrapper = styled.div`
margin: ${px2rem(-10)} auto ${px2rem(85)};

.list {
    background-color: #fff;
    width: ${px2rem(360)};
    height: ${px2rem(77)};
    justify-content: space-between;
    margin:${px2rem(20)} auto;
}
.list-content {
  padding-left: ${px2rem(22)};
}
.list-txt {
  font-size:${px2rem(15)};
  color: #9696a0;
}
.list-left {
  margin-top:${px2rem(17)};
    h6 {
        font-size:${px2rem(16)};
        font-weight:bolder
    }
}
img {
  width: ${px2rem(108)};
  height: ${px2rem(77)};
}
.list-contentv2 {
  display: flex;
  justify-content: space-between;
}

`