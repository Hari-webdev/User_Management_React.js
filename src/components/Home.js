import React from 'react'
import { useState } from 'react'
import "../css components/Home.css"
import { useDispatch } from 'react-redux'
import { addUser } from '../store/action/user'

const Home = () => {
    const [user, setuser] = useState({
        name:"",
        email:"",
        contact:"",
        address:"",

    }); 

    const dispatch = useDispatch(); 

    const handleAdd = (event)=>{
      event.preventDefault();
      dispatch(addUser(user))  // dispatch => adduser(function) =>  user (variable)
      setuser({
        name:"",
        email:"",
        contact:"",
        address:""

      })
    
    }
        
      

        const handelChange =(event)=>{
          const  {name,value}= event.target;
          setuser((preState)=>{
              return {
                ...preState,
                [name]:value,
              }
          })
        }

     
        

     

  return (
    <div className='Home'>
        <h1>Enter your Information</h1>
        <form className='home__container'>
            <input placeholder='Name'type='text'  value={user.name}  name="name" onChange={handelChange} />
             <br/>
             <br/>
            <input placeholder='Email' value={user.email}  name="email" onChange={handelChange}/>
            <br/>
            <br/>
            <input placeholder='Mobile No' type='number' value={user.contact} name='contact'onChange={handelChange}/>
            <br/>
            <br/>
            <textarea placeholder='Address' value={user.address} name='address'onChange={handelChange}/>
            <br/>
            <br/>
            <button onClick={handleAdd}>submit</button>
            
        </form>
        
    </div>
  )
}

export default Home;