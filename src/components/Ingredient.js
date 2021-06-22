import React from 'react'

export const Ingredient = ({name,amount}) => {
    return (
       <React.Fragment>
        <span>{name}</span>
        <span>{amount}</span>
       </React.Fragment>
    )
}
