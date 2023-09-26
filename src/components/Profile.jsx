import AdminSection from './AdminSection';
import UserSection from './UserSection';
import '../css/Profile.css';
import ProfileSettings from './ProfileSettings';
import { Link } from 'react-router-dom';
import { handleLogout } from '../helpingFunctions';
const Profile = ({user, setUser, navigate, setMessage}) => {
  return (
    <main className="profile">
    {
        user ? <Link className='logout' onClick={() => handleLogout(setUser, setMessage, navigate)}>LOGOUT</Link> : null
    }
      <div className="profile-links">
        <UserSection />
        <AdminSection />
      </div>
      <div className='profile-settings'>
      <ProfileSettings user={user} setMessage={setMessage}/>
      </div>
    </main>
  )
}

export default Profile
