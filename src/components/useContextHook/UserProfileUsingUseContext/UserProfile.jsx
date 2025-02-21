import { useContext } from "react";
import { UserContext } from "./UserContext";
import UpdateUser from "./UpdateUser";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>UserProfile</h1>
      <p>Name : {user.name}</p>
      <UpdateUser/> 
    </div>
    

  );
};

export default UserProfile;
