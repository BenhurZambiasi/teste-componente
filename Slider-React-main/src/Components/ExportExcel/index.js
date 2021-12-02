import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

export default function ExportExcel({
  columns = [],
  data = [],
  buttonRender,
  name = "",
}) {
  const dataSet = [
    {
      columns: columns.map((col) => [
        {
          title: col.title,
        },
      ]),
      data: data.map((item) => {
        return columns.map((field) => [
          {
            value: item[field],
          },
        ]);
      }),
    },
  ];

  return (
    <ExcelFile filename={name} element={buttonRender}>
      <ExcelSheet dataSet={dataSet} name={name} />
    </ExcelFile>
  );
}
