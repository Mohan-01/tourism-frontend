import '../css/ProfileSettings.css';
import { handlePasswordChange, handleUpdate } from '../helpingFunctions';
import LabelInputField from './LabelInputField';

const ProfileSettings = ({user, setMessage, setUser}) => {
  return (
    <div className='user-profile-settings'>
        <div className='settings-1'>
            <h2>Your account settings</h2>
            <form onSubmit={e => handleUpdate(e, setMessage, setUser)}>
            <LabelInputField label='Name: ' id='name' name='name' type='text' placeholder={user.name} />
            <LabelInputField label='Email address: ' id='email' name='email' type='email' placeholder={user.email} />
            <LabelInputField label=<img src={user.photo} alt="user-pic" width="20%" /> id='photo' name='photo' type='file' />
            <button className='save'>Save Settings</button>
            </form>
        </div>
        <div className="settings-2">
            <h2>Password change</h2>
            <form onSubmit={e => handlePasswordChange(e, setMessage)}>
            <LabelInputField label='Current Password' id='password' name='password' type='password' />
            <LabelInputField label='New Password' id='newPassword' name='newPassword' type='password' />
            <LabelInputField label='Confirm Password' id='passwordConfirm' name='passwordConfirm' type='password' />
            <button className='save'>Save Password</button>
            </form>
        </div>
    </div>
  )
}

export default ProfileSettings
