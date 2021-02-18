import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core'
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent'
import {
    TextInput,
    DatePicker
} from './index'
import {addTodo} from '../../reducks/todos/operations'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({

})

const AddTodosDialog = (props)=>{
    const dispatch = useDispatch()
    const classes = useStyles()


	return (
        <>
            <Dialog onClose={props.handleClose} open={props.open}>
                <MuiDialogTitle>
                    Todoを追加する
                </MuiDialogTitle>
                <MuiDialogContent　dividers>
                    <TextInput 
                        fullWidth={true} label={"Todo"} multiline={true} rows={2}
                        type={"text"} value={props.content} onChange={props.onChange} 
                    />
                    <div  className="module-spacer--small" />
                    <DatePicker
                        deadline={props.deadline} handleDeadline={props.handleDeadline}
                    />
                </MuiDialogContent>
            <MuiDialogActions>
                <Button 
                    onClick={
                        ()=> {
                            dispatch(addTodo(props.content, props.deadline))
                            props.handleClose()
                            props.initialize()
                    }}  
                    color="primary" variant="contained" disabled={!(props.content && props.deadline)}
                >
                    送信
                </Button>
            </MuiDialogActions>
            </Dialog>
        </>
    
)
}

export default AddTodosDialog