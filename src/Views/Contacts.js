import React from 'react'
import '../App.css';
import MenuEnd from '../Components/MenuEnd'
import SocialMedia from '../Components/SocialMedia'
import ContactsHeader from '../Components/ContactsHeader'
import Showcase from '../Components/Showcase';
import NavSection from '../Components/NavSection';
import Header from '../Components/header';
import Connect from '../Components/Connect';
import BoxContacts from '../Components/BoxContacts';



const Contacts = () => {
  return (
    <div>

    <ContactsHeader />

    <Connect />

    <BoxContacts />

    <MenuEnd />

    <SocialMedia />
    
    </div>
  )
}

export default Contacts