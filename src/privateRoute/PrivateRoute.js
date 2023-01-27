import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const userId = JSON.parse(localStorage.getItem('user')).uid
  const [id, setId] = React.useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setId(userId);
  }, [])

  return id ? children : navigate('/');
}

export default PrivateRoute