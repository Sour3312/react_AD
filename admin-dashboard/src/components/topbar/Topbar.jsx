import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import iconn from './globe.svg'
import logoo from './mappls-logo.svg'
import HowToRegIcon from '@mui/icons-material/HowToReg';import { Box } from '@mui/system';
const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img className='logo-svg' src={logoo} alt="svg file" />
                </div>
                {/* <MenuOutlinedIcon /> */}
                <h2><span><HowToRegIcon/></span>Admin Dasboard</h2>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>

                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>

        </div>
    )
}

export default Topbar
