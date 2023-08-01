import React from 'react'
import { useSelector , useDispatch} from 'react-redux'   
import { deleteUser } from '../store/action/user';
import "../css components/output.css"

const User = () => {
  const users = useSelector((state)=>{
    return state.data.users;
  });
  const dispatch = useDispatch();
  console.log(users);
  
  return (
 
    users.map((user,index)=>{
      return(
        <div>
        <div key={index} className='output'>

          <table>
            <thead>
              <tr>
                <th className='space'>Name</th>
                <th className='space'>Email</th>
                <th className='space'>Contact</th>
                <th className='space'>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='space'>{user.name}</th>
                <th className='space'>{user.email}</th>
                <th className='space'>{user.contact}</th>
                <th className='space'>{user.address}</th>
                <th className='btn'><button className='output_btn' onClick={()=>dispatch(deleteUser(index))}>Delete</button></th>
              </tr>
            </tbody>
          </table>
        
        </div>
        </div>
      )
    })

  )
}

export default User