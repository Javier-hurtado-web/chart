# Financial Dashboard

A React-based financial dashboard that fetches and displays historical quarterly financial data for specified stock symbols. This project utilizes the Alpha Vantage API to retrieve financial information including quarterly net income, total revenue, and total shareholder equity, and presents the data in a visually appealing chart format.

## Features

- Search functionality for stock symbols.
- Visualization of quarterly financial data:
  - Net Income
  - Total Revenue
  - Total Shareholder Equity
- Responsive design for optimal viewing on desktop and mobile devices.
- Error handling for API request failures.
- Loading state indication.

## Getting Started

### Prerequisites

- Node.js (version 12.x or higher recommended)
- npm (usually comes with Node.js)

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/Javier-hurtado-web/chart.git
cd chart
```

Certainly! Here's a comprehensive README.md template tailored to your financial dashboard project. You can use this as a starting point and modify it as needed to fit the specifics of your project.

markdown
Copy code

# Financial Dashboard

A React-based financial dashboard that fetches and displays historical quarterly financial data for specified stock symbols. This project utilizes the Alpha Vantage API to retrieve financial information including quarterly net income, total revenue, and total shareholder equity, and presents the data in a visually appealing chart format.

## Features

- Search functionality for stock symbols.
- Visualization of quarterly financial data:
  - Net Income
  - Total Revenue
  - Total Shareholder Equity
- Responsive design for optimal viewing on desktop and mobile devices.
- Error handling for API request failures.
- Loading state indication.

## Getting Started

### Prerequisites

- Node.js (version 12.x or higher recommended)
- npm (usually comes with Node.js)

### Installation

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/chart.git
cd chart
```

2. **Install Dependencies**

```bash
npm install
```

3. **Environment Variables**
   Create a .env file in the root directory of your project.
   Add the following environment variable:

```bash
REACT_APP_ALPHA_VANTAGE_API_KEY=your_alpha_vantage_api_key_here
```

Replace your_alpha_vantage_api_key_here with your actual Alpha Vantage API key. You can obtain one by signing up at Alpha Vantage.

4. **Running the Application**

```bash
npm start
```

Runs the app in development mode. Open http://localhost:3000 to view it in the browser.
