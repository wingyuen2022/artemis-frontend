import { FaMapMarkedAlt } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";


export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Current Trips',
        path: '/CurrentTrips',
        icon: <FaMapMarkedAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Checklist',
        path: '/Checklist',
        icon: <FcCheckmark />,
        cName: 'nav-text'
    },
    {
        title: 'Messaging',
        path: '/Messaging',
        icon: <RiMessage2Fill />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/Settings',
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
