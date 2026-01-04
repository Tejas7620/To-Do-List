# Aesthetic To-Do (Web)

Modern, minimal to-do list with real-time sync via Firebase Firestore. Built with React (Vite), TailwindCSS, Framer Motion, and Lucide icons.

## Features
- Add, edit, delete tasks
- Mark complete with smooth animations
- Search and filter (All / Active / Completed)
- Realtime sync using Firestore
- Clean, pastel aesthetic

## Tech
- React + Vite
- TailwindCSS
- Firebase Firestore
- Framer Motion
- Lucide Icons

## Setup
1. Install dependencies
   ```bash
   npm install
   ```
2. Create environment file
   - Copy `.env.example` to `.env.local`
   - Fill in values from your Firebase project settings (Project settings → General → Your apps → Config)
3. Start dev server
   ```bash
   npm run dev
   ```
4. Build for production
   ```bash
   npm run build && npm run preview
   ```

## Firebase Security Rules (basic)
You can start with open rules for development, then lock down later:
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /tasks/{docId} {
      allow read, write: if true; // dev only
    }
  }
}
```

## Project Structure
- `src/App.jsx` — App shell, sections, FAB
- `src/components/TaskForm.jsx` — Add/Edit modal
- `src/components/TaskItem.jsx` — Task card
- `src/components/SearchBar.jsx` — Search and filter
- `src/hooks/useTasks.js` — Firestore realtime hooks and CRUD
- `src/lib/firebase.js` — Firebase app + Firestore init
- `src/index.css` — Tailwind base styles

## Mobile (React Native + Expo)
This repo focuses on the web app first. We can scaffold the React Native client next (Expo), sharing Firestore structure for instant sync.

## License
MIT
