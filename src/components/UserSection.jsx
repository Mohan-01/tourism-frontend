import React from 'react'
import { FaGear } from 'react-icons/fa6';
import { FaBriefcase, FaCreditCard, FaStar } from 'react-icons/fa';
import LinkItem from './LinkItem';
import '../css/UserSection.css';

const UserSection = () => {
  return (
    <div className='user profile-links-section'>
    <h5>User</h5>
    <LinkItem link='/profile' item={<FaGear />} text='Settings' />
    <LinkItem link='/profile' item={<FaBriefcase />} text='bookings' />
    <LinkItem link='/profile' item={<FaStar />} text='Reviews' />
    <LinkItem link='/profile' item={<FaCreditCard />} text='Billing' />
    </div>
  )
}

export default UserSection
