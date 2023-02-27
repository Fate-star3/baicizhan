import React, { useState, useEffect, memo } from 'react'
import { Wrapper, EnterLoading } from './style'
import { useNavigate, useParams } from 'react-router-dom'
import Swiper from 'swiper'
import Loading from '@/components/common/loading/index'
import { actionCreators } from './store/index'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Button, Popup } from 'antd-mobile'
import { AddOutline, MinusOutline } from 'antd-mobile-icons'
import { px2rem } from '@/assets/global-style'
import { Link } from 'react-router-dom'
import { lazyload } from '@/utils'
import loadingPic from '@/assets/images/cartDetails/loading.gif'

interface CartDetailProps {
  loading: boolean;
  cartDetail: any[];
  singleCart: any[];
  getCartDetailDispatch: () => void;
  changeGoodsNumDispatch: (data: any) => void;
}

const CartDetails: React.FC<CartDetailProps> = (props) => {
  const { loading, cartDetail, singleCart } = props
  const { getCartDetailDispatch, changeGoodsNumDispatch } = props
  const navigate = useNavigate()
  const { id } = useParams()
  const [visible, setVisible] = useState(false)
  let data: any[] = []
  // console.log(cartDetail);
  // console.log(singleCart);


  useEffect(() => {
    getCartDetailDispatch()

  }, [])
  useEffect(() => {
    window.addEventListener('scroll', function () {
      lazyload(".goods-introduce img")

    })
  }, [])


  // cartDetail.length>0 && cartDetail[0].num == JSON.parse(window.sessionStorage.getItem('datails') as string)[0].num
  //   ? JSON.parse(window.sessionStorage.getItem('datails') as string)
  //   : cartDetail && window.sessionStorage.setItem('datails', JSON.stringify(cartDetail))

  useEffect(() => {
    // 轮播图挂载
    new Swiper('.goods-swiper', {
      loop: true,
      autoplay: {
        delay: 3000
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

    })
  }, [])
  // 商品数量加减
  const changeGoodNum = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, status: string, id: any) => {
    e.preventDefault();
    e.stopPropagation();
    let data = {
      status: status,
      id: id
    }
    changeGoodsNumDispatch(data)
  }
  // console.log(cartDetail, id);

  data = cartDetail.filter(item => {
    if (item.id == id) {
      console.log(item.id, id);
      console.log(item);
      return item
    }
  });

  return (
    <Wrapper>
      {
        data && data.map(item => {
          return <div className="goods" key={item.id}>
            <div className="goods-back">
              <i className='iconfont icon-youjiantou3' onClick={() => navigate('/market')}></i>
            </div>
            <div className="goods-swiper swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/src/assets/images/cartDetails/cartSwiper1.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/cartDetails/cartSwiper2.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/cartDetails/cartSwiper3.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/cartDetails/cartSwiper4.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                  <img src="/src/assets/images/cartDetails/cartSwiper5.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="goods-content">
              <div className="goods-hd">
                <div className="price">
                  <span className='price-icon'>￥</span>
                  <span>{item.price}</span>
                  <i className='iconfont icon-aixin'></i>
                </div>
                <div className='message'>
                  <div className='left'><span>{item.focus}</span><span>{item.focus1}</span><span>{item.focus2}</span></div>
                  <div className="right"><span>{item.youhui}<i className='iconfont icon-youjiantou1'></i></span></div>
                </div>
                <h1 className='title'>{item.title}</h1>
              </div>
              <div className="goods-bd">
                <div className="wrap">
                  <div className='sell'>
                    <span className='left'>{item.sell}</span>
                    <span className='right'>{item.number - item.num}件</span>
                  </div>
                  <div className="collect">
                    <div className="header">
                      <span className='left'>{item.collect}</span>
                      <div className='right'>
                        <span>{item.collect2} <i className='iconfont icon-youjiantou1'></i></span>
                      </div>
                      <div className="footer">
                        <div className="wrap">
                          <img src="/src/assets/images/cartDetails/xq1.jpg" alt="" />
                          <img src="/src/assets/images/cartDetails/xq1.jpg" alt="" />
                          <span className="collect-v2">{item.txt}</span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="send">
                    <span className='left'>{item.send}</span>
                    <div className='right'>
                      <span>{item.location}</span>
                      <i className='iconfont icon-shuxian'></i>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="goods-ft">
                <div className='wrap'>
                  <img src="/src/assets/images/cartDetails/ft.png" alt="" />
                  <span>{item.tuihuo}</span>
                  <i className='iconfont icon-youjiantou1'></i>
                </div>
              </div>
              <div className="goods-comment">
                <div className="hd">
                  <h1>{item.express}</h1>
                  <span>{item.goodcomment}<i className='iconfont icon-youjiantou1'></i></span>
                </div>
                <div className="bd">
                  <img src="https://avatars.githubusercontent.com/u/55596269?v=4" alt="" />
                  <div className='desc'>
                    <div className="desc-name">
                      {item.custome}
                    </div>
                    <p className="desc-txt"> {item.msg}</p>
                  </div>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
            <div className="goods-like">
              <h1 className="title">猜你喜欢</h1>
              <div className="like-content" >
                {
                  item.like.map((item: any) => {
                    return <div className="like-content-box" key={item.id} >
                      <div className="boxv2">
                        <img src={"/src/assets/images/cartDetails/" + item.imgsrc} alt="" />
                        <p className="boxv2-txt">{item.title}</p>
                        <span className="boxv2-price"><span className="boxv2-icon">{item.icon}</span>{item.price}</span>
                      </div>
                    </div>

                  })
                }
              </div>
            </div>

            <div className="goods-introduce">
              <img data-src="/src/assets/images/cartDetails/introduce.jpg" src={loadingPic} alt="" />
              <img data-src="/src/assets/images/cartDetails/introduce1.jpg" src={loadingPic} alt="" />
              <img data-src="/src/assets/images/cartDetails/introduce2.jpg" src={loadingPic} alt="" />
              <img data-src="/src/assets/images/cartDetails/introduce3.jpg" src={loadingPic} alt="" />
              <img data-src="/src/assets/images/cartDetails/introduce4.jpg" src={loadingPic} alt="" />
            </div>
            <div className="goods-footer">
              <div className="footer" >
                <div className="footer-icon">
                  <div className="icon">
                    <Link to='/market'>
                      <i className='iconfont icon-shangcheng'></i>
                      <span>{item.shop}</span>
                    </Link>
                  </div>
                  <div className="icon">
                    <Link to='/server'>
                      <i className='iconfont icon-24gl-headset'></i>
                      <span>{item.server}</span>
                    </Link>

                  </div>
                  <div className="icon">
                    <Link to='/cart' state={singleCart}>
                      <i className='iconfont icon-gouwuche'></i>
                      <span>{item.cart}</span>
                      {singleCart.length > 0 && <div className="cart-content-icon cart-content-iconv2">{singleCart.length}</div>}
                    </Link>
                  </div>
                </div>
                <div className="footer-btn">
                  <Button
                    onClick={() => {
                      setVisible(true)
                    }}
                    className='add'
                  >
                    {item.join}
                  </Button>
                  <Popup
                    visible={visible}
                    onMaskClick={() => {
                      setVisible(false)
                    }}
                    bodyStyle={{
                      borderTopLeftRadius: `${px2rem(8)}`,
                      borderTopRightRadius: `${px2rem(8)}`,
                      minHeight: '40vh',
                    }}
                  >
                    <div id="cart-add">
                      <div className="wrap" style={{ margin: `${px2rem(10)}` }}>
                        <div style={{
                          width: '100%',
                          height: `${px2rem(100)}`
                        }}>
                          <div style={{
                            display: 'inline-block'
                          }}>
                            <img src="/src/assets/images/market/goods1.jpg" alt="" style={{
                              width: `${px2rem(80)}`
                            }} />
                          </div>
                          <div style={{
                            display: 'inline-block',
                            marginLeft: `${px2rem(10)}`
                          }}>
                            <span style={{
                              color: 'rgb(255, 87, 36)',
                              fontSize: `${px2rem(16)}`,
                              fontWeight: 'bold',
                            }}>￥{item.price} </span>
                            <div style={{
                              fontWeight: 'bold',
                              marginTop: `${px2rem(5)}`,
                              fontSize: `${px2rem(12)}`,
                            }}>已选：{item.title}</div>
                          </div>
                        </div>
                        <div style={{
                          height: `${px2rem(80)}`
                        }}>
                          <h1 style={{
                            fontSize: `${px2rem(16)}`,
                            height: `${px2rem(30)}`,
                            marginBottom: `${px2rem(15)}`
                          }}>选择规格</h1>
                          <span style={{
                            padding: `${px2rem(5)} ${px2rem(10)}`,
                            backgroundColor: '#eee',
                            marginRight: `${px2rem(10)}`
                          }}>四级大全套：词汇+真题+听力</span>
                          <span
                            style={{
                              padding: `${px2rem(5)} ${px2rem(10)}`,
                              backgroundColor: '#eee'
                            }}>四级高分词汇</span>
                        </div>
                        <div style={{
                          height: `${px2rem(80)}`
                        }}>
                          <h1 style={{
                            fontSize: `${px2rem(16)}`,
                            height: `${px2rem(30)}`,
                            marginBottom: `${px2rem(15)}`
                          }}>数量</h1>
                          {
                            item.num > 0 ?
                              <MinusOutline
                                onClick={(e) => changeGoodNum(e, 'reduce', item.id)}
                              />
                              :
                              <MinusOutline
                                onClick={(e) => changeGoodNum(e, 'reduce', item.id)}
                                style={{
                                  pointerEvents: "none"
                                }}
                              />
                          }
                          <span style={{
                            padding: `${px2rem(5)} ${px2rem(10)}`,
                            backgroundColor: '#eee',
                            margin: ` 0 ${px2rem(10)}`
                          }}>
                            {item.num}
                          </span>
                          <AddOutline
                            onClick={(e) => changeGoodNum(e, 'add', item.id)}
                          />
                          <span style={{
                            color: 'gray',
                            marginLeft: `${px2rem(15)}`
                          }}>
                            (库存{3925 - item.num}件)
                          </span>
                        </div>
                        <button
                          onClick={() => setVisible(false)}
                          style={{
                            display: "block",
                            width: "94%",
                            height: `${px2rem(50)}`,
                            margin: "0 auto",
                            color: "#fff",
                            backgroundColor: "#ff5724",
                            fontSize: `${px2rem(18)}`,
                            border: 'none',
                            borderRadius: `${px2rem(10)}`
                          }}
                        >确定</button>
                      </div>
                    </div>
                  </Popup>
                  <button className='buy'>{item.buy}</button>
                </div>
              </div>
            </div>
          </div>
        })
      }
      {
        loading ?
          <EnterLoading>
            <Loading></Loading>
          </EnterLoading> : null
      }
    </Wrapper >
  )
}

const mapStateToProps = (state: rootState) => {
  return {
    loading: state.goods.Loading,
    cartDetail: state.goods.CartDetail,
    singleCart: state.goods.SingleCart,
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getCartDetailDispatch() {
      dispatch<any>(actionCreators.getCartDetail())
    },
    changeGoodsNumDispatch(data: any) {
      dispatch(actionCreators.changeGoodsNumAction(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(CartDetails)) 