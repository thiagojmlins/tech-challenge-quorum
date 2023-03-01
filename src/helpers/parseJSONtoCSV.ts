import fs from 'fs'
import Papa from "papaparse"

export const parseJSONtoCSV = (data: any, pathname: string) => {
  const csvData = Papa.unparse(data, { header: true, delimiter: ",", newline: "\r\n" })
  fs.writeFile(pathname, csvData, 'utf-8', (error: any) => {
    if (error) {
      console.log(error)
    } else {
      console.log(`File was successfully generated!`)
    }
  })
}