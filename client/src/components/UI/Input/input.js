import { MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'

const input = (props) => {

    let inputElement = null

    switch (props.elementType) {
        case ('input'):
            inputElement = <TextField
                key={props.key}
                color={props.color}
                variant={props.variant}
                style={props.style}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            break;
        case ('select'):
            inputElement = <Select
                style={props.style}
                color={props.color}
                value={props.value}
                variant={props.variant}
                placeholder={props.placeholder}
                onChange={props.onChange}>
                {props.elementConfig.options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.displayValue}
                    </MenuItem>
                ))}
            </Select>
            break;
    }
    return (
        <div>
            {inputElement}
        </div>
    )

}

export default input