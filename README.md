# chemical-compounds

# Aim 

server-side code requirements for chemical compounds web application.

# Overview

The application allows users to view a list of chemical compounds, see their details, and perform CRUD operations. The back end is built with ExpressJS and uses Sequelize as an ORM for MySQL, while the front end is developed using Angular.

# Setup

## Prerequisites

Install MySQL

Install DataGrip

### Connect MySQL in DataGrip:

open query console in dataGrip and run the following query:

### To Create Table:

CREATE TABLE `compound_infos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `description` longtext,
  `image_source` varchar(250) DEFAULT NULL,
  `info_source` varchar(250) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
)

this should create the necessary data table required to run the code on the local machine

### Import CSV:

Using DataGrip, import the provided CSV data into the Compounds table.


Clone the repository to your local machine.

Open the repository in Visual Studio Code.

Update DB Credentials in sequelize.js

### Initialize npm:

npm install

### Run the Application:

node index.js
