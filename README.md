# Open Weather Test Automation API Test 

This project automates API testing for the **Open Weather** application, utilizing **Mocha**, **Chai**, **Supertest**, and **AJV** for validation. Follow the steps below to get started and run tests efficiently.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js & NPM**
   - Download and install Node.js from [Node.js Official Website](https://nodejs.org/en/download)
   - Verify installation by checking the versions:
     ```bash
     node -v
     npm -v
     ```

2. **Visual Studio Code (VS Code)** 
   - Download and install from [Visual Studio Code Official Website](https://code.visualstudio.com/)

## Project Setup

1. **Clone the Repository**
   - Clone the project repository to your local machine:
     ```bash
     git clone <repository-url>
     cd <project-directory>
     ```

2. **Install Dependencies**
   - Open your terminal inside the project directory and install the required packages:
     ```bash
     npm install
     ```
   - This command installs Mocha (test runner), Chai (assertion library), Supertest (HTTP testing), and AJV (JSON schema validation).

   If specific modules are needed individually, you can install them with:
   ```bash
   npm install mocha chai supertest ajv --save-dev
   ```

## Running the Tests

1. **Run All Test Cases**
   - To execute all test cases, use the following command:
     ```bash
     npm test
     ```

2. **Run Specific Test Cases**
   - If you want to run an individual test case, modify the test file by adding `.only` to the desired `it` block:
     ```js
     it.only("Verify user can view the Dashboard as Admin", async () => { ... });
     ```
   - Then, run the test using the same command:
     ```bash
     npm test
     ```

## Test Reporting

1. After running the tests, a **mochawesome-report** directory will be generated automatically.
   
2. Inside the directory, open `mochawesome.html` in any browser to view the detailed test report.

---

### Additional Notes

- **Configuration**: The project uses a configuration file (`config.js`) to store API base URLs, API keys, and other constants for easy management and reuse across different environments.
- **Test Structure**: Test cases are organized under the `test/` directory, using descriptive file names for easy identification of different API endpoints or features.
- **JSON Schema Validation**: The project validates API responses against predefined JSON schemas to ensure data consistency and correctness.

For any further details, feel free to explore the individual files and code comments.

Happy Testing! 🎉
