import './styles/styles.css';
import './styles/sider-styles.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sider from './components/Sider'
import Header from './components/Header';
import Account from './pages/Account';
import Dashboards from './pages/Dashboards';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Home from './pages/Home'


function App() {
  return(
    <div>
      <Header />
    <Router>
      <Sider>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboards />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      </Sider>
    </Router>
    </div>
  );
}


export default App;
