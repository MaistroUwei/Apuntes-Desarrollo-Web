import React from "react"
import PropTypes from 'prop-types'

const onAddPress = () => {
}

export const AddCounter = ({onAddPress}) => {

    return (
        <button
            onClick = {onAddPress}>
            +1
        </button>
    )
}


AddCounter.propTypes = {
    onAddPress : PropTypes.func.isRequired
}