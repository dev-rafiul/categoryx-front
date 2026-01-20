📌 Project Overview

The application demonstrates routing, authentication, and API integration in Next.js. Users can view items publicly, see item details, and authenticated users can add new items through a protected page. Authentication is handled using cookies with hardcoded credentials.


✨ Features

Landing page with 7 sections (excluding Navbar & Footer)

Navbar with navigation to Login and Items page

Mock authentication using cookies

Public item listing page

Item details page

Protected add-item page

Express.js API for fetching and storing items

Toast notification on successful item creation


| Route         | Description  | Access    |
| ------------- | ------------ | --------- |
| `/`           | Landing page | Public    |
| `/login`      | Login page   | Public    |
| `/items`      | Item list    | Public    |
| `/items/[id]` | Item details | Public    |
| `/add-item`   | Add new item | Protected |



🛠️ Technologies Used
Frontend

Next.js 15/16 (App Router)

React

Tailwind CSS

Cookies for authentication

React Hot Toast

Backend

Node.js

Express.js

JSON-based data storage