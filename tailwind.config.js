/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Generics
        "generics-default": "var(--generics-default-color)",
        "generics-text": "var(--generics-text-color)",
        "generics-placeholder": "var(--generics-placeholder-color)",
        "generics-border": "var(--generics-border-color)",

        // Context Primary
        "primary": "var(--context-primary-color)",
        "primary-bg": "var(--context-primary-background-color)",
        "primary-text": "var(--context-primary-text-color)",

        // Context Danger
        "danger": "var(--context-danger-color)",
        "danger-bg": "var(--context-danger-background-color)",
        "danger-text": "var(--context-danger-text-color)",

        // Context Success
        "success": "var(--context-success-color)",
        "success-bg": "var(--context-success-background-color)",
        "success-text": "var(--context-success-text-color)",

        // Context Warning
        "warning": "var(--context-warning-color)",
        "warning-bg": "var(--context-warning-background-color)",
        "warning-text": "var(--context-warning-text-color)",

        // Backgrounds
        "background-primary": "var(--context-background-primary-color)",
        "background-secondary": "var(--context-background-secondary-color)",
        "background-tertiary": "var(--context-background-tertiary-color)",
        "background-quaternary": "var(--context-background-quaternary-color)",
        "background-quinary": "var(--context-background-quinary-color)",
        "background-senary": "var(--context-background-senary-color)",

        // Shadows
        "shadow-primary": "var(--context-shadow-primary-color)",
        "shadow-secondary": "var(--context-shadow-secondary-color)",
        "shadow-tertiary": "var(--context-shadow-tertiary-color)",
        "shadow-quaternary": "var(--context-shadow-quaternary-color)",
        "shadow-quinary": "var(--context-shadow-quinary-color)",

        // Inverse
        "inverse-text": "var(--context-inverse-text-color)",
        "inverse-bg-primary": "var(--context-inverse-background-primary-color)",
        "inverse-bg-secondary": "var(--context-inverse-background-secondary-color)",
        "inverse-bg-tertiary": "var(--context-inverse-background-tertiary-color)",
        "inverse-border": "var(--context-inverse-border-color)",
      },
    },
  },
  plugins: [],
}

