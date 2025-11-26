import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
   useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await client.profile();
        console.log("Session: fetched user:", currentUser); 
        dispatch(setCurrentUser(currentUser));
        console.log("Session: dispatched to Redux");
      } catch (err: any) {
        console.log("Session: fetch failed", err.response?.status); 
      }
    };
    fetchProfile();
  }, []);
  
  return <>{children}</>;
}


