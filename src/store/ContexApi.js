import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect } from "react";
import firebaseEngine from "../initFirebase/configureFirebase";

const DataStore = createContext();

const DataStoreContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const { auth } = firebaseEngine;

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
      }
      else setUser(null)
    })
  })

  return (
    <DataStore.Provider value={{
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