import { parseCSVtoJSON } from "./helpers/parseCSVtoJSON";

const parsedLegislatorsObject = parseCSVtoJSON("./assets/legislators.csv");
const parsedVoteResultsObject = parseCSVtoJSON("./assets/vote_results.csv");

export const firstQuestionData =  parsedLegislatorsObject.map((legislator: any) => {
  let supportedVotesByLegislator = 0
  let opposedVotesByLegislator = 0

  parsedVoteResultsObject.map((vote: any) => {
    if (vote.legislator_id === legislator.id) {
      vote.vote_type === '1' ? supportedVotesByLegislator += 1 : opposedVotesByLegislator += 1
    }
  })

  return {
    id: legislator.id,
    name: legislator.name,
    num_supported_bills: supportedVotesByLegislator,
    num_opposed_bills: opposedVotesByLegislator
  }
})