import { ArrowDownward } from '@mui/icons-material'
import './featuredInfo.css'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const FeaturedInfo = () => {
    return (
        <div>            
            <b><h3>Realview Dashboard</h3></b><br></br>
            <div className='featured'>
                <div className="featuredItem">
                    <span className="featuredTitle">TOTAL CITY</span>
                    <div className="featuredMoneyContainer">
                        <h2>undefined</h2><ContentCopyOutlinedIcon className='featuredIcon'/>
                    </div>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">TOTLA TRIP</span>
                    <div className="featuredMoneyContainer">
                        <h2 >3954  </h2><ContentCopyOutlinedIcon className='featuredIcon' />
                    </div>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">TOTAL STREET VIEW</span>
                    <div className="featuredMoneyContainer">
                        <h2 >136456256 </h2><ContentCopyOutlinedIcon className='featuredIcon' />
                    </div>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">TOTAL COVERAGE</span>
                    <div className="featuredMoneyContainer">
                        <h2 >6235525km</h2><ContentCopyOutlinedIcon className='featuredIcon' />
                    </div>
                </div>
            </div><br></br><br></br><br></br><br></br>
        </div>
    )
}

export default FeaturedInfo
