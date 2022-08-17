import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'

export const Wrapper = styled.div`

    .cart-back {
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: ${px2rem(44)};
        line-height: ${px2rem(44)};
        padding-left: ${px2rem(10)};
        background-color: #fff;
        z-index: 999;
        span {
            margin-left: ${px2rem(125)};
            font-weight:bolder;
            font-size:${px2rem(20)};

        }
         .icon-youjiantou3 {
            font-size:${px2rem(20)};
         }
    }


    .cart-content {
            margin: 0 auto;
            width: ${px2rem(380)};
            /* height: ${px2rem(180)}; */
            margin-top: ${px2rem(54)};
            border-radius:${px2rem(5)};
            margin-bottom: ${px2rem(80)};
            .title {
                padding: ${px2rem(10)} ${px2rem(5)};
                display:flex;
                align-items: center;
                justify-content:space-around;
                 background-color: #fff;

                span:nth-child(1){
                    font-size:${px2rem(12)};    
                    padding: ${px2rem(3)};
                    color: #fff;
                    background-color: #ff2f57;
                    border-radius:${px2rem(2)};
                }
                span:nth-child(2){
                    font-size:${px2rem(18)};
                    font-weight:bolder;
                }
                span:nth-child(3){
                    font-size:${px2rem(14)};
                    color: #ff6637;
                    font-weight:bold;

                }

            }
            .bd {
                display:flex;
                align-items: center;
                justify-content:space-around;
                padding-top: ${px2rem(20)};
                background-color: #fff;

                .left,.right {
                    width: 45%;
                    height: ${px2rem(100)};
                    border: ${px2rem(1)} solid #f6f7f8;
                    border-radius:${px2rem(5)};
                    img {
                        width: ${px2rem(60)};
                        height: ${px2rem(80)};
                        padding:${px2rem(5)};
                    }
                   .box {
                    position:relative;
                    display:inline-block;
                    width: ${px2rem(95)};
                    height: ${px2rem(100)};
                    vertical-align:top;

                    span {
                        font-size:${px2rem(14)};
                    }
                   }
                   .bottom {
                    position:absolute;
                    left:0;
                    bottom: ${px2rem(8)};
                    .price {
                       color: #ff5d20;
                       font-weight:bold;
                    }
                    .discount {
                        color: #bbb;
                        font-size:${px2rem(10)};
                    }
                    .circle {
                        padding: ${px2rem(2)} ${px2rem(5)} ;
                        display:inline-block;
                        background-color: #e6e9ee;
                        border-radius:50%;
                        margin-left: ${px2rem(5)};
                    }
                   }
                }
                 
            }
            .cart-list {
                margin-top: ${px2rem(10)};
                border-radius:${px2rem(5)};
                background-color: #fff;
                #shopcart {
                    display:flex;
                    align-items: center;
                    justify-content:space-around;
                    
                   img {
                    width: ${px2rem(20)};
                   }
                    .shopcart-box {
                        flex:1;
                        height: ${px2rem(160)};
                        img {
                            width: ${px2rem(120)};
                            height: ${px2rem(120)};
                            padding: ${px2rem(10)};
                        }
                        .cart-box {
                            position:relative;
                            display:inline-block;
                            width: ${px2rem(160)};
                            height: ${px2rem(160)};
                            vertical-align: top;
                            .title {
                                font-size:${px2rem(18)};
                                font-weight:bolder;
                                padding-left: 0;
                            }
                            .price {
                                position:absolute;
                                left: 0;
                                bottom: ${px2rem(26)};
                                .num {
                                    color: #ff6637;
                                    font-size:${px2rem(18)};
                                    font-weight:bolder;

                                }
                                .calculate {
                                    display:inline-block;
                                    margin-left: ${px2rem(15)};
                                    width: ${px2rem(85)};
                                    span {
                                        display:inline-block;
                                        width: 30px;
                                        height: 20px;
                                        line-height: 20px;
                                        text-align: center;
                                        background-color: #eee;
                                    }
                                }
                                .reduce , .add {
                                    display:inline-block;
                                    margin: 0 ${px2rem(5)};
                                 }
                                 .forbid {
                                    pointer-events:none;
                                 }
                            }
                        }
                    }
                }

            }
            
    }
     /* footer */
     .cart-footer {
        position:fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: ${px2rem(60)};
        background-color: #fff;
        .wrap {
            display:flex;
            align-items: center;
            justify-content:space-between;
            height: 100%;
            .collectAll {
                margin-left: ${px2rem(10)};
               img {
                width:${px2rem(20)};
                vertical-align: bottom;
               }
                span {
                    font-size:${px2rem(18)};
                    font-weight:bold;
                    margin-left: ${px2rem(10)};
                }
            }
            .payment {
                span:nth-child(1) {
                    font-size:${px2rem(18)};
                    font-weight:700;
                }
                span:nth-child(2) {
                    color: #ff5d20;
                    padding-left: ${px2rem(10)};
                    font-size:${px2rem(20)};
                    font-weight:700;
                    b {
                    font-size:${px2rem(12)};
                    color: #ff5d20;

                    }
                   
                }

                button {
                    border:none;
                    width: ${px2rem(120)};
                    height: ${px2rem(50)};
                    background-color: #ff5724;
                    color: #fff;
                    border-radius:${px2rem(5)};
                    margin: ${px2rem(5)} ${px2rem(10)} ${px2rem(5)} ${px2rem(15)} ;
                    font-size:${px2rem(18)};

                }
            }
        }
       
    }

   
`
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