import './styles/styles.css';
import './styles/sider-styles.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sider from './components/Sider'
import Header from './components/Header';
import Account from './pages/Account';
import Dashboards from './pages/Dashboards';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Home from './pages/Home';
import Patients from './pages/Patients';
import TestPlanner from './pages/TestPlanner';


function App() {
  const [viewState, setViewState] = useState(false);


  return(
    <div>
        <Header onViewStateChange={setViewState}/>
        <Router>
          <Sider viewState={viewState}>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/account' element={<Account />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/dashboard' element={<Dashboards />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/patients' element={<Patients />}></Route>
              <Route path='/testPlanner' element={<TestPlanner />}></Route>
            </Routes>
          </Sider>
        </Router>
    </div>
  );
}


export default App;
