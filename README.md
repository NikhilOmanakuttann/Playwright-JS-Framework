#  Playwright E-Commerce Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-1.40+-45ba4b?style=for-the-badge&logo=Playwright)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=github-actions)

##  Project Overview

End-to-end test automation built with Playwright and JavaScript, structured using Page Object Model. Tests run automatically on every push via Github actions CI/CD.


##  Tech Stack
* **Language:** JavaScript (Node.js)
* **Framework:** Playwright
* **Design Pattern:** Page Object Model (POM)
* **Reporting:** Playwright HTML Reports & Trace Viewer
* **CI/CD:** GitHub Actions

## Key Features
* **Page Object Model (POM):** Modular design separating selectors from test logic.
* **Data-Driven Testing:** Dynamic validation of multiple user personas (Standard, Locked-out, Problem User).
* **Auto-Waiting:** Eliminates flaky tests by leveraging Playwright's built-in mechanisms.
* **CI/CD Pipeline:** Automated execution on every push using GitHub Actions.
* **Trace Viewer:** Full "time-travel" debugging with DOM snapshots for failed tests.

##  How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/NikhilOmanakuttann/Playwright-JS-Framework.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run all tests:**
    ```bash
    npx playwright test
    ```
4.  **View the Report:**
    ```bash
    npx playwright show-report
    ```
