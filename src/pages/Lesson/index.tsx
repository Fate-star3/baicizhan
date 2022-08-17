import React, { useState, useEffect, memo } from 'react'
import { LessonWrapper } from './style'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const Lesson = () => {
    return (
        <LessonWrapper>
           Lesson
        </LessonWrapper>
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(Lesson)) 