# Fifteen Puzzle Game (П’ятнашки)

Web-based implementation of the classic **15-puzzle game** built with React.  
The goal of the game is to arrange tiles in ascending order using the empty space.

---

## Tech Stack
- React
- JavaScript
- Vite
- React Router v6
- Zustand
- styled-components
- Storybook (UI component documentation)
- JSDoc (generated code documentation)

---

## Installation

Install dependencies:

```bash
npm install
```

---
## Run locally

Start the development server:

```bash
npm run dev
```
The application will be available at http://localhost:5173.

## Storybook

Run Storybook for component documentation:

```bash
npm run storybook
```
Storybook is used to document and demonstrate reusable UI components.

---
## Features

- Classic 15-puzzle gameplay

- Multiple difficulty levels (3×3, 4×4, 5×5)

- Beginner mode with guaranteed solvable configurations

- Game timer and move counter

- Modal window on game completion

- Results page with full game history

- Persistent settings and results using localStorage

- Fully component-oriented architecture
---
## Architecture Overview

The application follows a clean separation of concerns:

- Business logic is encapsulated in custom hooks:
  - useGameLogic — tile movement, win detection, game state management
  - useTimer — game time tracking

- UI components are stateless and reusable

- Global state (settings and results) is managed using Zustand

- Routing is implemented with React Router v6
---
## Documentation

- UI components are documented using **Storybook**.

Run:
```bash
npm run storybook
```

- Generated Documentation (JSDoc)
Run:
```bash
npm run docs
```

- A local documentation walkthrough is provided as a video file (video-demo.mp4)
---
## License

This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for details.

---
## GDPR & Cookies

The application includes a cookie consent popup implemented in accordance with **GDPR** requirements.
Users can explicitly accept or decline cookies before any non-essential data is stored.

---
## Legal & Privacy

- [Privacy Policy & User Instructions](./PRIVACY_POLICY.md)

---
## Author

Andriy Symon

