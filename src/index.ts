import { firstQuestionData } from "./firstQuestion"
import { parseJSONtoCSV } from "./helpers/parseJSONtoCSV"
import { secondQuestionData } from "./secondQuestion"

const run = () => {
  parseJSONtoCSV(firstQuestionData, "./legislators-support-oppose-count.csv")
  parseJSONtoCSV(secondQuestionData, "./bills.csv")
}

run()