package com.wellsfargo.excelservice.util;

import java.io.InputStream;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import com.wellsfargo.excelservice.models.StockPrice;

public class ExcelParser {

	static String SHEET="Sheet1";
	public static List<StockPrice> getStockPricesList(InputStream inputStream) {
		try {
			Workbook workbook = new XSSFWorkbook(inputStream);

			Sheet sheet = workbook.getSheet(SHEET);
			Iterator<Row> rows = sheet.iterator();

			List<StockPrice> spList = new ArrayList<StockPrice>();

			int rowNumber = 0;
			while (rows.hasNext()) {
				Row currentRow = rows.next();

				// skip header
				if (rowNumber == 0) {
					rowNumber++;
					continue;
				}
				CreationHelper createHelper = workbook.getCreationHelper();
				CellStyle cellStyle = workbook.createCellStyle();
				cellStyle.setDataFormat(createHelper.createDataFormat().getFormat("d-m-yy"));

				Iterator<Cell> cellsInRow = currentRow.iterator();

				StockPrice sp = new StockPrice();

				int cellIdx = 0;
				while (cellsInRow.hasNext()) {
					Cell currentCell = cellsInRow.next();
					DataFormatter df = new DataFormatter();
					String value = df.formatCellValue(currentCell);
					value = value.trim();

					switch (cellIdx) {
					case 0:
						sp.setCompanyCode(value);
						break;

					case 1:
						sp.setSeName(value);
						break;

					case 2:
						sp.setCurrentPrice(Double.parseDouble(value));
						break;

					case 3:
						sp.setDate(Timestamp.valueOf(value));
						break;
					default:
						break;
					}
					cellIdx++;
				}
				spList.add(sp);
			}
			workbook.close();
			return spList;
		} catch (Exception e) {
			throw new RuntimeException("Failed to parse Excel file:"  +e.getMessage());
		}
	}

	public static boolean isExcelFile(MultipartFile file) {
		
		if("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet".equals(file.getContentType())) {
			return true;
		}
		return false;
	}

}
