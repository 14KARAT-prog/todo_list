import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';


import Users from './components/User/Users';
import Projects from './components/Projects/Projects';
import Todos from './components/Todos/Todos';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProjectPage from './Pages/ProjectPage';
import Auth from './components/Auth/Auth';



function App() {
  const [usersList, setUserList] = useState([]);
  const [projectsList, setProjectsList] = useState([]);
  const [todosList, setTodosList] = useState([]);
  const [token, setAddToken] = useState({});

  const loadData = () => {
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
      setUserList(response.data.results);
    }).catch(error => console.log(error));
  
    axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
      setProjectsList(response.data.results)
    }).catch(error => console.log(error))
  
    axios.get('http://127.0.0.1:8000/api/todos/').then(response => {
      setTodosList(response.data.results)
    }).catch(error => console.log(error))
  }

  const getToken = (username, password) => {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {username : username, password: password})
      .then(response => {
        setToken(response.data.token);
      }).catch(error => alert('Неверный логин или пароль'));
  }

  const setToken = (token) => {
    const cookies = new Cookies();
    cookies.set('token', token);
    setAddToken({'token' : token});
  }

  const logout = () => {
    setAddToken({'token' : undefined});
  }

  const getTokenFromStorage = () => {
    const cookies = new Cookies()
    const token = cookies.get('token')
    setAddToken({'token' : token});
  }

  const isAuthenticated = () => {
    console.log(token['token'] !== undefined)
    return token['token'] !== undefined;
  }

  useEffect(() => {
    getTokenFromStorage();
    loadData();
  }, []);

  return (
      <div className="App">
        <Menu />
        {isAuthenticated() 
        ? <div className='isAuthenticated'><button onClick={() => logout()}>Logout</button></div>
        : <div className='isAuthenticated'>not is_authenticated</div>}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="users" element={<Users users={usersList} />} />
            <Route path="projects" element={<ProjectsLayout />}>
              <Route index element={<Projects projects={projectsList} />} />
              <Route path=':id' element={<ProjectPage project={projectsList} users={usersList} />}/>
            </Route>
            <Route exact path="todos" element={<Todos todos={todosList} />} />
            <Route exact path="auth" element={<Auth getToken={ getToken } />} />
          </Routes>
        <Footer />
      </div>
  );
}

function ProjectsLayout() {
  return (
    <main>
      <div className='container'>
        <Outlet />
      </div>
    </main>
  )
}

export default App;
