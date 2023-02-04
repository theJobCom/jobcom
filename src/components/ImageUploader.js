import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/system';
import { AiFillCamera } from 'react-icons/ai';
import { makeStyles } from 'tss-react/mui';
import firebaseEngine from "../initFirebase/configureFirebase";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { FaTrash } from 'react-icons/fa';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { DataStoreState } from '../store/ContexApi';

const ImageUploader = () => {
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const { avatar } = DataStoreState();
  const avatarInfo = avatar[0];
  const { storage, db } = firebaseEngine;
  const appData = collection(db, "Avatars");
  console.log(avatarInfo?.photoURL);


  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState(null);
  const filePickerRef = useRef();
  console.log(progress)

  
  const uploadPhoto = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
      setProgress(prog);
    },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then(url => addDoc(appData, {photoURL: url, createdBy: doc(db, "User", userId), createdAt: serverTimestamp()}))
    }
    );
  }

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file)
    uploadPhoto(file)
    // eslint-disable-next-line
  }, [file])

  function pickedHandler(event) {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  }
  
  function pickedImageHandler() {
    filePickerRef.current.click()
  }

  const useStyle = makeStyles()(() => ({
    imageBox: {
      position: "relative",
      width: "250px",
      height: "250px",
      marginBottom: "22px",
      backgroundColor: "#f2f4f7",
      borderRadius: "10px"
    },
    profile: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      position: "relative"
    },
    boxIconBox: {
      position: "absolute",
      bottom: "5px",
      right: "5px",
      width: "54px",
      height: "54px",
      borderRadius: "50%",
      backgroundColor: "#e4e7eC",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    },
    cameraIcon: {
      fontSize: "30px"
    }
  }))

  const { classes } = useStyle();
  console.log(file);

  return (
    <Box className={classes.imageBox}>
      <input
        style={{ display: "none" }}
        ref={filePickerRef}
        type="file"
        accept='.jpg, .png, .jpeg'
        onChange={pickedHandler}
      />
    {previewUrl && <img src={avatarInfo?.photoURL} alt="user avatar" className={classes.profile} />}
      <Box className={classes.boxIconBox} onClick={!file ? pickedImageHandler : () => console.log('delete')}>
        {!file && <AiFillCamera className={classes.cameraIcon}/>}
        {file && <FaTrash className={classes.cameraIcon}/>}
      </Box>
  </Box>
  )
}

export default ImageUploader