/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        estrategia: '#ffd1a4',
        identidad: '#9bdadd',
        redes: '#ffccf4',
        sitios: '#C1A7FF',
        contenido: '#B7F427',
        diseño: '#edffab',
      },
    },
  },
  plugins: [],
}
