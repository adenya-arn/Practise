# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Create a simple React app where the user can toggle the interface language between English and Spanish using Context.
📝 Requirements

    ✅ Create a LanguageContext.js file to manage the current language ("en" or "es").

    ✅ In App.jsx, use the LanguageProvider to wrap your app.

    ✅ Add a component called LanguageToggle.jsx with a button to switch languages.

    ✅ Add a component called Greeting.jsx that displays a greeting depending on the current language.

Language Greetings:
Language Greeting
en Hello!
es ¡Hola!
Expected Flow:

<App>
  <LanguageToggle />
  <Greeting />  // Will show "Hello!" or "¡Hola!" depending on the current language
</App>

💡 Task: User Profile Theme Switcher

Objective: Build a small app where a user can view their name and toggle between light and dark themes. The theme should apply across both the name display and the button.
✅ Requirements:

    App Layout

        Title: "User Profile Theme"

        Components:

            UserProfile – displays user's name

            ThemeToggle – a button to switch theme

            ThemeStatus – shows current theme (light or dark)

    Use Context

        Create a ThemeContext that holds theme and setTheme

        Use useContext() in each component that needs the theme

    Style dynamically

        Add a class or inline style that changes background or text color depending on the theme

        Example: light → white bg, black text; dark → black bg, white text

    Bonus (if you're up for it):

        Add a second context: UserContext with name ("Arnold") and a placeholder avatar

        Pass user data from context instead of hardcoding
