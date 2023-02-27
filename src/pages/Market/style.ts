import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const EnterLoading = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: auto;
`
export const MarketWrapper = styled.div`
        background-color: #f8f8f9;
    .market-title {
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: ${px2rem(50)};
        z-index: 9999;
        background-color: #f8f8f9;
        span {
            display:inline-block;
            font-size:${px2rem(28)};
            font-weight:bolder;
            padding:${px2rem(10)};
        }
    }
    .market-search {
        margin-top:${px2rem(50)};
        background-color: #fff;
        width: 100%;
        height:${px2rem(40)};
        display:flex;
        align-items:center;
        justify-content: space-evenly;
        .iconfont {
            padding:${px2rem(10)};
        }
        .market-search-list-content-box {
            width: ${px2rem(250)};
            background-color: #edeef0;
            border-radius:${px2rem(20)};
            padding:${px2rem(3)};
            input {
            border:none;
            outline:none;
            background-color: inherit;
        }
        }
        .icon-wode2,.icon-24gl-headset {
            font-size:${px2rem(20)};
            margin-left: ${px2rem(10)};
        }
    }

    .market-swiper  {
            width: 100%;
            text-align:center;
            .swiper-slide{
                width: 100%;
                height: 100%;
                border-radius:0.45rem;
                vertical-align:bottom;
            }
            img {
               width: 100%;

            }
    }
    .market-list {
        display:flex;
        align-items: center;
        justify-content:space-around;
        margin-top: ${px2rem(10)};
        height: ${px2rem(100)};
        .w {
            display:flex;
            align-items: center;
            justify-content:space-around;
            flex-direction:column;
            .list {
                width: ${px2rem(70)};
                height: ${px2rem(70)};
            }
            .list-v1{
                    background:url('/src/assets/images/market/icon1.png') no-repeat;
                    background-size: contain;
                }
            .list-v2{
                    background:url('/src/assets/images/market/icon2.png') no-repeat;
                    background-size: contain;
                }
            .list-v3{
                    background:url('/src/assets/images/market/icon3.png') no-repeat;
                    background-size: contain;
                }
            .list-v4{
                    background:url('/src/assets/images/market/icon4.png') no-repeat;
                    background-size: contain;
                }
                
        }
       
    }
    .market-test {
        position:relative;
        .test-hd {
           display:flex;
            align-items: center;
            justify-content:space-between;
            width: 100%;
            height:${px2rem(60)};
            margin-top: ${px2rem(20)};
            h1 {
                font-weight:bolder;
                color: #000;
                margin-left: ${px2rem(10)};
                font-size:${px2rem(24)};
                font-weight:bolder;
            }
            .next {
                margin-right: ${px2rem(10)};
                span {
                    font-size:${px2rem(16)};
                    color: #bbb;
                }
            }
        }
        .test-bd {
            position: absolute;
            top: ${px2rem(80)};
            left: 0;
            overflow: auto;
            width: 100%;
            height: ${px2rem(350)};
            .container {
                position: absolute;
                width: ${px2rem(1400)};
                height: 100%;
                .pic {
                width: ${px2rem(300)};
                height:${px2rem(300)};   
                margin: ${px2rem(10)} ${px2rem(20)}${px2rem(10)} ${px2rem(10)};
                img {
                    width: ${px2rem(300)};
                    height: ${px2rem(300)};            
                }
            }
            }
          
            
        }
        /* 消除滚动条 */
        .test-bd::-webkit-scrollbar {
            display: none;
        }
    }

    .market-goods {
        margin-top: ${px2rem(350)};
        /* margin-bottom: ${px2rem(10)}; */

        position:relative;
        width: 100%;
        
        .mask {
            position:absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: ${px2rem(300)};
            background:url('/src/assets/images/market/bg.jpg') no-repeat;
            background-size: contain;
        }
        .goods-list {
            display:flex;
            padding-top: ${px2rem(100)};
            flex-wrap:wrap;
            background-color: #eee;       
    .list {
        position:relative;
        z-index: 999;
        width: 45%;
        margin: ${px2rem(10)} auto;
        border-radius:${px2rem(10)};
        background-color: #fff;
        box-sizing:border-box;
}
.list-content{
 display: flex;
 flex-wrap: wrap;
  justify-content: space-between;
}
.list-content-box {
  height: ${px2rem(310)};
}
.list-content-title {
  font-size: ${px2rem(18)};
  font-weight: 700;
  margin:${px2rem(11)} 0;
  padding:0 ${px2rem(10)};
}
.ft-price {
  padding:0 ${px2rem(10)};

}
img {
  width: ${px2rem(175)};
  height: ${px2rem(180)};
}
.list-content-text {

  color: #a99463;
  font-size: ${px2rem(11)};
  margin-bottom: ${px2rem(11)};
  padding:0 ${px2rem(10)};

}
.list-content-ft {
  display: flex;
  justify-content: space-between;
}
.list-content-price {
  font-size: ${px2rem(22)};
  font-weight: 600;
  color: #fb5a39;
}
.list-content-icon {
  color: #fb5a39;
  font-size:${px2rem(16)};
  font-weight:bold;
}
del {
  font-size: ${px2rem(14)};
  color: rgb(160, 160, 160);
  padding-left: ${px2rem(11)};
}
.list-content-people {
  font-size: ${px2rem(11)};
  line-height: ${px2rem(50)};
  color: rgb(160, 160, 160);
  padding-right: ${px2rem(10)};
}
}
 }


    .back_top{
            width:2.27rem;
            height: 2.27rem;
            position: fixed;
            bottom: 5.5rem;
            right: 0.45rem;
            border-radius: 50%;
            line-height: 2rem;
            text-align: center;
            font-size: 1.2rem;
            z-index:999;
            background-color: #fff;
        }
        .cart-fix {
            width:2.27rem;
            height: 2.27rem;
            position: fixed;
            bottom: 2.72rem;
            right: 0.45rem;
            border-radius: 50%;
            line-height: 2rem;
            text-align: center;
            font-size: 1.2rem;
            z-index:999;
            background-color: #fff;
            .cart-content-icon {
                    width: 8vw;
                    height: 8vw;
                    position: absolute;
                    right: -1.33333333vw;
                    top: 8.53333333vw;
                    line-height: 8vw;
                    }
                    .cart-content-iconv2 {
                       position: absolute;
                       top:${px2rem(-5)} ;
                       right: ${px2rem(5)};
                       color: #fff;
                       background-color: #FB4E44;
                       font-size: ${px2rem(10)};
                       width: ${px2rem(30)};
                       height: ${px2rem(30)};
                       font-size: ${px2rem(20)};
                       line-height: ${px2rem(30)};
                       transform: scale(0.5) translate(50%, -50%);
                       border-radius: 50%;
                       text-align: center;
                    }
        }
`