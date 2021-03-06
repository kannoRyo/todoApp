import React, {useState,useCallback, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{makeStyles, Button} from '@material-ui/core'
import{
    TodosList,
    AddTodosButton,
    AddTodosDialog    
} from '../components/Uikit/index'
import {fetchTodos} from '../reducks/todos/operations'
import HomeIcon from '@material-ui/icons/Home';
import {push} from 'connected-react-router'

const useStyles = makeStyles({
    title:{
        display: 'flex',
        marginTop:'15px'
    }
})

const MyTodos = ()=>{
    const classes = useStyles()
    const dispatch = useDispatch()
    const selector = useSelector(state=> state)
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState('')
    const [deadline, setDeadline] = useState('')

    const handleOpen = ()=>{
        setOpen(true)
    }

    const handleClose = ()=>{
        setOpen(false)
    }

    const inputContent = useCallback((e)=>{
        setContent(e.target.value)
    },[setContent])

    const initializeDialog = useCallback(()=>{
        setContent('')
        setDeadline('')
    },)

    const handleDeadline = (e)=>{
        setDeadline(e.target.value)
    }

    useEffect(()=>{
        dispatch(fetchTodos())
    },[selector.users])

	return (
        <section className="c-section-wrapin">
            <div className="home-i" >
                <Button  onClick={()=> dispatch(push('/'))} style={{backgroundColor: '#eee', padding: '7px'}} >
                    <h3>ホームに戻る</h3>
                    <HomeIcon/>
                </Button>
            </div>
            <div className={classes.title}>
                <h2 className="u-text__headline">MyTodos</h2>
            </div>
            <TodosList />

            <AddTodosButton  onClick={()=>handleOpen()}/>
            <AddTodosDialog 
                open={open} handleOpen={()=>handleOpen()} handleClose={()=> handleClose()}
                content={content} onChange={inputContent}　
                deadline={deadline} handleDeadline={(e)=> handleDeadline(e)}
                initialize={initializeDialog}　
            />
        </section>
)
}

export default MyTodos