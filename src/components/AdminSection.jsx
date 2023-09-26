import { FaBriefcase, FaMap, FaStar } from 'react-icons/fa';
import '../css/UserSection.css';
import LinkItem from './LinkItem';
import { FaUserGroup } from 'react-icons/fa6';
const AdminSection = () => {
  return (
    <div className='admin profile-links-section'>
        <h5>Admin</h5>
        <LinkItem item=<FaMap /> text='Manage Tours' link='/profile' />
        <LinkItem item=<FaUserGroup /> text='Manage Users' link='/profile' />
        <LinkItem item=<FaStar /> text='Manage Reviews' link='/profile' />
        <LinkItem item=<FaBriefcase /> text='Manage Bookings' link='/profile' />
    </div>
  )
}

export default AdminSection
