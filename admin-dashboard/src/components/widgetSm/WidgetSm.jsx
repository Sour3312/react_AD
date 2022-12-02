import { Visibility } from '@mui/icons-material'
import './widgetSm.css'

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <div className="widgetSmUsername">Aman Garg</div>
                        <div className="widgetSmUserTitle">Software Enginner</div>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' />Display</button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <div className="widgetSmUsername">Ankit Kumar</div>
                        <div className="widgetSmUserTitle">Data Scientist</div>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' />Display</button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <div className="widgetSmUsername">Rajan Kumar Gupta</div>
                        <div className="widgetSmUserTitle">Gamer</div>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' />Display</button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <div className="widgetSmUsername">Vishal Karmakar</div>
                        <div className="widgetSmUserTitle">DSA Coder</div>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' />Display</button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <div className="widgetSmUsername">Aman Garg</div>
                        <div className="widgetSmUserTitle">Software Enginner</div>
                    </div>
                    <button className="widgetSmButton"><Visibility className='widgetSmIcon' />Display</button>
                </li>

            </ul>
        </div>
    )
}

export default WidgetSm
