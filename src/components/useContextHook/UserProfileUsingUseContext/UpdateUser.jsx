import {useContext, useState} from "react";
import { UserContext } from "./UserContext";


const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);
    const [newName, setNewName] = useState('');


    const handleSubmit = e =>{
      e.preventDefault();

      if(newName.trim()){
        updateUser(newName);
        setNewName('');
      }
    }
    
  return (
    <div>
      <input type="text" placeholder="Enter your name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
      <button onClick={handleSubmit}>Update Name</button>
      
    </div>
  )
}

export default UpdateUser
