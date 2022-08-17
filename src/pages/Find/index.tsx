import React, { useState, useEffect, memo } from 'react'
import { FindWrapper } from './style'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const Find = () => {
    return (
        <FindWrapper>
            FIND
        </FindWrapper>
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(Find)) 