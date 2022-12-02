import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material"
import ListIcon from '@mui/icons-material/List';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FileOpenIcon from '@mui/icons-material/FileOpen';


const SidePanel = [
  {
    name: "Realview",
    pages: {
      Dashboard: {
        icon: <GppGoodOutlinedIcon/>,
        status: 1,
        route: "/Realview/Dashboard",
      },
      "Trip List": {
        icon: <ListIcon/>,
        status: 1,
        route: "/Realview/TripList/",
      },
      "Trip Upload": {
        icon: <DriveFolderUploadIcon/>,
        status: 1,
        route: "/Realview/TripUpload",
      },
      "Map View": {
        icon: <AddLocationAltIcon/>,
        status: 1,
        route: "/Realview/MapView",
      },
      "Acess Request": {
        icon: <PermIdentity/>,
        status: 1,
        route: "/Realview/AcessRequest",
      },
      "Acess Page": {
        icon: <FileOpenIcon/>,
        status: 1,
        route: "/Realview/AcessPage",
      },
    },
  },
  {
    name: "3D-Model",
    route: "/realview/acessPage",

    pages: {
      Users: {
        icon: <PermIdentity/>,
        status: 1,
        route: "/3DModel/Users",
      },
      Products: {
        icon: <Storefront/>,
        status: 1,
        route: "/user/:userId",
      },
      Transactions: {
        icon: <AttachMoney/>,
        status: 1,
        route: "/3DModel/Transactions",
      },
      Reports: {
        icon: <BarChart/>,
        status: 1,
        route: "/3DModel/report",
      },
      Analytics: {
        icon:<Timeline/>,
        status: 1,
        route: "/3DModel/Analytics",
      },
      Sales: {
        icon: <TrendingUp/>,
        status: 1,
        route: "/3DModel/Sales",
      },
    },
  },
  {
    name: "Notifications",
    pages: {
      Mail: {
        icon: <MailOutline/>,
        status: 1,
        route: "/Notifications/Mail",
      },
      Feedback: {
        icon: <DynamicFeed/>,
        status: 1,
        route: "/Notifications/Feedback",
      },
      Messages: {
        icon:<ChatBubbleOutline/>,
        status: 1,
        route: "/Notifications/Messages",
      },
    },
  },
  {
    name: "Staff",
    pages: {
      Manage: {
        icon: <WorkOutline/>,
        status: 1,
        route: "/Staff/Manage",
      },
      Analytics: {
        icon: <Timeline/>,
        status: 1,
        route: "/Staff/Analytics",
      },
      Report: {
        icon: <Report/>,
        status: 1,
        route: "/Staff/Report",
      },
    },
  },
];

export default SidePanel;
