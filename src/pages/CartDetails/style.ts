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
export const Wrapper = styled.div`

    .goods-back {
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: ${px2rem(44)};
        line-height: ${px2rem(44)};
        padding-left: ${px2rem(10)};
        background-color: #fff;
        z-index: 999;
         .icon-youjiantou3 {
            font-size:${px2rem(20)};
         }
    }

    .goods-swiper  {
        margin-top: ${px2rem(44)};
        .swiper-slide {
            width: 100%;
            height: ${px2rem(390)};
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .goods-content {
        width: 100%;
        .goods-hd {
            width: 100%;
            height: ${px2rem(150)};
            background-color: #fff;
            .price {
                height: ${px2rem(30)};
                line-height: ${px2rem(30)};
                padding-top: ${px2rem(20)};
                margin: 0 ${px2rem(10)} ${px2rem(10)} ${px2rem(10)};
                .price-icon {
                    color: #ff5d20;
                    font-size:${px2rem(13)};
                }
                span {
                    color: #ff5d20;
                    font-weight:bolder;
                    font-size:${px2rem(24)};

                }
                .icon-aixin {
                    float:right;
                }
            }
            .message {
                .left {
                    display:inline-block;
                    span {
                        
                        padding:${px2rem(5)};
                        font-size:${px2rem(13)};
                        background-color: #f9f3e8;
                        color: #c09a50;
                        margin:${px2rem(10)} ${px2rem(5)};
                        border-radius:${px2rem(5)};
                    }
                }
                .right {
                    float:right;
                    margin-right: ${px2rem(20)};
                    span {
                        font-size:${px2rem(16)};
                        color: #ff9170;
                        font-weight:bold;

                    }
                }
            }
            .title {
                margin: ${px2rem(20)} ${px2rem(10)};
                font-weight:bolder;
                font-size:${px2rem(20)};
                color: #141822;
            }
        }
        .goods-bd {
            margin: 0 auto;
            width: ${px2rem(375)};
            height: ${px2rem(150)};
            margin-top: ${px2rem(10)};
            background-color: #fff;
            border-radius:${px2rem(5)};
            .wrap {
                padding: ${px2rem(10)} ${px2rem(8)};

                .sell {
                    .left {
                        color: #b3b9c8 ;
                        font-size:${px2rem(16)};

                    }
                    .right {
                        font-size:${px2rem(16)};
                        padding-left: ${px2rem(20)};
                        color: #141822;
                    }
                    
                }

                .collect {
                    margin-top: ${px2rem(10)};
                    height: ${px2rem(68)};
                    .header {
                        .left {
                        color: #b3b9c8 ;
                        font-size:${px2rem(16)};
                    }
                    .right {
                        display:inline-block;
                        font-size:${px2rem(16)};
                        padding-left: ${px2rem(20)};
                        color: #141822;
                        .icon-youjiantou1 {
                            padding-left: ${px2rem(160)};
                           
                        }
                        
                    }
                    }
                   
                    
                    .footer {
                        .wrap {
                            display:flex;
                            align-items: center;
                            justify-content: start;
                            margin-left: ${px2rem(50)};
                            img {
                                width: ${px2rem(20)};
                                padding-right: ${px2rem(10)};
                            }
                            .collect-v2 {
                                padding: ${px2rem(5)};
                                font-size:${px2rem(12)};
                                background-color: #f8f8f9;
                                color: #b6bdca;
                                
                            }
                            
                        }
                    }
                }
                .send { 
                    .left {
                        color: #b3b9c8 ;
                        font-size:${px2rem(16)};

                    }
                    .right {
                        display:inline-block;
                        font-size:${px2rem(16)};
                        padding-left: ${px2rem(20)};
                        color: #141822;
                        .icon-shuxian {
                            color: #ccc;
                            font-size:${px2rem(16)};
                        }
                        span:nth-child(2) {
                            padding-left: ${px2rem(10)};
                        }
                    }
                }
            }
           
        }
        .goods-ft {
            margin: 0 auto;
            width: ${px2rem(375)};
            height: ${px2rem(50)};
            margin-top: ${px2rem(10)};
            background-color: #fff;
            border-radius:${px2rem(5)};
            .wrap {
                display:flex;
                align-items: center;
                justify-content: space-around;
                span{
                    font-size:${px2rem(13)};
                   
                }
                img {
                    padding: ${px2rem(10)} ;
                    padding-right:0;
                }
            }

        }
        .goods-comment {
            margin: 0 auto;
            width: ${px2rem(375)};
            height: ${px2rem(120)};
            margin-top: ${px2rem(10)};
            background-color: #fff;
            border-radius:${px2rem(5)};
            .hd {
                display:flex;
                align-items: center;
                justify-content: space-between;
                padding: ${px2rem(15)} ${px2rem(10)};
                h1 {
                    font-size:${px2rem(20)};
                    font-weight:bolder;
                }
                span {
                    font-size:${px2rem(16)};
                    color: #ff6b3e;
                    font-weight:bold;


                }
            }
            .bd {
                margin: ${px2rem(10)};
                margin-top: 0;
                    img {
                        width: ${px2rem(35)};
                        border-radius:50%
                    }
                .desc {
                    display:inline-block;
                    padding-left: ${px2rem(10)};
                    .desc-name {
                        font-size:${px2rem(16)};
                        padding-bottom: ${px2rem(6)};
                    }
                    .desc-txt {
                        font-size:${px2rem(12)};
                        color: #9da3b0;
                    }
                }
                p {
                    font-size:${px2rem(18)};
                    padding-top: ${px2rem(5)};
                }
            }
        }
    }
    .goods-like {
            margin: 0 auto;
            width: ${px2rem(375)};
            /* height: ${px2rem(450)}; */
            margin-top:${px2rem(10)};
            background-color: #fff;
            border-radius:${px2rem(5)};
         .title {
                font-size: ${px2rem(22)};
                font-weight: 600;
                height: ${px2rem(52)};
                line-height: ${px2rem(52)};
                padding-left: ${px2rem(10)};
            }
         .like-content{
                 display: flex;
                 flex-wrap:wrap ;
                 justify-content: space-around;
                 background-color: #fff;
                 
            .boxv2 {
                     position:relative;
                     width: ${px2rem(116)};
                     height: ${px2rem(200)};
                     padding:0 0 ${px2rem(10)}${px2rem(10)};
                .boxv2-txt {
                         font-size: ${px2rem(14)};
                         padding-top: 5px;
                    }
                    img {
                      width:${px2rem(100)};
                      height:${px2rem(100)};
                    }
                    .boxv2-price {
                        position:absolute;
                        bottom: ${px2rem(20)};
                        left: ${px2rem(10)};
                      font-size: ${px2rem(20)};
                      font-weight: 600;
                      color: #fb5a39;
                    }
                    .boxv2-icon {
                      color: #fb5a39;
                      font-size:${px2rem(12)};
                    }

            }


 }



    }
    .goods-introduce {
            margin: 0 auto;
            width: ${px2rem(375)};
            margin-top: ${px2rem(10)};
            background-color: #fff;
            border-radius:${px2rem(10)};
            vertical-align:top;
            margin-bottom: 60px;
        img {
            vertical-align:top;
            width: 100%;
        }
    }
    /* footer */
    .goods-footer {
        position:fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60px;
        background-color: #fff;
        .footer {
            display:flex;
            height: 100%;
            justify-content: space-around;
        }
        .footer-icon {
            display:flex;
            width: 40%;
            height: 100%;
            align-items: center;
            justify-content: space-around;
            .icon {
                position:relative;
                a {
                    display:flex;
                    align-items: center;
                    justify-content: space-around;
                    flex-direction:column;
                    height: 100%;

                }
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
                       top:${px2rem(10)} ;
                       right: 0px;
                       color: #fff;
                       background-color: #FB4E44;
                       font-size: ${px2rem(10)};
                       width: ${px2rem(24)};
                       height: ${px2rem(24)};
                       font-size: ${px2rem(20)};
                       line-height: ${px2rem(24)};
                       transform: scale(0.5) translate(50%, -50%);
                       border-radius: 50%;
                       text-align: center;
                    }
                height: 100%;
                span {
                font-size:${px2rem(13)};

                }
                .iconfont {
                    padding-top: ${px2rem(8)};
                    font-size:${px2rem(20)};
            }
            }
            
        }
        .footer-btn {
            display:flex;
            flex:1;
            height: 100%;
            .add {
                flex:1;
                background-color: #ffeee9;
                border:none;
                color: #ff6d41 !important;
                font-size:${px2rem(16)};
                margin: ${px2rem(6)};
                border-radius:${px2rem(7)};
            }
            .buy {
                    flex:1;
                    border:none;
                    background-color: #ff5724;
                    color: #fff;
                    font-size:${px2rem(16)};
                    margin: ${px2rem(6)};
                    border-radius:${px2rem(7)};

            }
         
        }
    }
    .forbid {
    pointer-events:none;
    }
    
`