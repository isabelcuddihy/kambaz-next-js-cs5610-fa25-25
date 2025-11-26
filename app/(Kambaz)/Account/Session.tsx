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
        console.log("Session: fetched user:", currentUser); // Add this
        dispatch(setCurrentUser(currentUser));
        console.log("Session: dispatched to Redux"); // Add this
      } catch (err: any) {
        console.log("Session: fetch failed", err.response?.status); // Add this
      }
    };
    fetchProfile();
  }, []);
  
  return <>{children}</>;
}


