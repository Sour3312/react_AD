import './tripList.css'
import { useParams } from 'react-router-dom';
import JSONDATA from '../../../csvjson.json';
import Page1 from './pagination/page1';


const TripList = () => {
  const params = useParams();
  const { name } = params
  // const [searchTerm, setSearchTerm] = useState('');

  const dummyData = () => {
    JSONDATA.map((data, index) => {
      console.log(index + ' ' + data.file_name + ' ' + data.gender + ' ' + data.mail);
    })
  }

  return (
    <div className="mainDiv">
      <p>{name}</p>
      <div className='trip-main-div'>
        <h5>TRIP LIST & DETAILS{name}</h5><br></br>
        <div className='inputDiv'>
          <select className="triplist-dropdown" placeholder='All Project' >
            <option selected disabled value="1">Select Project Filter </option>
            <option value="2">Two</option>
            <option value="3">t3ree</option>
            <option disabled value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
          </select>

          <select className="triplist-dropdown" onchange={dummyData}>
            <option selected value="1">Select Status Filter </option>
            <option value="2">Two</option>
            <option value="3">t3ree</option>
            <option disabled value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
          </select>

          <input type="text" placeholder='Project Search...' className='triplist-input' >
          </input>
          <button className='searchBtn' onClick={dummyData}>Search</button>
        </div>
        <br></br>
        <div className='triplist-table'>
          <h3 >No.</h3>
          <h3>Project Name</h3>
          <h3>Date</h3>
          <h3>Trip Name</h3>
          <h3>All | Active | Deactive</h3>
          <h3>Trip Link</h3>
          <h3>Status</h3>
          <h3>Trip Detail</h3>
          <h3>Trip Image</h3>

        </div>
        <div className='list-div'><br></br> <Page1 TLdata={JSONDATA} /></div>



        {/* {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val
          } else if (val.streetview.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val
          }
        }
        )
          .map((data, index) => {
            return (
              <div className='list-div'>
                <tr>
                  <td className='list-div-td' >{data.streetview}</td>
                  <td className='list-div-td' >{data.datetimeoriginal}</td>
                  <td className='list-div-td' >{data.state}</td>
                  <td className='list-div-td' >{data.country}</td>
                  <td className='list-div-td' >{data.copyright_url}</td>
                  <td className='list-div-td' >{data.latitude}</td>
                  <td className='list-div-td' >{data.longitude}</td>
                  <td className='list-div-td' >{data.altitude}</td>
                </tr>

              </div>
            )

          })
        } */}


      </div>

    </div>
  )
}
export default TripList;