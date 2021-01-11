import React, { useCallback } from 'react'
import List from '@material-ui/core/List';
import { useSelector } from 'react-redux';
import {TodoContent} from './index'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    list:{
        height:'430px',
        overflow: 'scroll'
    }
})

const TodosList = (props)=>{
    const selector = useSelector(state=> state)
    const todos = selector.todos.list
    const classes = useStyles()
    console.log(todos)

	return (
	<List className={classes.list}>
        {todos.length > 0 && (
            todos.map(todo=>(
                <TodoContent  content={todo.content} deadline={todo.deadline} key={todo.id} />
            ))
        )}
    </List>
)
}

export default TodosList