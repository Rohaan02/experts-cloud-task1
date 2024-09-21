Figma File:-
    https://www.figma.com/design/gWKLU0p2noVl76lCSL7ISV/Renaissance---Luxury-Restaurant-(Community)?node-id=1402-3553&node-type=canvas&t=pFAAQTDxUrql9ASh-0


This project is created with the (CRA way)
    command: "npx create-react-app experts-cloud-task1"

Run With:
    command: "npm start"


----------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------
-------------------------------------Tried to make responsive it need some changes------------------------------------------


Did styling with TAILWIND
    Setup:-
        commands:   "npm install -D tailwindcss postcss autoprefixer"
                    "npx tailwindcss init -p"

Copy this in the "tailwind.config.js" file:-
    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

Copy this in the "src/index.css" file:-
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


----------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------


Routing Setup:-
    command: "npm install react-router-dom"

    Importing "BrowserRouter" in the component where the Routing is initialized in my case it is "src/App.js" :
        import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


----------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------


Used Multiple "font family" 
    imported those family link in the "index.css" file.
    and describe them in "tailwind.config.js" file in "extend/fontFamily"
    

----------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------


Used Microsoft SQL Server for database
    connection in "server/.env" file


Sql Queries:-
create database luxuryRestaurant;
use luxuryRestaurant;

create table menu(
    itemNumber int IDENTITY(1,1),
    itemName varchar(35) primary key,
    itemDescription varchar(100),
    itemPrice float,
);

CREATE TABLE reserveTable (
    reservationID INT PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(50),
    contactNumber VARCHAR(15),
    tableNumber INT,
    seats INT,
    reservanceDate DATE,
    itemName VARCHAR(35),
    FOREIGN KEY (itemName) REFERENCES menu(itemName)
);

INSERT INTO menu (itemName, itemDescription, itemPrice) VALUES
('Salmon Nigiri', 'Salmon, sushi rice, sushi vinegar', 32.00),
('Hamachi', 'Hamachi, sushi rice, nori', 34.29),
('Maguro', 'Maguro, sushi rice, nori, pickled ginger', 37.00),
('Unagi', 'Unagi, sushi rice, nori, unagi sauce', 41.99),
('Ebi', 'Ebi, sushi rice, nori, pickled ginger', 56.00),
('California Roll', 'Nori, sushi rice, imitation crab, cucumber, avocado', 6.99),
('Spicy Tuna Roll', 'Nori, sushi rice, tuna, spicy sauce, sesame seeds', 7.49),
('Dragon Roll', 'Nori, sushi rice, avocado, unagi, unagi sauce', 9.00),
('Philadelphia Roll', 'Nori, sushi rice, smoked salmon, cream cheese', 10.99),
('Spider Roll', 'Nori, sushi rice, soft-shell crab, avocado, spicy mayo', 11.49);

select * from menu order by itemNumber asc;

select * from reserveTable;


----------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------


For Microsoft SQL Server Connection with React:-
command in server for db connection:
    "npm init -y"
    "npm install express mssql cors body-parser"
    "npm install --save-dev nodemon" (for automatically refresh)


----------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------

