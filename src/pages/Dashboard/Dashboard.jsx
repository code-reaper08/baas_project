import { useSelector } from "react-redux";
import { React, useEffect } from "react";
import {
  selectUser,
  syncWithLocalStorage,
} from "../../features/register/registerSlice";
import { useDispatch } from "react-redux";

export default function Dashboard() {
  const userArray = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("users")) {
      dispatch(syncWithLocalStorage(JSON.parse(localStorage.getItem("users"))));
    }
  }, []);

  return (
    <div>
      <h1>User Accounts</h1>
      {userArray?.map((each) => {
        return (
          // navbar
          <div key={userArray.indexOf(each)}>
            <h1>{each?.firstname}</h1>
            <p>{each?.email}</p>
          </div>
        );
      })}
    </div>
  );
}
