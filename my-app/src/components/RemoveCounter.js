import React from "react"
import PropTypes from 'prop-types'

const onRemovePress = () => {
}

export const RemoveCounter = ({onRemovePress}) => {

    return (
        <button
            onClick = {onRemovePress}>
            -1
        </button>
    )
}


RemoveCounter.propTypes = {
    onRemovePress : PropTypes.func.isRequired
}