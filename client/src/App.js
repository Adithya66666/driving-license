import './App.css';
import Home from './pages/Home';
import Requests from './pages/Requests';
import Register from './pages/Register';
import DriverLogin from './pages/DriverLogin';
import PoliceLogin from './pages/PoliceLogin';
import DmtLogin from './pages/DmtLogin';
import NavBar from './NavBar';
import ELicense from './pages/ELicense';
import Tobepaid from './pages/Tobepaid';
import PaymentHistory from './pages/PaymentHistory';
import OffenseHistory from './pages/OffenseHistory';
import CreateELicense from './pages/CreateELicense';
import DriverList from './pages/DriverList';
import OfficerList from './pages/OfficerList';
import Fines from './pages/Fines';
import IssueFine from './pages/IssueFine';
import SpotFineHistory from './pages/SpotFineHistory';
import LicenseHolder from './pages/LicenseHolder';
import Profile from './pages/Profile';
import LandingPage from './pages/LandingPage';
import Error404 from './pages/Error404';

import { Route,Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [userid, setUserid] = useState(null);
  const [usertype, setUsertype] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Check if userid session is created
    const storedUserid = sessionStorage.getItem('userid');
    if (storedUserid) {
      setIsLogin(true);
      setUserid(storedUserid);
      
      // Get usertype session
      const storedUsertype = sessionStorage.getItem('usertype');
      if (storedUsertype) {
        setUsertype(storedUsertype);
      }

      // Get usertype session
      const storedUsername = sessionStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex">
        {isLogin && <>
          <NavBar userid={userid} usertype={usertype} username={username} />
          <div className="w-[100%] bg-gray-200 overflow-y-scroll">
          <Routes>
            <Route path='/home' element={<Home userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/elicense' element={<ELicense userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/tobepaid' element={<Tobepaid userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/payments' element={<PaymentHistory userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/offensehistory' element={<OffenseHistory userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/requests' element={<Requests userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/createElicense' element={<CreateELicense userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/drivers' element={<DriverList userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/officers' element={<OfficerList userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/viewfine' element={<Fines userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/issuefine' element={<IssueFine userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/spotfinehistory' element={<SpotFineHistory userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/licenseholders' element={<LicenseHolder userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='/profile' element={<Profile userid={userid} usertype={usertype} username={username}/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
          </div>
        </>}
        {!isLogin && <>
          <div className="w-[100%] bg-gray-200 overflow-y-scroll">
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/driverLogin' element={<DriverLogin/>}/>
            <Route path='/policeLogin' element={<PoliceLogin/>}/>
            <Route path='/dmtLogin' element={<DmtLogin/>}/>
            <Route path='*' element={<LandingPage/>}/>
          </Routes>
          </div>
        </>}
      </div>
 
    </>
    
  );
}

export default App;
