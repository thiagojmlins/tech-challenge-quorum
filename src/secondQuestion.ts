import { parseCSVtoJSON } from "./helpers/parseCSVtoJSON";

const parsedLegislatorsObject = parseCSVtoJSON("./assets/legislators.csv");
const parsedVoteResultsObject = parseCSVtoJSON("./assets/vote_results.csv");
const parsedBillsObject = parseCSVtoJSON("./assets/bills.csv")
const parsedVotesObject = parseCSVtoJSON("./assets/votes.csv")

export const secondQuestionData = parsedBillsObject.map((bill: any) => {
  let billSupportersCount = 0
  let billOpposersCount = 0
  let billPrimarySponsor = 'Unknown'

  parsedVotesObject.map((vote: any) => {
    if (vote.bill_id === bill.id) {
      parsedVoteResultsObject.map((voteResult: any) => {
        if (vote.id === voteResult.vote_id) {
          voteResult.vote_type === 1 ? billSupportersCount += 1 : billOpposersCount += 1
        }  
      })
    } 
  })

  parsedLegislatorsObject.map((legislator: any) => {
    if (legislator.id === bill.sponsor_id) {
      billPrimarySponsor = legislator.name
    }
  })

  return {
    id: bill.id,
    title: bill.title,
    supporter_count: billSupportersCount,
    opposer_count: billOpposersCount,
    primary_sponsor: billPrimarySponsor
  }
})