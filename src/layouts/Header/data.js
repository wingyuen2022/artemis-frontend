import { FaMapMarkedAlt, FaCheckCircle } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { AiFillHome, AiFillSetting } from "react-icons/ai";

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
        title: 'Activities',
        path: '/activities',
        icon: <AiFillSetting />,
        cName: 'nav-text'
    }
]
