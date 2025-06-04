# React Hooks PoC

## 1  Introduction  
For our Framework Design course I chose to build a small React-based proof-of-concept (PoC) application.  
The goal is to spotlight React’s Hooks in a single, compact demo that is easy to inspect.

---

## 2  What the App Does  

| Feature                    | Key&nbsp;Hook(s)                                         | Behaviour |
|----------------------------|----------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **Counter + Title**        | `useState`, `useEffect`                                  | Increment / decrement buttons update the number and the browser-tab title.                                                    |
| **Local-storage Counter**  | custom `useLocalStorage` <br>(`useState` + `useEffect`)  | Counter value survives full browser reloads.                                                                                  |
| **Visibility Toggle**      | custom `useToggle` (`useState` wrapper)                  | Button shows or hides a message via a reusable boolean-state hook.                                                            |
| **Dark / Light Theme**     | `createContext`, `useContext`, `useReducer`, `useEffect` | Global colour scheme stored in context and persisted to `localStorage`; switching flips a `data-theme` attribute on `<body>`. |
| **Stopwatch**              | `useRef`, `useImperativeHandle`, `forwardRef`            | Ticks every second; parent component can imperatively reset it.                                                               |
| **Fibonacci**              | `useMemo`, `useCallback`                                 | Expensive `fib(n)` is memoised; only recomputes when n changes.                                                               |
| **Auto-resizing Textarea** | `useLayoutEffect`, `useRef`                              | Textarea grows automatically with its content.                                                                                |

---

## 3  Design Walkthrough  
* A single white card is centred on a blue-grey gradient background.    
* Dark-mode simply swaps CSS custom properties via a `data-theme` attribute on `<body>`.  
* Each demo is isolated in its own component so you can open any file and focus on one concept at a time.

---

## 4  Folder Structure
src/
  components/
    AutoResizeTextarea.jsx
    HeavyCalc.jsx
    Stopwatch.jsx
    ThemeContext.jsx
    ThemeToggle.jsx
  hooks/
    useLocalStorage.js
    useToggle.js
  App.jsx
  App.css
  index.js

---

## 5  Creation Process – Step by Step
	1.	Scaffold the project with npx create-react-app; remove CRA boilerplate.
	2.	Implement Counter using useState; sync the page title via useEffect.
	3.	Add useToggle hook and a visibility-toggle button.
	4.	Create ThemeContext with createContext + useReducer; persist theme in localStorage.
	5.	Build Stopwatch using useRef; expose a reset() method through useImperativeHandle.
	6.	Implement Fibonacci calculator; wrap heavy computation in useMemo, handlers in useCallback.
	7.	Add Auto-resizing Textarea that measures scrollHeight inside useLayoutEffect.
	8.	Extract useLocalStorage hook and replace plain useState in the counter to persist state.
	9.	Style everything in one App.css, relying on CSS variables for theme switching.

---

## 6  Installation & Running

Prerequisites
	•	Node.js ≥ 16
	•	npm ≥ 8 (bundled with Node)
	•	Git

 bash:
# 1  Clone the repository
git clone https://github.com/<your-user>/my-react-hooks-poc.git
cd my-react-hooks-poc

# 2  Install dependencies
npm install

# 3  Start the development server
npm start            # opens http://localhost:3000 with hot-reload

# 4  (Optional) Build a production bundle
npm run build        # outputs static files in /build
