import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot, query, where, collection } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import firebaseEngine from "../initFirebase/configureFirebase";

const DataStore = createContext();

const DataStoreContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [general, setGeneral] = useState([]);
  const [work, setWork] = useState([]);
  const [contact, setContact] = useState([]);
  const [education, setEducation] = useState([]);
  const [project, setProject] = useState([]);
  const [achievement, setAchievemet] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [resumes, setResumes] = useState([])
  const [coverLetters, setCoverLetters] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: ""
  })

  const { auth, db } = firebaseEngine;

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "Achievements"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setAchievemet(dataArr)
      })
      return () => unsubScribe()
    }
    // eslint-disable-next-line 
  }, [user])

    useEffect(() => {
    if (user) {
      const q = query(collection(db, "WorkExperience"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setWork(dataArr)
      })
      return () => unsubScribe()
    }
    // eslint-disable-next-line 
    }, [user])
  
    useEffect(() => {
    if (user) {
      const q = query(collection(db, "Project"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setProject(dataArr)
      })
      return () => unsubScribe()
    }
      // eslint-disable-next-line 
    }, [user])
  
    useEffect(() => {
    if (user) {
      const q = query(collection(db, "General"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setGeneral(dataArr)
      })
      return () => unsubScribe()
    }
      // eslint-disable-next-line 
    }, [user])
  
    useEffect(() => {
    if (user) {
      const q = query(collection(db, "Education"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setEducation(dataArr)
      })
      return () => unsubScribe()
    }
      // eslint-disable-next-line 
    }, [user])
  
    useEffect(() => {
    if (user) {
      const q = query(collection(db, "Contact"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setContact(dataArr)
      })
      return () => unsubScribe()
    }
      // eslint-disable-next-line 
    }, [user])

    useEffect(() => {
    if (user) {
      const q = query(collection(db, "Resumes"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setResumes(dataArr)
      })
      return () => unsubScribe()
    }
      // eslint-disable-next-line 
    }, [user])
  
    useEffect(() => {
    if (user) {
      const q = query(collection(db, "CoverLetters"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setCoverLetters(dataArr)
      })
      return () => unsubScribe()
    }
      // eslint-disable-next-line 
    }, [user])

    useEffect(() => {
    if (user) {
      const q = query(collection(db, "Avatars"), where("createdBy", "==", doc(db, "User", user.uid)));
      const unsubScribe = onSnapshot(q, (snapShot) => {
        let dataArr = []
        snapShot.docs.forEach((doc) => {
          dataArr.push({...doc.data(), id: doc.id})
        })
        setAvatar(dataArr)
      })
      return () => unsubScribe()
    }
      // eslint-disable-next-line 
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

  console.log(avatar)

  return (
    <DataStore.Provider value={{
      user,
      setUser,
      education,
      contact,
      achievement,
      project,
      general,
      avatar,
      work,
      alert,
      setAlert,
      resumes,
      coverLetters
    }}>
      {children}
    </DataStore.Provider>
  )
}

export default DataStoreContext
export const DataStoreState = () => {
  return useContext(DataStore);
}