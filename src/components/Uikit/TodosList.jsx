import React, { useCallback, useEffect } from 'react'
import List from '@material-ui/core/List';
import { useDispatch, useSelector } from 'react-redux';
import {TodoContent} from './index'
import {makeStyles} from '@material-ui/core'
import {fetchTodos} from '../../reducks/todos/operations'


const useStyles = makeStyles({
    list:{
        height:'430px',
        overflow: 'scroll'
    }
})

const TodosList = (props)=>{
    const selector = useSelector(state=> state)
    const dispatch = useDispatch()
    const todos = selector.todos.list
    const classes = useStyles()

    useEffect(()=>{
        dispatch(fetchTodos())
    },[todos])

	return (
	<List className={classes.list}>
        {todos.length > 0 && (
            todos.map(todo=>(
                <TodoContent  content={todo.content} deadline={todo.deadline} id={todo.id} key={todo.id} />
            ))
        )}
    </List>
)
}

export default TodosList