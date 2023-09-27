import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Error from './components/Error';
import PopUp from './components/PopUp';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Tour from './components/Tour';
import Profile from './components/Profile';
import { isLoggedIn } from './helpingFunctions';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [message, setMessage] = useState({
    text: null,
    color: 'lightgreen',
    time: 0
  });
  useEffect(() => {
    isLoggedIn(setUser);
  }, [])
  return (
    <div className="App">
      <Header user={user} />
      <PopUp 
        message={message}
        setMessage={setMessage}
      />
      <Routes>
        <Route path='*' element={<Home setMessage={setMessage} navigate={navigate} setError={setError} />}>
        </Route>
        <Route path='/tour/:id' element={<Tour setMessage={setMessage}navigate={navigate} setError={setError} />} />
        <Route 
          path='/login' 
          element={
            <Login 
              setUser={setUser} 
              setMessage={setMessage} 
              navigate={navigate}
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
            />
          }
        />
        <Route 
          path='/signup' 
          element={
            <SignUp 
              user={user}
              setMessage={setMessage}
              navigate={navigate}
              />
          }
        />
        <Route
          path='/error'
          element={
            <Error error={error}/>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
