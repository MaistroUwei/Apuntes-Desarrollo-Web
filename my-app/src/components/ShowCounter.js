import React from "react";
import PropTypes from 'prop-types'

export const ShowCounter = ({number}) => {
    return (
        <p>{number}</p>
    )
}

ShowCounter.propTypes = {
    number : PropTypes.number.isRequired
}