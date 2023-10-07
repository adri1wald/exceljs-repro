import type * as ExcelJS from "exceljs";
import { useEffect, useState } from "react";

export default function Home() {
  const [workbook, setWorkbook] = useState<ExcelJS.Workbook | undefined>(undefined);
  useEffect(() => {
    import("exceljs").then((ExcelJS) => {
      setWorkbook(new ExcelJS.Workbook());
    });
  }, []);
  return <div>Workbook is of type {typeof workbook}</div>;
}
