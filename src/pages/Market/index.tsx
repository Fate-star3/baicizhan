import React, { useState, useEffect, memo } from 'react'
import { MarketWrapper, EnterLoading } from './style'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Swiper from 'swiper'
import { actionCreators } from './store/index'
import { rootState } from '@/store'
import { lazyload, throttle } from '@/utils'
import Loading from '@/components/common/loading/index'
import loadingPic from '@/assets/images/cartDetails/loading.gif'
import { InfiniteScroll, List } from 'antd-mobile'
import { mockRequest } from './data'
interface MarketProps {
    loading: boolean;
    goodsList: any[];
    getGoodsListDispatch: () => void;
}


const Market: React.FC<MarketProps> = (props) => {
    const { loading, goodsList } = props
    const { getGoodsListDispatch } = props
    const navigate = useNavigate()
    const [toTop, setToTop] = useState('none')
    const [data = goodsList, setData] = useState<any[]>([])
    const [hasMore, setHasMore] = useState(true)

    async function loadMore() {
        const append = await mockRequest()
        setData(val => [...val, ...append])
        setHasMore(append.length > 0)
    }
    const backTop = () => {
        window.scrollTo(0, 0)
    }
    window.onscroll = throttle(lazyload.bind(null, ".list-content-box img"), 100)
    useEffect(() => {
        getGoodsListDispatch()
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let height = window.innerHeight / 2
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            // console.log(scrollTop );

            if (scrollTop > height) {
                setToTop('block')
            } else {
                setToTop('none')
            }
        })
    }, [toTop])

    useEffect(() => {
        // 轮播图挂载
        new Swiper('.market-swiper', {
            loop: true,
            autoplay: {
                delay: 2000
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

        })
    }, [])

    return (
        <MarketWrapper>
            <div className="market">
                <div className="market-title">
                    <span>商城</span>
                </div>
                <div className="market-search">
                    <div className='market-search-list-content-box'>
                        <span className="iconfont icon-fangdajing"></span>
                        <input type="text" placeholder="超级柔软的猫窝笔袋" />
                    </div>
                    <div>
                        <span className="iconfont icon-24gl-headset"></span>
                        <span className="iconfont icon-wode2"></span>
                    </div>
                </div>
                <div className="market-swiper swiper-container">
                    <div className="swiper-wrapper">
                        {/* <div className="swiper-slide">
                            <img src="/src/assets/images/market/swiper1.jpg" alt="" />
                        </div> */}
                        <div className="swiper-slide">
                            <img src="/src/assets/images/market/swiper2.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/market/swiper3.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/market/swiper4.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/market/swiper5.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/market/swiper6.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/market/swiper7.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/market/swiper8.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/src/assets/images/market/swiper9.jpg" alt="" />
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>

                </div>
                <div className="market-list">
                    <Link to='#'>
                        <div className="w">
                            <div className='list list-v1'></div>
                            <span>文具</span>
                        </div>
                    </Link>
                    <Link to='#'>
                        <div className="w">
                            <div className='list list-v2'></div>

                            <span>备考</span>
                        </div>
                    </Link>
                    <Link to='#'>
                        <div className="w">
                            <div className='list list-v3'></div>

                            <span>生活</span>
                        </div>
                    </Link>
                    <Link to='#'>
                        <div className="w">
                            <div className='list list-v4'></div>

                            <span>全部</span>
                        </div>
                    </Link>


                </div>
                <div className="market-test">
                    <div className="test-hd">
                        <h1>助力大学考试通关</h1>
                        <div className="next">
                            <span>更多</span>
                            <i className='iconfont icon-youjiantou1 '></i>
                        </div>
                    </div>
                    <div className="test-bd">
                        <main className='container'>
                            <Link to='#' className='pic'><img src="/src/assets/images/market/test1.jpg" alt="" /></Link>
                            <Link to='#' className='pic'><img src="/src/assets/images/market/test2.jpg" alt="" /></Link>
                            <Link to='#' className='pic'><img src="/src/assets/images/market/test3.jpg" alt="" /></Link>
                            <Link to='#' className='pic'><img src="/src/assets/images/market/test4.jpg" alt="" /></Link>
                        </main>
                    </div>
                </div>
                <div className="market-goods">
                    <div className="mask"></div>
                    <ul className='goods-list'>
                        {
                            data.map((item, index) => {
                                return <div
                                    className='list'
                                    key={index + item.price}
                                    onClick={() => navigate('/cartDetails/' + item.id)}
                                >
                                    <div className="list-content">
                                        <div className="list-content-box">
                                            <img data-src={"/src/assets/images/market/" + item.imageSrc} alt="" />
                                            <p className="list-content-title">{item.title}</p>
                                            <p className="list-content-text">{item.text}</p>
                                            <div className="list-content-ft">
                                                <div className='ft-price'>
                                                    <span className="list-content-icon">{item.fuhao}</span>
                                                    <span className="list-content-price">{item.price}</span>
                                                    <span><del>{item.del}</del></span>
                                                </div>
                                                <div className="list-content-people">{item.num}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </ul>

                </div>
                <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
                <div className="back_top" onClick={backTop} style={{ display: toTop }}>
                    <i className="iconfont icon-shangjiantou"></i>
                </div>
                <div className="cart-fix" onClick={() => navigate('/cart')} >

                    {
                        window.localStorage.getItem('data') ?
                            <div className="cart-content-icon cart-content-iconv2">
                                {JSON.parse(window.localStorage.getItem('data') as string).length}
                            </div>
                            : ""
                    }
                    <i className="iconfont icon-gouwuche1"></i>
                </div>
            </div>
            {
                loading ?
                    <EnterLoading>
                        <Loading></Loading>
                    </EnterLoading> : null
            }
        </MarketWrapper>
    )
}

const mapStateToProps = (state: rootState) => {
    return {
        loading: state.market.Loading,
        goodsList: state.market.GoodsList
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getGoodsListDispatch() {
            dispatch<any>(actionCreators.getGoodsList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Market)) 