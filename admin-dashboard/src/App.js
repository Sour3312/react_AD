import {
  BrowserRouter as Router,
  Routes,
  Route,useParams
} from "react-router-dom";
import './app.css'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from './pages/Realview/home/Home';
import UserList from './pages/3d Model/userList/UserList';
import User from './pages/3d Model/user/User';
import NewUser from './pages/3d Model/newUser/NewUser';
import ProductList from './pages/3d Model/productList/ProductList';
import Product from './pages/3d Model/product/Product'
import NewProduct from './pages/3d Model/newProduct/NewProduct'
import { TripUpload  } from './pages/Realview/tripUpload/tripUpload';
import MapView from './pages/Realview/mapView/mapView';
import AccessRequest from './pages/Realview/AcessRequest/accReq';
import AcessPage from './pages/Realview/AcessPage/accPage';
import Transactions from "./pages/3d Model/transactions/transactions";
import TripList from "./pages/Realview/tripList/tripList";
import Panel from "./components/sidebar/panel";

function App() {
  const params=useParams();
  const {name}=params
  console.warn(name)
  return (

    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Panel/>
          {/* <Sidebar /> */}
          <Routes>
            <Route path='/Realview/Dashboard' element={<Home />} />
            <Route path='/Realview/TripList/' element={<TripList />} />
            <Route path='/Realview/TripUpload' element={<TripUpload />} />
            <Route path='/Realview/MapView' element={<MapView />} />
            <Route path='/Realview/AcessReqest' element={<AccessRequest />} />
            <Route path='/Realview/AcessPage' element={<AcessPage />} />
            <Route path='/3DModel/Users' element={<UserList />} />
            <Route path='/user/:name' element={<User />} />
            <Route path='/3DModel/Transactions' element={<Transactions />} />
            <Route path='/newUser' element={<NewUser />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/newProduct' element={<NewProduct />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
