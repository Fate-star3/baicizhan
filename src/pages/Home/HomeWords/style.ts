import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const HomeWordsWrapper = styled.div`
.home-word {
margin-top:${px2rem(75)};
border-radius:${px2rem(10)};

.word {
    background-color: #fff;
    height:${px2rem(116)};
}
.word-hd {
  width: ${px2rem(383.5)};
  /* width: 100%; */
  height: 100%;
  
}
.word-content {
  display: flex;
  width: ${px2rem(381)};
  height: ${px2rem(133)};
  box-sizing: border-box;

  border-bottom: ${px2rem(11)} solid #e9e9e9;

}
img {
  margin: ${px2rem(11)};
  width: ${px2rem(60)};
  height: ${px2rem(85)};
  vertical-align: middle;
}
.word-mid {
  /* box-sizing: border-box; */
  width: 100%;
  background-color: #fff;
}
.word-mid-box {
  width: ${px2rem(280)};
  display: flex;
  justify-content: space-between;
  margin-top: ${px2rem(11)};
  box-sizing: border-box;
    h6 {
        font-size:${px2rem(18)};
        font-weight: bold;
        padding-top: ${px2rem(4)};
    }
}
.word-mid-btn {
  width: ${px2rem(88.5)};
  height: ${px2rem(28)};
  border: ${px2rem(1)} solid #e6e6e6;
  background: #ffffff;
  text-align: center;
  border-radius: ${px2rem(4.5)};
  /* text-align: center; */
  line-height: ${px2rem(28)};
  font-size: ${px2rem(11)};
  margin-top: ${px2rem(3)};

}
.word-mid-last {
  font-size: ${px2rem(11)};
}
/* 进度条 */
.word-mid-range {
  width: ${px2rem(280)};
  display: flex;
  margin-top: ${px2rem(10)};
}
.word-mid-rangev2 {
  display: block;
  width: ${px2rem(11)};
  height: ${px2rem(6)};
  background: blue;
  border-radius: ${px2rem(2)} 0rem 0rem ${px2rem(2)};
}
.word-mid-rangev3 {
  display: block;
  width: ${px2rem(270)};
  height: ${px2rem(6)};
  background: gray;
  border-radius: 0rem ${px2rem(2)} ${px2rem(2)} 0rem;
}
.word-right {
  width: ${px2rem(280)};
  display: flex;
  justify-content: space-between;
  font-size: ${px2rem(14)};
  color: #d1d1d2;
  margin-top: ${px2rem(6)};
}
.word-dialog {
  width:${px2rem(155)};
  height: ${px2rem(30)};
  text-align: center;
  background: #283044;
  font-size: ${px2rem(14)};
  text-align: center;
  color: #ffffff;
  line-height: ${px2rem(30)};
  border-radius:${px2rem(5)};
  transform: scale(0.833);
  position: relative;
  bottom: ${px2rem(45)};
}
.word-dialog-desc {
  display: block;
  height: 0rem;
  width: 0rem;
  border-top: ${px2rem(8)} solid rgba(255, 0, 0, 0);
  border-bottom: ${px2rem(8)} solid #2e2f4b;
  border-left: ${px2rem(8)} solid rgba(255, 0, 0, 0);
  border-right: ${px2rem(8)} solid rgba(255, 0, 0, 0);
  position: absolute;
  bottom: ${px2rem(30)};
  left: ${px2rem(22)};
}


/* 今日计划 */
.plan {
    border-top: ${px2rem(1)} solid #ccc;
    width: ${px2rem(383)};
  height: ${px2rem(280)};
}
.plan-container {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 0 0 ${px2rem(10)} ${px2rem(10)};
}
.plan-top {
  padding-top: ${px2rem(22)};
}
.plan-top-left {
  width: ${px2rem(77)};
  font-weight: 600;
  margin-left: ${px2rem(22)};
  margin-right: ${px2rem(88)};
}
.plan-top-right {
  font-size: ${px2rem(14)};
  color: #3158db;
  font-weight:bold;
}
.plan-mid {
  padding-top: ${px2rem(39)};
  margin-left: ${px2rem(25)};
  font-size: ${px2rem(11)};
  padding-bottom:${px2rem(5)} ;
}
.plan-mid-txt {
  margin-right: ${px2rem(144)};
  font-size:${px2rem(16)};
  font-weight:bold;
}
.plan-mid-txtv2 {
  font-size:${px2rem(16)};
  font-weight:bold;
}
.plan-number {
  display: flex;
}
.plan-number-num {
  font-weight: 600;
  font-size: ${px2rem(50)};
  font-style: italic;
}
.plan-number-new {
  margin-left:${px2rem(22)};
}
.plan-number-review {
  margin-left: ${px2rem(100)};
}
.wu {
  font-weight: 800;
  font-size: ${px2rem(60)};
  font-style: italic;
}
.plan-number-txt {
  font-weight: ${px2rem(221)};
}
.icon-dengdai {
  font-size: ${px2rem(13)};
  text-align: center;
  margin-top: ${px2rem(17)};
}
.start {
  width: ${px2rem(340)};
  height: ${px2rem(60)};
  background: #2d52d4;
  border-radius: ${px2rem(5)};
  color: #ffffff;
  font-weight: 400;
  text-align: center;
  line-height: ${px2rem(60)};
  margin: auto;
  margin-top: ${px2rem(11)};
}

}


`