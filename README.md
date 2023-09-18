COVID-19 API

COVID-19 API
============

Welcome to the COVID-19 API, a public API that provides the latest COVID-19 information for various countries. This API is built using Nest.js and is designed to give you easy access to COVID-19 data for analysis or integration into your applications.

Getting Started
---------------

### Prerequisites

*   Node.js installed on your system
*   Git (optional but recommended)

### Installation

1.  Clone this repository (if you haven't already):

        git clone https://github.com/martin-nazaryan/covid-19-api.git

2.  Navigate to the project directory:

        cd covid-19-api

3.  Create a copy of the environment variables template:

        cp .env.example .env.local

4.  Open the `.env.local` file and define the required environment variables as specified in the template.

### Running the API

To start the API, run the following commands:

    # Install dependencies
    yarn
    
    # Start the development server
    yarn run start:dev


The API will be available at `http://localhost:3000` by default. You can access the API endpoints from there.

API Endpoints
-------------

### Get All Countries Info

*   **Endpoint:** /countries
*   **Method:** GET
*   **Description:** Get information about all countries affected by COVID-19.

### Get Specific Country Info

*   **Endpoint:** /countries/:country
*   **Method:** GET
*   **Description:** Get information about a specific country affected by COVID-19.

### Get Cases, Today's Cases, Deaths, and Today's Deaths

*   **Endpoint:** /info
*   **Method:** GET
*   **Description:** Get global COVID-19 cases, today's cases, deaths, and today's deaths.
