import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import {addUser , deleteUser , updateUser} from './features/users'
import { useState } from 'react';


function App() {

  const addingUser = () => {
    dispatch(addUser({id: userList[userList.length - 1].id + 1 , name , username}))
    console.log(userList)
  }


  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)
  const [name , setName ] = useState("")
  const [username , setUsername ] = useState("")
  const [newUsername , setNewUsername] = useState("")


  return (
    <div className="App">
      {""}
      <div className="addUser">
        <input type="text" placeholder="Name..." onChange={(event) => {setName(event.target.value)}}/>
        <input type="text" placeholder="Username..." onChange={(event) => {setUsername(event.target.value)}}/>
        <button 
        onClick= { () => {
          // dispatch(addUser({id:0 , name , username}))
          addingUser()
        }

        }> Add User </button>
      </div>

      <div className="displayUsers">
        {userList.map((user) => {
          return (
          <div>
          <h1> {user.name}</h1>
          <h2> {user.username}</h2>
          <input 
          type="text" placeholder="Change Username..." 
          onChange={(event) => {setNewUsername(event.target.value);}}
          />
          <button
          onClick={(event) => {dispatch(updateUser({id : user.id , username : newUsername}))}}>Update</button>
          <button onClick={() => {
            dispatch(deleteUser({id : user.id}))
          }}>Delete</button>

          </div>
          )
        })}




      </div>
    </div>
  );
}

export default App;
