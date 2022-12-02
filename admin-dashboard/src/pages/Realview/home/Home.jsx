// import Chart from '../../../components/chart/Chart'
// import { userData } from '../../../dummyData'
// import WidgetSm from '../../../components/widgetSm/WidgetSm'
// import WidgetLg from '../../../components/widgetLg/WidgetLg'
import './home.css';
import AllCityName from '../../../components/AllCityName/AllCityName'
import FeaturedInfo from '../../../components/featuredInfo/FeaturedInfo'

const Home = () => {

    return (
        <div className='home'>
            <FeaturedInfo />
            <AllCityName/>
            {/* <Chart data={userData} title="User Analytics" grid datakey="Active Users" /> */}
            {/* <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div> */}
        </div>
    )
}

export default Home
