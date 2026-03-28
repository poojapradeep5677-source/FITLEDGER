# FitLedger Implementation Plan

## Goal Description
Build FitLedger, a professional web application functioning entirely on the front-end (HTML, CSS, JS no backend). It expands the "NutriTrack" concept with an extensive South Indian, Kerala, and Biriyani food database. It features a green/white theme, a fitness dashboard UI, card-based layout, macro tracking, smart search, AI image matching simulation, fallback logic, activity/water tracking, and data persistence using LocalStorage.

## Proposed Changes

### UI & Aesthetics
- **Color Palette:** Clean modern green (primary) and white (backgrounds), with soft grey accents and shadows.
- **Layout:** Mobile-first card-based design with a bottom navigation bar (`🏠 Home`, `🍽 Meals`, `📊 Summary`, `🎯 Goals`, `📈 Progress`).
- **Profile:** Top-right profile section with "Sign Out" functionality (clears data/session).

### File Structure (in `c:\Users\hp\OneDrive\Desktop\SCM PROJECT`)
- `index.html` (Dashboard: BMI, BMR, Calorie Goal, Summaries, Water tracking)
- `meals.html` (Meal logging, Search, Image Upload simulation)
- `summary.html` (Macro breakdown, Meal/Activity logs)
- `goals.html` (Weight logging)
- `progress.html` (Charts and Trends using basic CSS/Canvas or simple HTML bars since no external libraries are requested, but we can use Chart.js via CDN if allowed. Assuming vanilla JS/CSS for simplicity or a simple CDN include if needed. We'll use CSS based bars or a simple vanilla JS canvas chart to stay strictly "HTML, CSS, JS only" without external dependencies unless implied).
- `style.css` (Global styles, utility classes, themes)
- `script.js` (Global logic, LocalStorage management, Food Database, Search, Calculations)

### Component Logic

#### Food Database & Search
- A massive list of objects mimicking a database.
- Smart Search: String matching, `toLowerCase()`, `includes()` for partial matches. A custom fuzzy search function to handle slight misspellings or regional variations.

#### AI Image Matching (Simulated)
- File input that triggers a mock loading state.
- Prompt user: "What food is in this image?"
- Use fuzzy search to find the closest match.

#### Fallback Logic
- If no food is found, display a form to enter "Name", "Calories", "Unit", "Macros" manually.
- Save this custom food to `localStorage` and prepend to the search database for future use.

#### Activity System
- Form for "Activity Name" and "Duration (mins)".
- Predefined list of activities with MET values.
- Calculate calories burned: `Duration * (MET * 3.5 * weightKg) / 200`.

#### Smart Water Tracking
- Increment/Decrement counters. Save to LocalStorage.
- Conditional AI messages based on count.

#### AI Health Analysis
- Evaluate daily `protein`, `carbs`, `fat` against goals.
- Display context-aware messages on Dashboard/Summary.

## Verification Plan
### Manual Verification
1. Open `index.html` in the browser.
2. Enter initial user data (Weight, Height, Age, Gender) to calculate BMI/BMR.
3. Add a meal (e.g., "Masala dosa") via smart search.
4. Simulate an image upload and match "Curd rice".
5. Enter an unknown food, verify the fallback UI, and ensure it saves to custom foods.
6. Log an activity (e.g., "Running" for 30 mins) and verify calorie burn calculation.
7. Track 8 glasses of water and check AI messages.
8. Navigate through all bottom nav links to ensure routing (via file links) works correctly and data persists across page loads.
