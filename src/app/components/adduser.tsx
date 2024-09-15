'use client'
import {db} from "../firebaseConfig"
import {collection, addDoc} from 'firebase/firestore'
import React, {useState} from 'react'

async function addDataToFirestore(id:string,name: string, email: string, mobile: string, city: string){
      try{
            const docRef = await addDoc(collection(db, "users"),{
                  id:id,
                  name:name,
                  email:email,
                  mobile:mobile,
                  city:city
            })
            console.log("Document Written with ID ",docRef.id)
            return true;
      } catch(error) {
            console.error("Error adding the document!!!",error)
      }
}

export default function AddUser() {
      const [id, setId] = useState("");
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [mobile, setMobile] = useState("");
      const [city, setCity] = useState("");

      const handleSubmit = async (e: { preventDefault: () => void }) => {
            e.preventDefault();
            const added = await addDataToFirestore(id,name, email, mobile, city)
            if (added) {
                  setId("");
                  setName("");
                  setEmail("");
                  setMobile("");
                  setCity("");

                  alert("Data inserted successfully...")
            }
            else{
                  alert("Data not added!!!")
            }
      }



  return (
      <main className=" flex h-screen w-full justify-center items-center bg-slate-200">
            <div className="h-5/6 w-1/3 bg-red-400 text-center pt-3 rounded-3xl  shadow-2xl shadow-slate-800">
                  <h1 className="text-5xl">Add new user</h1>
                  <br />
                  <form onSubmit={handleSubmit} className="text-l  ">
                        <label htmlFor="name">Id</label>
                        <br/>
                        <input type="text" name="" id="name" placeholder="Enter Id"  value={id} onChange={(e)=>setId(e.target.value)}/>
                        <br /><br />
                        <label htmlFor="name">Name</label>
                        <br/>
                        <input type="text" name="" id="name" placeholder="Enter Name"  value={name} onChange={(e)=>setName(e.target.value)}/>
                        <br /><br />
                        <label htmlFor="">Email</label>
                        <br />
                        <input type="text" name="" id="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <br />
                        <br />
                        <label htmlFor="">Mobile</label>
                        <br />
                        <input type="text" name="" id="mobile" placeholder="Enter mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
                        <br />
                        <br />
                        <label htmlFor="">City</label>
                        <br />
                        <input type="text" name="" id="" placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)}/>
                        <br />
                        <br />
                        <button type="submit" className="h-10 w-28 rounded-xl bg-slate-50">Add User</button>
                  </form>
            </div>
      </main>
  );
}
