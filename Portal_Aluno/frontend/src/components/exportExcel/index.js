import React from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const ExportExcel = ({
  dataSet,
  columns = [],
  data = [],
  buttonRender,
  name = "",
}) => {
  return (
    <ExcelFile filename={`Relatorio_${name}`} element={buttonRender}>
      <ExcelSheet dataSet={dataSet} name={`Relatorio_${name}`} />
    </ExcelFile>
  );
};

export default ExportExcel;
