import React, { useState, useEffect, memo, FC } from 'react'
import { Wrapper, EnterLoading } from './style'
import { useNavigate, useLocation } from 'react-router-dom'
import { SwipeAction } from 'antd-mobile'
import { AddOutline, MinusOutline } from 'antd-mobile-icons'
import { rootState } from '@/store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { actionCreators } from './store'
import Loading from '@/components/common/loading/index'
import classnames from 'classnames'
import { px2rem } from '@/assets/global-style'

// 商品选中的图片
import checkedImg from '@/assets/images/cart/shopping_check.png'
import checkNormalImg from '@/assets/images/cart/shopping_checkNormal.png'

interface CartProps {
    loading: boolean;
    cartList: any[];
    price: number;
    checkAll: boolean;
    cartInfo: any[];
    // singleCart: any[];
    getCartListDispatch: () => void;
    changeGoodsNumDispatch: (data: any) => void;
    checkGoodsDispatch: (data: number) => void;
    changeAllGoodsDispatch: (data: any) => void;
    clearGoodsDispatch: (data: number) => void;
}

const Cart: React.FC<CartProps> = (props) => {
    const navigate = useNavigate()
    // const location = useLocation()
    // const data = location.state

    const {
        loading,
        cartList,
        price,
        checkAll,
        cartInfo
    } = props
    const {
        getCartListDispatch,
        changeGoodsNumDispatch,
        checkGoodsDispatch,
        changeAllGoodsDispatch,
        clearGoodsDispatch
    } = props
    let data = cartList
    // console.log(data);
    // console.log(cartList);
    // console.log(checkAll);
    // console.log(cartInfo);

    if (cartInfo.length !== cartList.length) {
        cartInfo == JSON.parse(window.localStorage.getItem('data') as string)
            ? data = JSON.parse(window.localStorage.getItem('data') as string)
            : cartInfo && window.localStorage.setItem('data', JSON.stringify(cartInfo))
    } else {
        cartInfo == JSON.parse(window.localStorage.getItem('data') as string)
        ? data = JSON.parse(window.localStorage.getItem('data') as string)
        : cartInfo && window.localStorage.setItem('data', JSON.stringify(cartList))
    }



    useEffect(() => {
        getCartListDispatch()
    }, [])

    // 商品数量加减
    const changeGoodNum = (e: React.MouseEvent<SVGSVGElement, MouseEvent>, status: string, id?: any) => {
        e.preventDefault();
        e.stopPropagation();
        let data = {
            status: status,
            id: id
        }
        changeGoodsNumDispatch(data)
    }
    // 全选
    const checkAllGoods = () => {
        changeAllGoodsDispatch(checkAll)
    }
    // 单选
    const checkGoods = (id: any) => {
        checkGoodsDispatch(id)
    }
    // 删除
    const clear = (id: number) => {
        clearGoodsDispatch(id)
    }
    const Persistence = () => {
        if (cartList !== cartInfo) {
            window.localStorage.setItem('data', JSON.stringify(cartList))

        } else {
            JSON.parse(window.localStorage.getItem('data') as string)
            console.log(11);

        }

        navigate(-1)
    }
    return (
        <Wrapper>

            <div className="cart" >
                <div className="cart-back">
                    <i className='iconfont icon-youjiantou3' onClick={() => Persistence()}></i>
                    <span>购物车</span>
                </div>
                <div className="cart-content">
                    <div className="hd">
                        <div className='title'>
                            <span>选购</span>
                            <span>满38元百词斩商品，享超值换购</span>
                            <span>去凑单<i className='iconfont icon-youjiantou1'></i></span>
                        </div>
                    </div>
                    <div className="bd">
                        <div className="left">
                            <img src="/src/assets/images/cart/cart1.jpg" alt="" />
                            <div className='box'>
                                <span>超能写全针管笔0.5mm黑色刷题</span>
                                <div className="bottom">
                                    <span className='price'>￥0.69</span>
                                    <span className='discount'>￥1</span>
                                    <div className="circle">+</div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src="/src/assets/images/cart/cart2.jpg" alt="" />
                            <div className='box'>
                                <span>串一串多功能便利贴</span>
                                <div className="bottom">
                                    <span className='price'>￥5.9</span>
                                    <span className='discount'>￥7.9</span>
                                    <div className="circle">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        data.map((item) => {
                            return <div className="cart-list" key={item.id}>
                                <SwipeAction
                                    rightActions={[
                                        {
                                            key: 'delete',
                                            text: '删除',
                                            color: 'danger',
                                            onClick: () => clear(item.id)
                                        },
                                    ]}

                                >
                                    <div style={{ padding: 12 }} id='shopcart'>
                                        <div className='input' onClick={() => checkGoods(item.id)}>
                                            {
                                                item.check ? <img src={checkedImg} alt="" />
                                                    : <img src={checkNormalImg} alt="" />
                                            }
                                        </div>
                                        <div className='shopcart-box'>
                                            <img src="/src/assets/images/cart/goods2.jpg" alt="" />
                                            <div className="cart-box">
                                                <div className="title">{item.title}</div>
                                                <div className="price">
                                                    <span className='num'>￥{item.price}</span>
                                                    <div className="calculate">
                                                        <MinusOutline
                                                            className={classnames({ forbid: item.num <= 0 }, 'reduce')}
                                                            onClick={(e) => changeGoodNum(e, 'reduce', item.id)}
                                                            style={{
                                                                fontSize: `${px2rem(12)}`,
                                                            }}
                                                        />
                                                        <span style={{fontSize: `${px2rem(12)}`}}>{item.num}</span>
                                                        <AddOutline
                                                            className='add'
                                                            onClick={(e) => changeGoodNum(e, 'add', item.id)} 
                                                            style={{
                                                                fontSize: `${px2rem(12)}`,
                                                            }}
                                                            />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwipeAction>
                            </div>
                        })
                    }

                </div>
                <div className="cart-footer">
                    <div className="wrap">
                        <div className="collectAll" >
                            <label htmlFor="collectAll" onClick={() => checkAllGoods()}>
                                {
                                    checkAll && cartList.length ? <img src={checkedImg} alt="" />
                                        : <img src={checkNormalImg} alt="" />
                                }
                                <span>全选</span>
                            </label>
                        </div>
                        <div className="payment">
                            <span>合计:</span>
                            <span><b>￥</b>{checkAll ? price.toFixed(2) : 0}</span>
                            <button className='buy'>去结算({cartList.length})</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                loading ?
                    <EnterLoading>
                        <Loading></Loading>
                    </EnterLoading> : null
            }
        </Wrapper>
    )
}

const mapStateToProps = (state: rootState) => {
    let arr: any[] = []
    state.cart.CartList.forEach((item: { num: number; price: number }) => {
        let price = 0
        price += (item.num > 0 ? item.price * item.num : 0)
        arr.push(price)
    })
    return {
        loading: state.cart.Loading,
        cartList: state.cart.CartList,
        price: arr.reduce((pre, curr) => pre += curr, 0),
        checkAll: state.cart.CartList
            .filter((item: { check: any }) => item.check).length == state.cart.CartList.length,
        cartInfo: state.goods.SingleCart
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getCartListDispatch() {
            dispatch<any>(actionCreators.getCartList())
        },
        changeGoodsNumDispatch(data: any) {
            dispatch(actionCreators.changeGoodsNumAction(data))
        },
        checkGoodsDispatch(data: number) {
            dispatch(actionCreators.checkGoodsAction(data))
        },
        changeAllGoodsDispatch(data: any) {
            dispatch(actionCreators.checkAllGoodsAction(data))
        },
        clearGoodsDispatch(data: number) {
            dispatch(actionCreators.clearGoodsAction(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Cart))



