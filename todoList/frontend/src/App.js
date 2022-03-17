import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

import Users from './components/Users';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

function App() {
  const [usersList, setUserList] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
      setUserList(response.data) 
    }).catch(error => console.log(error));
  }, [])


  return (
    <div className="App">
      <Menu />
      <Users users={usersList} />
      <Footer />
    </div>
  );
}

export default App;
