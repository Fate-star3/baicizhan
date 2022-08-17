import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '@/utils/index.js'

function Footer() {
  const { pathname } = useLocation()

  if (isPathPartlyExisted(pathname)) {
    return (
      <></>
    )
  }
  return (
    <FooterWrapper>
      {/* Link的本质是a标签 */}
      <Link to="/home" className={classnames({ active: pathname == '/home' || pathname == '/' })}>
        <div className="icon_home"></div>
        <div className='footer_home'>单词</div>
      </Link>
      <Link to="/lesson" className={classnames({ active: pathname == '/lesson' })}>
        <div className="icon_lesson"></div>
        <div className='footer_lesson'>课程</div>
      </Link>
      <Link to="/find" className={classnames({ active: pathname == '/find' })}>
        <div className="icon_find"></div>
        <div className='footer_find'>发现</div>
      </Link>
      <Link to="/market" className={classnames({ active: pathname == '/market' })}>
        <div className="icon_market"></div>
        <div className='footer_market'>商城</div>
      </Link>
      <Link to="/mine" className={classnames({ active: pathname == '/mine' })}>
        <div className="icon_mine"></div>
        <div className='footer_mine'>我</div>
      </Link>
    </FooterWrapper>
  )
}
export default memo(Footer)