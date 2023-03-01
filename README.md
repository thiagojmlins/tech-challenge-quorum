# Quorum Technical Challenge

An application designed for a coding challenge at Quorum that handles .csv files for reading, writing and parsing data, to perform some requested tasks for the assignment, writing CSV files as the outpu

## Table of contents

1. [Getting started](#getting-started)
2. [Download and installation](#download-and-installation)
3. [Technical details](#technical-details)
4. [License](#license)

## Getting started

The following instructions will help you get a copy of this application up and running on your local machine. After that you will be able to run it with a single command and generate the necessary .csv files.

### Requirements

You'll need Node.js (preferrably the LTS version). You can download it using the link below:

- https://nodejs.org/en/download/

You'll also need the Yarn package manager to build the application and also run it. To download Yarn, check the link below:

- https://yarnpkg.com/getting-started/install

## Download and installation

Make sure you have Git installed on your machine so you can clone this project by running the following command:

````
git clone https://github.com/thiagojmlins/tech-challenge-quorum.git
````

Alternatively, if you're reading this README file after downloading the .zip file, open a terminal window inside the folder that the project is located on and run the following command to install the required packages:

```
yarn install
```
This command will install the required packages for this application:

- [papaparse](https://www.npmjs.com/package/papaparse)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [tsx](https://www.npmjs.com/package/tsx)
- [typescript](https://www.npmjs.com/package/typescript)

Once you've installed the required dependencies, you can build the application using:

```
yarn build
```
This will build the application and generate the required files on the `dist/` folder. After that run the following command to run the application and generate the output files:

````
yarn start
````
After that you can locate the two generated files on the project root folder: `bills.csv` and `legislators-support-oppose-count.csv`.

## Technical details
This application uses the papaparse package to properly parse and unparse the provided `.csv` files. I chose to use it because its simplicity generating the necessary data to do the required tasks. It also uses the builtin `fs` package from Node.js to read/write files.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.