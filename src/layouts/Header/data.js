import { FaMapMarkedAlt, FaCheckCircle,  BsCalendar3Fill } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { AiFillHome, AiFillSetting, AiFillCalendar} from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Home',
        path: '/view/home',
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
        path: '/view/checklist',
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
        title: 'Calendar',
        path: '/view/duration',
        icon: <AiFillCalendar />,
        cName: 'nav-text'
    }
]
