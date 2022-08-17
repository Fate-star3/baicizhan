import React, { useState, useEffect, memo, useRef, useMemo } from 'react'
import { Wrapper } from './style'
import { useNavigate } from 'react-router-dom'
import { debounce } from '@/utils'

interface Props {
    newQuery?: any;
    handleQuery: { apply: (arg1: any, arg2: any) => void };
}

const SearchBox: React.FC<Props> = (props) => {
    const navigate = useNavigate()
    const queryRef = useRef<HTMLInputElement | null>(null);

    const { newQuery } = props;
    const { handleQuery } = props;
    const [query, setQuery] = useState('');

    // 父组件传过来的函数封装一下
    // 优化再升级
    // useMomo 可以缓存 上一次函数计算的结果 
    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery, 500)
    }, [handleQuery])

    // mount 
    useEffect(() => {
        // console.log(queryRef)
        // 挂载后
        // input框自动聚焦
        queryRef.current&& queryRef.current.focus();
    }, [])

    // 使用Effect Hook 可以让你在函数组件中执行副作用操作 绑定query  query更新重新渲染组件 
    useEffect(() => {
        // query 更新
        handleQueryDebounce(query)
    }, [query])

    useEffect(() => {
        // mount 时候 执行 父组件  newQuery -> input query 
        let curQuery = query;
        if (newQuery !== query) {
            curQuery = newQuery;
            queryRef.current&& (queryRef.current.value = newQuery)
        }
        setQuery(curQuery)
        // newQuery 更新时执行
    }, [newQuery])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.currentTarget.value
        setQuery(val)
    }
    return (
        <Wrapper>
            <div className="searchbox">
                <div className="content">
                    <div className="left">
                        <i className="iconfont icon-fangdajing"></i>
                        <input
                            type="text"
                            placeholder='输入需要查询的单词'
                            value={query}
                            ref={queryRef}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="right" onClick={() => navigate('/')}>取消</div>
                </div>
            </div>
        </Wrapper>
    )
}


export default memo(SearchBox)