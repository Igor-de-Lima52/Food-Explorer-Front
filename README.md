# 🍽️ Food Explorer Front End

## 📖 Project description

**Food Explorer Front End** is a web interface from the Food Explorer project. This frontend interacts with the project backend to provide a dish management platform for a restaurant. Users can view available dishes, while admins have the capacity to add, edit, and remove dishes.

## 🛠️ Technologies used

The project's frontend was developed using the following technologies and libraries:


- **Vite**: Rapid build tool for React development.
- **React**: JavaScript library for building user interfaces. 
- **React DOM**: Library for DOM manipulation with React. 
- **React Router DOM**: Route management in React. 
- **Styled-components**: Library for styling components with CSS-in-JS. 
- **Axios**: HTTP client to make requests to the backend. 
- **Splide**: Library for creating carrousel and sliders. 
- **Splidejs/react-splide**: React version of Splide for integration with react components. 
- **React Icons**: Library for using icons in the project. 

## ⚙️ System requirements

To run the project's frontend, you will need:

- **Node.js** (version 14 or higher)
- **npm** (Node.js package manager)

> **Note**: Make sure you have Node.js and npm installed and configured correctly in your development environment.

## 🚀 Installation

To set up the development environment, follow these steps:


1. Clone the repository:

```bash
git clone https://github.com/Igor-de-Lima52/food-explorer-frontend.git
```
2. Navigate to the project directory
```bash
cd food-explorer-frontend
```
3. Install the project dependencies:
```bash
npm install
```

## ▶️ Execution

To start the server development, use the command:

```bash
npm run dev
```

## 📂 Directory structure

The directory structure is organized as follows:

```bash
/src
  /assets         # Image files, icons and others static assets
  /components     # Reusable application components
  /hooks          # Custom Hooks to reusable logic
  /pages          # Main pages of the application
  /routes         # React Router route definition
  /services       # Service configuration and API calls
  /styles         # Global styles and themes
  /utils          # Utility functions
  main.jsx        # Application entry main file
```

## Main features

The project has the following pages and features:

- **Home**: main page with list of dishes.
- **Details**: details page for a specific dish.
- **Admin(Add and edit dishes)**: Additional functionality for administrators to create and edit dishes.
- **SignIn and SignOut**: Pages for user and administrator login and logout.

## Integration with Backend

The frontend integrates with the backend using Axios to make HTTP requests.

## Deploy

The project is ready to be deployed to a production environment. To generate the static production files, use:

```bash
npm run build
```

> **Note**: Make sure all environment variables and configurations are correctly set before deploying.
