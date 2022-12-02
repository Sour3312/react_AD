import "./sidebar.css"
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material"
import ListIcon from '@mui/icons-material/List';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { NavLink } from "react-router-dom";
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Realview</h3>
                    <ul className="sidebarList">
                        <NavLink to="/realview/dashboard" activeClassName="active" className="link" >
                            <li className="sidebarListItem">
                                <GppGoodOutlinedIcon className="sidebarIcon" />
                                &nbsp;&nbsp;Dashboard
                            </li>
                        </NavLink>
                        <NavLink to='/realview/tripList' activeClassName="active" className="link">
                            <li className="sidebarListItem ">
                                <ListIcon className="sidebarIcon" />
                                &nbsp;&nbsp;Trip List
                            </li>
                        </NavLink>
                        <NavLink to='/realview/tripUpload' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <DriveFolderUploadIcon className="sidebarIcon" />
                                &nbsp;&nbsp;Trip Upload
                            </li>
                        </NavLink>
                        <NavLink to='/realview/mapView' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <AddLocationAltIcon className="sidebarIcon" />
                                &nbsp;&nbsp; Map View
                            </li>
                        </NavLink>
                        <NavLink to='/realview/acessreqest' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                &nbsp;&nbsp;Access Request
                            </li>
                        </NavLink>
                        <NavLink to='/realview/acessPage' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <FileOpenIcon className="sidebarIcon" />
                                &nbsp;&nbsp;Access Page
                            </li>
                        </NavLink>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">3D Model</h3>
                    <ul className="sidebarList">
                        <NavLink to='/3DModel/users' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </NavLink>
                        <NavLink to='/user/:userId' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Product
                            </li>
                        </NavLink>
                        <NavLink to='/3DModel/transactions' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <AttachMoney className="sidebarIcon" />
                                Transactions
                            </li></NavLink>
                        <NavLink to='' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <BarChart className="sidebarIcon" />
                                Reports
                            </li></NavLink>

                        <NavLink to='/Analytics' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </li></NavLink>
                        <NavLink to='/sales' activeClassName="active" className="link">
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon" />
                                Sales
                            </li></NavLink>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" >
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Report
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
