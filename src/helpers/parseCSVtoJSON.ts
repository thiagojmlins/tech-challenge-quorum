import fs from "fs"
import Papa from "papaparse"

export const parseCSVtoJSON = (pathname: string) => {
  const csvFile = fs.readFileSync(pathname, { encoding: "utf-8" })
  const parsedCSV = Papa.parse(csvFile, { header: true, delimiter: ',', skipEmptyLines: true })
  return parsedCSV.data
}