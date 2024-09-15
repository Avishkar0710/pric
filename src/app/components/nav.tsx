'use client'
import AddUser from "../components/adduser"
import AllUsers from "../components/AllUsers";
import { deleteUserFromFirestore } from "./delete";
import { fetchDataFromFirestore } from "../components/AllUsers";
import { useEffect, useState } from "react";







export default function Nav(){


      const [userData, setUserData] = useState<any[]>([]); 
     
      // const handleDeleteUser = async () => {
      //       const id = prompt("Enter the user ID to delete:");
      //       if (id) {
      //           const deletedId = await deleteUserFromFirestore(id);
      //           if (deletedId) {
      //               setUserData(userData.filter(user => user.id !== deletedId));
      //               alert(`User with ID ${deletedId} has been deleted.`);
      //           } else {
      //               alert("Error deleting user.");
      //           }
      //       }
      //   };
    
     
 
      

      useEffect(() => {
            async function fetchData() {
                  const data = await fetchDataFromFirestore();
                  setUserData(data); 
            }
            fetchData();
      }, []); 


      // Handle the deletion of a user
      const handleDeleteUser = async () => {
            const id = prompt("Enter the user ID to delete:");  // Prompt for user ID
            if (id) {
            const deletedId = await deleteUserFromFirestore(id);
            if (deletedId) {
                  alert(`User with ID ${deletedId} has been deleted.`);  // Confirmation message
            } else {
                  alert("Error deleting user.");  // Error message if deletion fails
            }
            }
      };


      return(
            <section className="flex w-full">
                  <main className="w-1/5 h-screen sticky left-0 top-0 flex  justify-center items-center bg-slate-300">
                        <div className="flex flex-col justify-evenly items-center h-full w-3/4">
                              <div>
                                    <a href="#add"><button className="h-10 w-28 rounded-xl bg-slate-50">Add User</button></a>
                              </div>
                              <div>
                                    <a href="#card"><button className="h-10 w-28 rounded-xl bg-slate-50">View User</button></a>
                              </div>
                              <div>
                                    <a href="#update"><button className="h-10 w-28 rounded-xl bg-slate-50">Update User</button></a>
                              </div>
                              <div>
                                    <a href="#all"><button className="h-10 w-28 rounded-xl bg-slate-50" onClick={handleDeleteUser}>Delete User</button></a>
                              </div>
                              <div>
                                    <a href="#all"><button className="h-10 w-28 rounded-xl bg-slate-50">All Users</button></a>
                              </div>
                        </div>
                  </main>
                  <div className="w-4/5 overflow-hidden">
                        <div id="add">
                              <AddUser/>
                        </div>
                        <div id="all">
                              <AllUsers/>
                        </div>
                        <div id="update">

                        </div>
                        <div id="card">

                        </div>
                  </div>
            </section>
      )
}
