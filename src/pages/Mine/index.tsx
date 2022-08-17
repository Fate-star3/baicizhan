import React, { useState, useEffect, memo } from 'react'
import { MineWrapper } from './style'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const Mine = () => {
    return (
        <MineWrapper>
           Mine
        </MineWrapper>
    )
}

const mapStateToProps = (state: any[]) => {
    return {

    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Mine)) 