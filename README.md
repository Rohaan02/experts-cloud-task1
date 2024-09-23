# Renaissance - Luxury Restaurant

### Figma File:
[Figma Design Link](https://www.figma.com/design/gWKLU0p2noVl76lCSL7ISV/Renaissance---Luxury-Restaurant-(Community)?node-id=1402-3553&node-type=canvas&t=pFAAQTDxUrql9ASh-0)

---

### Project Setup

This project was created using Create React App (CRA).

**Command to create the project:**
```bash
npx create-react-app experts-cloud-task1
```

**Run the project:**
```bash
npm start
```

---

### Responsiveness

*Tried to make the project responsive, but it still needs some changes.*

---

### Styling with Tailwind CSS

**Tailwind Setup:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Copy the following configuration in the `tailwind.config.js` file:
```js
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
```

Copy the following into the `src/index.css` file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Routing Setup

**Install React Router:**
```bash
npm install react-router-dom
```

Import `BrowserRouter` in the component where the routing is initialized, for example in `src/App.js`:
```js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
```

---

### Fonts

Multiple font families were used. The fonts were imported into the `index.css` file and defined in the `extend/fontFamily` section of `tailwind.config.js`.

---

### Database Setup

The project uses Microsoft SQL Server for the database connection, which is configured in the `server/index.js` file.

**SQL Queries:**

Create the `luxuryRestaurant` database and necessary tables:
```sql
CREATE DATABASE luxuryRestaurant;
USE luxuryRestaurant;

CREATE TABLE menu (
  itemNumber INT IDENTITY(1,1),
  itemName VARCHAR(35) PRIMARY KEY,
  itemDescription VARCHAR(100),
  itemPrice FLOAT
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
```

**Insert sample data into `menu` table:**
```sql
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
```



---

### Backend Setup

For connecting Microsoft SQL Server with React:

1. **Initialize Node.js project:**
   ```bash
   npm init -y
   ```

2. **Install necessary packages:**
   ```bash
   npm install express mssql cors body-parser
   ```

3. **Install `nodemon` for automatic server refresh:**
   ```bash
   npm install --save-dev nodemon
   ```

---

```