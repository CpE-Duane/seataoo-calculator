import React from 'react'
import { useState } from 'react';
import * as XLSX from 'xlsx';
import OrderDetailsTable from './OrderDetailsTable';
import Details from './Details';
import Header from './Header';

const FileUpload = () => {

     const [excelData, setExcelData] = useState(null);

     const handleFileSelect = (event) => {
          const file = event.target.files[0];

          if (file) {
               const reader = new FileReader();

               reader.onload = (e) => {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(sheet);

                    console.log("data", jsonData);
                    setExcelData(jsonData);
               };

               reader.readAsArrayBuffer(file);
          }
     };

     return (
          <>   <Header />
               <div className='container-fluid'>
                    <div className='col col-md-8 col-lg-6 my-3 mx-auto'>
                         <label htmlFor="file-upload" className='text-dark'>Upload excel file</label> <span className='text-danger'>*</span>
                         <input
                              type="file"
                              className='form-control border-dark mt-2'
                              onChange={handleFileSelect}
                         />
                    </div>
                    {
                         excelData
                         &&
                         <>
                              <Details excelData={excelData} />
                              <OrderDetailsTable excelData={excelData} />
                         </>
                    }
               </div>
          </>
     )
}

export default FileUpload