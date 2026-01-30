/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // إضافة الألوان الزرقاء المستخدمة في النافبار
        "cyber-blue": "#00BFFF",
        "cyber-blue-dark": "#0080FF",
        "cyber-blue-light": "#00BFFF20",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        // إضافة ظلال إضافية للتأثيرات السيبرانية
        "cyber-glow": "0 0 20px rgba(0, 191, 255, 0.5)",
        "cyber-glow-lg": "0 0 40px rgba(0, 191, 255, 0.6)",
        "nav-glow": "0 8px 32px rgba(0, 191, 255, 0.1)",
      },
      screens: {
        xs: "450px",
        // يمكن إضافة أحجام شاشات إضافية إذا لزم الأمر
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        // إضافة تدرجات لونية
        "cyber-gradient": "linear-gradient(to right, #00BFFF, #0080FF)",
        "cyber-gradient-light": "linear-gradient(to right, #00BFFF20, transparent)",
      },
      // إضافة قيم z-index مخصصة
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        // إضافة قيم أعلى للنافبار والعناصر المهمة
        '1000': '1000',
        '2000': '2000',
        '3000': '3000',
        '4000': '4000',
        '5000': '5000',
        '9999': '9999',
        '10000': '10000',
      },
      // إضافة مؤثرات إضافية
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 191, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 191, 255, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      // إضافة قيم border-radius إضافية
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};