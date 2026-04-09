# Staff Dashboard - React Version

A modern React-based Staff Dashboard for managing artists and sales.

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation

1. Navigate to the project directory
2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Project Structure

- `public/` - Static HTML file
- `src/` - React components and styles
  - `App.js` - Main application component
  - `index.css` - All CSS styles (single file)
  - `components/` - Reusable React components
    - `Header.js` - Dashboard header
    - `WelcomeSalesRow.js` - Welcome section and sales overview
    - `ArtistsSection.js` - Artists table
    - `RecentSales.js` - Recent sales list
- `images/` - Image assets (placeholder and artwork images)

## Features

- Artist management table with scrolling
- Sales overview dashboard
- Recent sales list with artwork previews
- Responsive design
- Hidden scrollbars for artists and recent sales sections
