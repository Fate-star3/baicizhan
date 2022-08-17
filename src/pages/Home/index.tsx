import React, { useState, useEffect, memo } from 'react'
import { HoemWrapper, EnterLoading } from './style'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { rootState } from '@/store'
import { actionCreators } from '@/pages/Home/store'
import Loading from '@/components/common/loading/index'
// 组件
import HomeSearch from './HomeSearch'
import HomeWords from './HomeWords'
import HomeList from './HomeList'
import HomeInfo from './HomeInfo'


interface HomeProps {
    loading: boolean;
    homeinfo: any[];
    getHomeInfoDispatch: () => void;
}

const Home: React.FC<HomeProps> = (props) => {

    const { loading, homeinfo } = props
    const { getHomeInfoDispatch } = props
    useEffect(() => {
        getHomeInfoDispatch()
    }, [])
    return (
        <HoemWrapper>
            <HomeSearch />
                <HomeWords />
                <HomeList />
                <HomeInfo homeinfo={homeinfo} />
            {
                loading ?
                    <EnterLoading>
                        <Loading></Loading>
                    </EnterLoading> : null
            }
        </HoemWrapper>
    )
}

const mapStateToProps = (state: rootState) => {
    return {
        homeinfo: state.home.HomeInfo,
        loading: state.home.Loading
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getHomeInfoDispatch() {
            dispatch<any>(actionCreators.getHomeInfo())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Home)) 