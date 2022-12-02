import "./tripUpload.css";
import { useState } from "react";
import { Data } from "./data";
import * as XLSX from "xlsx";
import Button from '@mui/material/Button';
export const TripUpload = () => {
  //variables
  var arrOfFiles, fileName, allFiles;
  const fileType = [
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
    "text/pdf",
  ];

  //states
  const [excelFile, setExcelFile] = useState([]);
  const [excelFileError, setExcelFileError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [nameOfFile, setNameOfFile] = useState("Select trip name");

  //upload button function
  const handleFile = (e) => {
    allFiles = e.target.files; //object
    arrOfFiles = Object.values(allFiles); //array
    alert(`${arrOfFiles.length} file selected `)
    fileName = "";
    arrOfFiles.forEach((a, i) => {
      fileName = fileName + a.name + ' | ';
    })
    // console.log("Your selected files are : ", arrOfFiles);
    // console.log("Selected file's fileNames are : ", fileName);
    // console.log("Type of selected files : ", typeof arrOfFiles);
    // console.log("nameOfFile : ", typeof nameOfFile, nameOfFile);

    arrOfFiles.map((file) => {
      if (file) {
        if (file && fileType.includes(file.type)) {
          let reader = new FileReader();
          reader.readAsArrayBuffer(file);
          reader.onload = (e) => {
            setExcelFileError(null);
            // console.log("setExcelFile : ", e.target.result);
            setExcelFile((pre) => {
              // console.log("pre & e.target.result : ", pre, e.target.result);
              return [...pre, e.target.result];
            });
            // console.log("setExcelFile is :", setExcelFile);
            setNameOfFile(fileName);
          };
          // console.log(fileName);
          // console.log("nameOfFile : ", typeof nameOfFile,nameOfFile);
          // console.log("setNameOfFile : ", typeof setNameOfFile,setNameOfFile);
        } else {
          setExcelFileError("Please select only excel file types");
          setExcelFile(null);
        }
      } else {
        setExcelFileError("plz select your file");
        setExcelFile(null);
      }
      return 0;
    });
  };

  // submit button function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      excelFile.map((file) => {
        const workbook = XLSX.read(file, { type: "buffer" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        console.log("jsonData :", jsonData);
        // console.log("excelFile :", typeof excelFile, excelFile);
        // console.log("workbook :", workbook);
        // console.log("worksheetName :", worksheetName);
        // console.log("worksheet :", worksheet);
        setExcelData(jsonData);
        return jsonData;
      });
    } else {
      setExcelData(null);
    }
  };

  return (
    <div className="mainContainer">
      <form className="form-group" onSubmit={handleSubmit}>
        <p className="form-group-heading">TRIP DATA</p>
        <br />
        <span className="form-group-heading">File Upload</span>
        <br></br><br></br>
        <input className="form-group-input" value={nameOfFile} type="text" multiple onChange={handleFile} ></input>

        {excelFileError && (
          <div className="text-danger" style={{ color: "red" }}>
            {excelFileError}
          </div>
        )}

        <Button variant="contained" component="label">
          Upload
          <input onChange={handleFile} hidden multiple type="file" />
        </Button>

        <br></br>
        <br></br>
        <button type="button" className="upload-submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {/* <h5>your selected file: </h5> */}
      {/* <div className="tripUpload-viewer">
        {excelData === null && <h4>No file selected</h4>}
        {excelData !== null && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">file name</th>
                  <th scope="col">City</th>
                  <th scope="col">Country</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                  <th scope="col">Postcode</th>
                  <th scope="col">State</th>
                </tr>
              </thead>
              <tbody>
                <Data excelData={excelData} />
              </tbody>
            </table>
          </div>
        )}
      </div> */}
    </div>
  );
};
