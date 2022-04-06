import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';


import Users from './components/User/Users';
import Projects from './components/Projects/Projects';
import Todos from './components/Todos/Todos';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ProjectPage from './Pages/ProjectPage';



function App() {
  const [usersList, setUserList] = useState([])
  const [projectsList, setProjectsList] = useState([])
  const [todosList, setTodosList] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
      setUserList(response.data.results)
    }).catch(error => console.log(error));
  }, [])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
      setProjectsList(response.data.results)
    }).catch(error => console.log(error))
  }, [])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/todos/').then(response => {
      setTodosList(response.data.results)
    }).catch(error => console.log(error))
  }, [])


  return (
      <div className="App">
        <Menu />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="users" element={<Users users={usersList} />} />
            <Route path="projects" element={<ProjectsLayout />}>
              <Route index element={<Projects projects={projectsList} />} />
              <Route path=':id' element={<ProjectPage project={projectsList} users={usersList} />}/>
            </Route>
            <Route exact path="todos" element={<Todos todos={todosList} />} />
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
