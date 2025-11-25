/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Фирменные цвета Delever из гайдлайна
        brand: {
          lightBlue: '#E8FBFF',      // Светло-голубой
          lightTeal: '#CBE1DA',      // Светло-зеленовато-голубой
          lightBeige: '#EEEADF',     // Светло-бежевый
          darkBlue: '#002A47',       // Темно-синий (основной)
          black: '#000000',          // Черный для текста
          // Градиент логотипа
          gradientStart: '#afdbd9',  // Начало градиента
          gradientEnd: '#f3e9dd',    // Конец градиента
        },
        // Обновленная primary палитра на основе бренд-цветов
        primary: {
          50: '#E8FBFF',
          100: '#CBE1DA',
          200: '#EEEADF',
          300: '#afdbd9',
          400: '#7db8b5',
          500: '#002A47',
          600: '#00223a',
          700: '#001a2d',
          800: '#001220',
          900: '#000a13',
        },
      },
      fontFamily: {
        sans: ['Aeronic Pro', 'system-ui', '-apple-system', 'sans-serif'],
        brand: ['Aeronic Pro', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #afdbd9 0%, #f3e9dd 100%)',
        'gradient-logo': 'linear-gradient(180deg, #afdbd9 0%, #f3e9dd 100%)',
      },
    },
  },
  plugins: [],
}

