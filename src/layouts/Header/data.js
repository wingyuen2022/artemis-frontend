import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaMapMarkedAlt } from "react-icons/fa";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";


export const SidebarData = [
    {
        title: 'Home',
        path: '/view/home',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Messaging',
        path: '/view/messaging',
        icon: <RiMessage2Fill />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/view/settings',
        icon: <AiFillSetting />,
        cName: 'nav-text'
    },
    {
        title: 'Signout',
        path: '/SignOut',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },

]

/*
{
        title: 'Current Trips',
        path: '/CurrentTrips',
        icon: <FaMapMarkedAlt />,
        cName: 'nav-text'
    },
*/