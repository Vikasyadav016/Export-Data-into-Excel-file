import React from "react";
import { downloadExcel } from "react-export-table-to-excel";

const ExportDataIntoExcel = () => {

    // this is the dummy array for testing 
    //you can replace by yur origial array
  const studentDetails = [
    {
      name: "Vikas kumar",
      Age: 25,
      gender: "Male",
      Mobile: "997686535676",
      address: "Bheldi",
    },
    {
      name: "Vikas kumar",
      Age: 25,
      gender: "Male",
      Mobile: "997686535676",
      address: "Bheldi",
    },
    {
      name: "Vikas kumar",
      Age: 25,
      gender: "Male",
      Mobile: "997686535676",
      address: "Bheldi",
    },
    {
      name: "Vikas kumar",
      Age: 25,
      gender: "Male",
      Mobile: "997686535676",
      address: "Bheldi",
    },
  ];

  //headers which wiil be column name of excel sheet
  const header = ["sl.no", "Name", "Age", "Gender", "Mobile No", "Address"];


  //map all data into an array and assigna to prameters of download function
  const recordForBody = studentDetails?.map((body, index) => [
    index+1,
    body?.name,
    body?.Age,
    body?.gender,
    body?.Mobile,
    body?.address
  ])

  //a function to handle on download click this function need two parameters
  //first parameters is header
  //header means which column heading should be in excel table
  //second parameter is body
  //body means column value

  function handleDownloadExcel() {
    if (studentDetails) {
      downloadExcel({
        fileName: `Student Details`,//name of excel file
        sheet: "Student Details",//name of sheet in downloaded excel file
        tablePayload: {
          header,
          // accept two different data structures
          body: recordForBody,
        },
      });
    } else {
      alert("No Clubs Found");
    }
  }

  return (
    <div>
      ExportDataIntoExcel
      <button onClick={handleDownloadExcel}>Export Data Into Excel</button>
    </div>
  );
};

export default ExportDataIntoExcel;
