"use server";

import ExcelJS from "exceljs";
import { format } from "date-fns";
import fs from "fs";

export async function exportExcel(excelData: Array<Array<string>>) {
  try {
    // download excel file
    const nowDatetime = format(new Date(), " MM-dd HHmm");
    const fileName = "result_details" + nowDatetime + ".xlsx";
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet();
    excelData.forEach((data, rowIndex) => {
      worksheet.addRow(data);
    });
    await workbook.xlsx.writeFile(fileName);
    return {
      success: `Saved data to ${fileName}`,
    };
  } catch (error) {
    console.log(error);
  }
}
