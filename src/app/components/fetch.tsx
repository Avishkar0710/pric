import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";






//to fetch all users from firestore
export async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "users"));

    const data: any[] = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
}


export async function Fetch(){
      const [userData, setUserData] = useState<any[]>([]); 

      useEffect(() => {
            async function fetchData() {
                  const data = await fetchDataFromFirestore();
                  setUserData(data); 
            }
            fetchData();
      }, []); 

      return [userData, setUserData];
}

