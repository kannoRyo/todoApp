import {fetchTodosAction} from './action'
import {auth, db, FirebaseTimestamp} from '../../firebase/index'
import{push} from 'connected-react-router'

const userRef = db.collection('users')
const todosRef = db.collection('todos')

export const addTodo = (content, deadline)=>{
    return async (dispatch ,getState) =>{
        const uid = getState().users.uid
        const timeStamp = FirebaseTimestamp.now()

        const data ={
            uid: uid,
            content: content,
            deadline: deadline,
            updated_at: timeStamp,
        }
        
        const ref = todosRef.doc()
        const id = ref.id
        data.id = id
        data.created_at = timeStamp
    
        console.log(data)
        
        return todosRef.doc(id).set(data, {merge: true})
            .then(()=>{
                dispatch(push('/mytodos'))
            }).catch((error)=>{
                throw new Error(error)
            })

    }
}

export const fetchTodos = ()=>{
    return async (dispatch)=>{
        todosRef.orderBy('deadline', 'asc').get()
            .then((snapshots)=>{
                const todosList = []
                snapshots.forEach(snapshot=> {
                    const data = snapshot.data()
                    todosList.push(data)
                })
                dispatch(fetchTodosAction(todosList))
            })
    }
}