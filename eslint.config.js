import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  // Mengabaikan folder 'dist' agar tidak diperiksa oleh ESLint (biasanya berisi hasil build)
  { ignores: ['dist'] },
  {
    // Konfigurasi ini berlaku untuk semua file dengan ekstensi .js dan .jsx
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      // Menentukan versi ECMAScript yang digunakan (2020)
      ecmaVersion: 2020,
      // Mendefinisikan variabel global yang tersedia (seperti 'window', 'document' di browser)
      globals: globals.browser,
      parserOptions: {
        // Mengizinkan fitur ECMAScript terbaru
        ecmaVersion: 'latest',
        // Mengaktifkan dukungan untuk JSX (React)
        ecmaFeatures: { jsx: true },
        // Menentukan tipe source code sebagai module (ES Modules)
        sourceType: 'module',
      },
    },
    // Pengaturan khusus untuk plugin React, mendeteksi versi React secara otomatis (diset ke 18.3 disini)
    settings: { react: { version: '18.3' } },
    // Mendaftarkan plugin yang akan digunakan
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    // Aturan-aturan (rules) linting yang diterapkan
    rules: {
      // Menggunakan aturan rekomendasi dasar JavaScript dari ESLint
      ...js.configs.recommended.rules,
      // Menggunakan aturan rekomendasi untuk React
      ...react.configs.recommended.rules,
      // Menggunakan aturan untuk JSX Runtime (React 17+)
      ...react.configs['jsx-runtime'].rules,
      // Menggunakan aturan rekomendasi untuk React Hooks
      ...reactHooks.configs.recommended.rules,
      // Menonaktifkan aturan keamanan untuk target="_blank" pada link (opsional)
      'react/jsx-no-target-blank': 'off',
      // Aturan untuk React Refresh (Hot Module Replacement)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
