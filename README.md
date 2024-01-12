### intro REACT SUMMIT PROJECT
This ReactJs application is meticulously crafted to deliver an exceptional user experience with a focus on efficiency, maintainability, and modern design principles. The following features and technologies have been strategically incorporated to ensure a robust and high-quality application.

### Pre requirements
- node v18.17.0

### Setup
- yarn install
- yarn start
note: Due to the utilization of the MockAPI (MSVW Package), testing is exclusively available in development mode. Please conduct testing using the "yarn start" command.
note: If there are delays during the setup process, consider removing the Cypress package.

### Setup Test
- yarn test:e2e

### Hot Features And Technalogy
- Webpack 5: base config project no CRA
- Typescript
- TAILWIND CSS for stracuture Project
- DaisyUi for component design
- Zustand for statementment
- ReactJS 18
- React Router V6
- Cypress E2E Test
- MSV For MOCK API

### Why we choose these ?
    - Webpack 5:
        Description: Efficient project configuration without Create React App (CRA), leveraging Webpack 5 for fine-tuned control.

    - TAILWIND CSS:
        Description: Project styling structured with TAILWIND CSS, offering utility-first principles for rapid and lightweight development.

    - DaisyUI:
        Description: Streamlined component design with DaisyUI, providing pre-designed, customizable components for a consistent UI.

    - Zustand:
        Description: Lightweight state management using Zustand for simplified state manipulation within the React app.

    - ReactJS 18:
        Description: Developed with ReactJS 18, incorporating features like concurrent rendering and automatic batching for enhanced user experience.

    - React Router V6:
        Description: Efficient client-side navigation achieved through React Router V6, offering improved capabilities and a declarative API.

    - Cypress E2E Test:
        Description: Robust end-to-end testing with Cypress, ensuring application reliability and providing a real browser environment.

    - MSV Mock API:
        Description: MSV used for creating a mock API, facilitating early testing and independent development between frontend and backend teams.

### E2E TESTS (cypress)
- check login page completly loadedpassed
- check login button reachable on mobile viewpassed
- check protected urlpassed
- check not define url return 404passed
- check validation on reigster pagepassed
- check validation on login pagepassed
- check user redirected after loginpassed
- check list of articles loaded completelypassed
- check dialog confirm remove shownpassed
- check open add new Article work truly