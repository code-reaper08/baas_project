import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { registerUser, selectUser, syncWithLocalStorage } from "../features/register/registerSlice";

export default function Register() {
  const dispatch = useDispatch();
  let userArray = useSelector(selectUser);
  

  const addNewUser = () => {

    dispatch(registerUser(newUser));
  };

  //   dummy user data
  const newUser = {
    name: "Eswar",
    age: 21,
    location: "India",
    accountNumber: 7387487437643,
  };

  useEffect(() => {
    console.log(userArray);
    if(localStorage.getItem("users")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("users"))))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="form_conatiner">
        <h1>Register</h1>
        {userArray.map((eachuser) => {
          return <h1 key={userArray.indexOf(eachuser)}>{eachuser?.name}</h1>;
        })}
        <button onClick={addNewUser}>Add User</button>
      </div>
    </div>
  );
}
