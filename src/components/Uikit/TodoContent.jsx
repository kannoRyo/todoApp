import React, { useEffect, useState } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { useDispatch } from 'react-redux';
import {db} from '../../firebase/index'
import {fetchTodos} from '../../reducks/todos/operations'


const useStyles = makeStyles({
    listItem:{
        display: 'flex'
    }
})

const TodoContent = (props)=>{
    const classes = useStyles()　
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false)

    const deleteTodo = ()=>{
        db.collection('todos').doc(props.id).delete()
        setChecked(!checked)
    }

    useEffect(()=>{
        dispatch(fetchTodos())
    },[checked])
    
	return (
        <>
        <ListItem >
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={props.content}
                secondary={`〆切:${props.deadline}`}
            />
            <Checkbox
                color="default"
                checked={checked}
                onClick={()=> deleteTodo()}
            />
        </ListItem>
        <Divider />
        </>
)
}

export default TodoContent
