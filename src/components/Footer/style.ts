import styled from 'styled-components'

export const FooterWrapper = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2.3rem;
    background-color:#fff;
    font-size:0.8rem;
    z-index: 999;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-top: 0.2rem;
        /* 添加& 是为了取消空格  在a元素本身上添加类名 而不是子代元素 */
        &.active {
            
            div:first-child {
                transform: scale(0.83);
                
            }
            div {
                color: #2e3649 !important;
            }
            div.icon_home {
            background-image: url('/src/assets//images/footer/home.png');
            
                
            }
            div.icon_lesson{
            background-image: url('/src/assets//images/footer/lesson2.png');
                
            }
            div.icon_find {
            background-image: url('/src/assets//images/footer/find1.png');
                
            }
            div.icon_market{
            background-image: url('/src/assets//images/footer/market1.png');
                
            }
            div.icon_mine{
            background-image: url('/src/assets//images/footer//mine1.png');
                
            }
        }
        
        i{
            font-size: 1rem;
        }
        .footer_home ,.footer_lesson,.footer_find ,.footer_market,.footer_mine {
            margin-bottom: 0.13rem;
            font-size: 0.54rem;
            line-height: 0.63rem;
            width: 2rem;
            text-align: center;
            display: inline-block;
            color: #b7becb;
        }
        .icon_home {
            width: 2rem;
            height: 2rem;
            margin-top: 0.09rem;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('/src/assets//images/footer/home1.png');
            background-size: contain;
        }
       
        .icon_lesson {
            width: 2rem;
            height: 2rem;
            margin-top: 0.09rem;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('/src/assets//images/footer/lesson.png');
            background-size: contain;
        }
        /* find */
        .icon_find {
            width: 2rem;
            height: 2rem;
            margin-top: 0.09rem;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('/src/assets//images/footer/find.png');
            background-size: contain;
        }
       
        /* market */
        .icon_market {
            width: 2rem;
            height: 2rem;
            margin-top: 0.09rem;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('/src/assets//images/footer/market.png');
            background-size: contain;
            

        }
        .icon_mine {
            width: 2rem;
            height: 2rem;
            margin-top: 0.09rem;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('/src/assets//images/footer/minepng.png');
            background-size: contain;
         }
    
        
    }
` 