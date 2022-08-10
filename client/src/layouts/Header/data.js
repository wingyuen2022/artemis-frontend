import { FaMapMarkedAlt, FaCheckCircle } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";


export const SidebarData = [
    {
        title: 'Home',
        path: '/view/Home',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'View Trips',
        path: '/view/trip/all',
        icon: <FaMapMarkedAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Checklist',
        path: '/view/Checklist',
        icon: <FaCheckCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Weather',
        path: '/view/weather',
        icon: <TiWeatherPartlySunny />,
        cName: 'nav-text'
    },
    {
        title: 'Message Centre',
        path: '/view/message',
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
