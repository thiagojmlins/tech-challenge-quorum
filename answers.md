# QUESTIONS

## 1. Discuss your solution’s time complexity. What tradeoffs did you make?

For both solutions, for keeping a simple implementation, I chose to use an approach to traverse every entry for the generated data structures, and do the proper operations. Since map() has a time complexity of O(n), we're using two nested map() calls on the first question and four on the second one. 
 
If the time was not a constraint, I could add some test coverage for the parse methods, and do some more refactoring on the code (perhaps defining the corresponding types, since I've used Typescript to create this solution, and also use the array loops for gaining more performance). I chose to use [Papa Parse](https://www.papaparse.com/) to proper render the CSV files, and thus making the process to extract the information from these files simpler.

## 2. How would you change your solution to account for future columns that might be requested, such as “Bill Voted On Date” or “Co-Sponsors”?

Since I chose to use Papa Parse to properly read and transform the CSV files into JSON objects for this case, if we needed to add extra columns to the CSV files, the `parseCSVtoJSON()` method would render these as well. And that would be used to create the output files, when needed.

## 3. How would you change your solution if instead of receiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?

If this list was an array of JSON objects containing the required information (using key-value pairs), using the `parseJSONtoCSV()` method would be an approach for achieving that result.

## 4. How long did you spend working on the assignment?

Around three to four hours. I've spent some extra time doing some refactoring and answering the questions as well as documenting the entire process.