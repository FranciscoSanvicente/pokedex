import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#f0f0f0', // Reemplaza este valor por el color que quieras para el fondo
        'on-surface': '#333333', // Reemplaza este por el color del texto sobre el fondo
        'primary-container': '#005f73', // Color de fondo cuando está enfocado
        'on-primary-container': '#ffffff', // Color de texto cuando está enfocado
        'primary-80': '#0a9396', // Color de fondo cuando está seleccionado
        'primary-10': '#e9d8a6', // Color de texto cuando está seleccionado
        'outline': '#5f0f40', // Color del borde
        'primary': '#e63946', // Color del borde al pasar el ratón o al estar enfocado
        'secondary': '#94d2bd', // Fondo de indicadores
        'on-secondary': '#002855', // Texto de indicadores
      },
      borderRadius: {
        'border-radius-base': '0.375rem', // 6px
      },
      spacing: {
        '6': '1.5rem',
      }

    },
  },
  plugins: [],
};
export default config;
