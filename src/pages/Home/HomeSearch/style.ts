import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const HomeSearchWrapper = styled.div`

.search {
  position: fixed;
  top: 0px; 
  left:0px;
  width: 100%;
  height:${px2rem(75)};
  background: #f9f9f9;
  z-index: 999;
}
.search-content {
  display: flex;
  justify-content: space-around;
  /* margin-top: 0.1rem; */
  align-items: center;
  padding-top: ${px2rem(15)};
}
.search-input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${px2rem(250)};
  height: ${px2rem(35)};
  border-radius: ${px2rem(15)};
  background: #edeef0;
}
.icon-qiandao {
  font-size: ${px2rem(18)};
}
.icon-fangdajing {
  padding-right:${px2rem(6)};
  font-size: ${px2rem(16)};
}
.search-txt {
  transform: scale(0.833);
  font-size: ${px2rem(14)};
  border:none;
  outline:none;
}
.icon-xinxi1 {
  font-size: ${px2rem(20)};
}

`