import { Routes, Route, useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie"
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PopUp from './components/PopUp';
import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Tour from './components/Tour';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);
  const [color, setColor] = useState(null);
  const [message, setMessage] = useState(null);
  const cookies = new Cookies();
  const navigate = useNavigate();
  return (
    <div className="App">
    {
      cookies.get('user') && !user
      ? setUser(cookies.get('user'))
      : null
    }
      <Header user={user} />
      <PopUp 
        message={message}
        setMessage={setMessage}
        color={color}
      />
      <Routes>
        <Route path='*' element={<Home setMessage={setMessage} />}>
        </Route>
        <Route path='/tour/:id' element={<Tour setMessage={setMessage} />} />
        <Route 
          path='/login' 
          element={
            <Login 
              setUser={setUser} 
              setMessage={setMessage} 
              setColor={setColor}
              navigate={navigate}
              cookies={cookies}
            />
          }
        />
        <Route 
          path='/profile'
          element={
            <Profile 
              user={user} 
              setUser={setUser} 
              setMessage={setMessage}
              navigate={navigate}
              cookies={cookies}
            />
          }
        />
        <Route 
          path='/signup' 
          element={
            <SignUp 
              user={user}
              setMessage={setMessage}
              setColor={setColor}
              navigate={navigate}
              />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
