import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, query, where, collection } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import firebaseEngine from "../initFirebase/configureFirebase";

const DataStore = createContext();

const DataStoreContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  const { auth, db } = firebaseEngine;

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "UserData"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setData(dataArr)
      })
      return () => unsubScribe()
    }
  }, [user])

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
      }
      else setUser(null)
    })
  })

  console.log(data)

  return (
    <DataStore.Provider value={{
      data,
      user,
      setUser
    }}>
      {children}
    </DataStore.Provider>
  )
}

export default DataStoreContext
export const DataStoreState = () => {
  return useContext(DataStore);
}