import React, { useState, useRef, useEffect } from 'react';
import { MdFileUpload } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { DataStoreState } from '../store/ContexApi';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import firebaseEngine from '../initFirebase/configureFirebase';
import { makeStyles } from 'tss-react/mui';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { MdCancel } from 'react-icons/md';
import { Button } from '@mui/material';

const CoverLetter = ({closeLetter}) => {
  const { handleSubmit} = useForm();
  const [letter, setLetter] = useState();
  const [progess, setProgress] = useState();
  const [file, setFile] = useState();
  const [previewurl, setPreviewUrl] = useState(null)
  const { setAlert, user } = DataStoreState();
  const { db, storage } = firebaseEngine;
  const userId = user?.uid;
  const appData = collection(db, "CoverLetters");

  const filePickerRef = useRef();

  const uploadLetter = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/coverLetters/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
      setProgress(prog);
    },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => {
          setLetter(url)
        })
    }
    )
  }

  useEffect(() => {
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file)
    uploadLetter(file)
  }, [file]);

  function pickedHandler(event) {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  }


  function pickedLetterHandler() {
    filePickerRef.current.click()
  }

  const onSubmit = async () => {
    await addDoc(appData, {coverLetters: letter, createdAt: serverTimestamp(), createdBy: doc(db, "User", userId) });
    setAlert({
      open: true,
      message: "Your cover letter has been submitted successfully",
      type: "success"
    })

    closeLetter()
  }

  const useStyle = makeStyles()((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      position: "relative"
    },
    cancel: {
      position: "absolute",
      right: 0,
      top: 0,
      color: "#98a2b3",
      fontSize: 29,
      cursor: "pointer"
    },
    btn: {
      color: "#344054",
      textTransform: "capitalize", 
      margin: "12px 0",
      padding: "16px"
    },
  }))

  const { classes } = useStyle();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <MdCancel className={classes.cancel} onClick={closeLetter}/>
      <h3>Upload Cover letter</h3>
      <input
        style={{ display: "none" }}
        type="file"
        accept=".pdf, .docx"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      {!file ? <Button variant="text" className={classes.btn} onClick={pickedLetterHandler}><MdFileUpload /> Upload file</Button> : <p className={classes.btn}>{file.name}</p>}
      <small style={{fontFamily: "Work Sans", color: "#344054", marginTop: "16px"}}>Accepted file: Microsoft Office Document or PDF. Max file size 5MB</small>
      <Button type="submit" variant='contained' sx={{backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end", marginTop: "48px"}}>save</Button>
    </form>
  )
}

export default CoverLetter