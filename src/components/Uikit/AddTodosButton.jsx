import React from 'react'
import {makeStyles} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { fontSize } from '@material-ui/system';

const useStyles = makeStyles({
    addButton:{
        position: 'fixed',
        right: 35,
        bottom:35,
        width:55,
        height: 55,
        color: '#87e96d',
        cursor: 'pointer',
        '&:hover':{
            opacity: 0.8,
        }
    }
})

const AddTodosButton = (props)=>{
    const classes = useStyles()

	return (
    <AddCircleIcon
        className={classes.addButton}
        onClick={()=> props.onClick()}
    />
)
}

export default AddTodosButton