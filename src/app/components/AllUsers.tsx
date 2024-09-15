'use client';
import { db } from '../firebaseConfig';
import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import {Fetch} from "../components/fetch"






// //to delete user

// async function deleteUserFromFirestore(id: string) {
//       try {
//           console.log("Attempting to delete user with ID:", id);
//           await deleteDoc(doc(db, "users", id));
//           return id;
//       } catch (error) {
//           console.error("Error deleting user:", error);
//           return null;
//       }
//   }

export default function Dashboard() {
      const userData=Fetch
     
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
    
     
 
      

      

      return (
            <>
                  <header id='datatable' className="flex h-screen w-full justify-center items-center">
                        <div className="flex h-auto h- w-4/5 border-2">
                              <table cellSpacing={40} cellPadding={40} className='h-auto w-full border-2' >
                                    <thead>
                                          <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>City</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {userData.map((user) => (
                                          <tr key={user.id} className='h-5'>
                                                <td className=''>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.mobile}</td>
                                                <td>{user.city}</td>
                                          </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </header>
            </>
      );
}
