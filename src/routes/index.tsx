// 独立配置文件 
import React, { lazy } from 'react'
import { Routes, Route, Navigate} from 'react-router-dom';
import Home from '@/pages/Home'
const Lesson = lazy(() => import('@/pages/Lesson'))
const Find = lazy(() => import('@/pages/Find'))
const Market = lazy(() => import('@/pages/Market'))
const Mine = lazy(() => import('@/pages/Mine'))
const Search = lazy(() => import('@/pages/Search'))
const CartDetails = lazy(() => import('@/pages/CartDetails'))
const Cart = lazy(() => import('@/components/shopping-cart/'))
const Error = lazy(() => import('@/components/error'))





const RoutesConfig = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/lesson" element={<Lesson />}></Route>
            <Route path="/find" element={<Find />}></Route>
            <Route path="/market" element={<Market />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/cartDetails/:id" element={<CartDetails />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
              {/* 专门处理url错误的路由 */}
              <Route path="*"  element={<Navigate to='/404' replace={true} /> } > </Route>
            <Route path="/404"  element={<Error/> } > </Route>

            
        </Routes>
    )
}

export default RoutesConfig