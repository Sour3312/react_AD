import React from 'react'

export const Data = ({excelData}) => {
    return excelData.map((individualExcelData)=>(
        <tr >
            <td>{individualExcelData.file_name}</td>
            <td>{individualExcelData.city}</td>
            <td>{individualExcelData.country}</td>
            <td>{individualExcelData.latitude}</td>
            <td>{individualExcelData.longitude}</td>
            <td>{individualExcelData.altitude}</td>
            <td>{individualExcelData.state}</td>
        </tr>        
    ))
    }