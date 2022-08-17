import React, { useState, useEffect, memo, useRef, useMemo } from 'react'
import { SearchWrapper } from './style'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import SearchBox from './SearchBox'
import SearchContent from './SearchContent'
import { rootState } from '@/store'


const Search = () => {
    // 搜索内容 redux 解决共享状态问题 
    const [query, setQuery] = useState('周杰伦')
    
    // 让父子组件的query一致
    const handleQuery = (q: string) => {
        setQuery(q)
    }
    return (
        <SearchWrapper>
            <SearchBox handleQuery={handleQuery} newQuery={query} />
            <SearchContent/>
           
        </SearchWrapper>
    )
}

const mapStateToProps = (state: rootState) => {
    return {

    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Search)) 