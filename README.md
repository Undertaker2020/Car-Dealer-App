
# Car Dealer App

## Overview
**Car Dealer App** is a Next.js web application that enables users to search for cars by make and model year. The application integrates dynamic routing and custom components to enhance the user experience, using Tailwind CSS for styling.

## Features

### 1. **Home Page** (app/page.js)
- **Search by Make and Model Year**: Users can select a car make and model year through dropdown menus. Make data is fetched from an external API (specified in the `NEXT_PUBLIC_MAKES_URL` environment variable).
- **Dropdown Component**: Dynamically displays the list of available makes and years.
- **Search Button**: Once a make and year are selected, the "Show me Cars" button activates, redirecting users to the results page based on the chosen filters.

### 2. **Results Page** (app/result/[makeId]/[year]/page.js)
- **Dynamic Routing**: Uses the `/result/[makeId]/[year]` route, generated based on the user's selected make and model year.
- **ListMake Component**: Loads and displays car models based on the selected `makeId` and `year` parameters.
- **Loading Animation**: Displays "Loading..." text while data is being fetched.
- **Back Button**: Allows users to return to the home page for a new search.

### 3. **Layout and Metadata** (app/layout.js)
- **Global Styles**: Includes `globals.css` for consistent styling across the app.
- **Page Metadata**: Sets the app's title and description for SEO.

### 4. **Scripts and Configuration** (package.json)
- The app includes standard scripts for development and production:
    - `npm run dev`: Starts the development server.
    - `npm run build`: Compiles the app for production.
    - `npm start`: Starts the compiled production app.

- **Dependencies**:
    - **React** and **Next.js** for dynamic components and routing.
    - **Tailwind CSS** for styling.
    - **Prettier** and **ESLint** for maintaining code styling rules.

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Undertaker2020/Car-Dealer-App.git
   cd car-dealer-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
    - Create a `.env.local` file and add the API URL to fetch car makes:
      ```
      NEXT_PUBLIC_MAKES_URL=<Your API URL>
      ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Technologies Used
- **Next.js**: Framework for server-rendered applications and routing.
- **React**: Library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for quick styling.

