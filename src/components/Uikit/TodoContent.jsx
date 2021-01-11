import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import {makeStyles} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles({
    listItem:{
        display: 'flex'
    }
})

const TodoContent = (props)=>{
    const classes = useStyles()
	return (
        <>
        <ListItem >
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={props.content}
                secondary={props.deadline}
            />
            <Checkbox
                color="default"
            />
        </ListItem>
        <Divider />
        </>
)
}

export default TodoContent
