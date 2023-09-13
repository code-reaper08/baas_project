import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { registerUser, selectUser } from "../features/register/registerSlice";

export default function Register() {
  //   const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const userArray = useSelector(selectUser);
  const addNewUser = () => {
    dispatch(registerUser(newUser));
  };

  //   dummy user data
  const newUser = {
    name: "Abdul",
    age: 21,
    location: "India",
    accountNumber: 7387487437643,
  };

  useEffect(() => {
    console.log(userArray);
  }, [userArray]);

  return (
    <div>
      <div className="form_conatiner">
        <h1>Register</h1>
        {/* <p>{userArray[0]?.name}</p> */}
        {userArray.map((eachuser) => {
          return <h1>{eachuser?.name}</h1>;
        })}
        <button onClick={addNewUser}>Add User</button>
      </div>
    </div>
  );
}
