import ExcelJS from "exceljs";
import React from "react";

export default function Home() {
  const [workbook] = React.useState(() => new ExcelJS.Workbook());
  return <div>Workbook is of type {typeof workbook}</div>;
}
