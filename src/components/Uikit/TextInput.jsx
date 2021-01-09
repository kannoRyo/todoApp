import React from 'react'
import TextField from '@material-ui/core/TextField';


const TextInput = (props)=>{

	return (
        <TextField
            fullWidth={props.fullWidth}
            label={props.label}
            multiline={props.multiline}
            rows={props.rows}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
        />
)
}

export default TextInput