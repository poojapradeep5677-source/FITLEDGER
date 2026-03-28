// Default Data
const defaultFoodDB = [
  // Breakfast
  { name: "Idli", cal: 40, unit: "piece", prot: 1, carb: 8, fat: 0 },
  { name: "Dosa", cal: 120, unit: "piece", prot: 3, carb: 20, fat: 3 },
  { name: "Masala dosa", cal: 250, unit: "piece", prot: 5, carb: 35, fat: 10 },
  { name: "Rava dosa", cal: 150, unit: "piece", prot: 4, carb: 22, fat: 5 },
  { name: "Onion dosa", cal: 160, unit: "piece", prot: 4, carb: 24, fat: 6 },
  { name: "Set dosa", cal: 100, unit: "piece", prot: 2, carb: 18, fat: 2 },
  { name: "Ghee dosa", cal: 200, unit: "piece", prot: 3, carb: 20, fat: 12 },
  { name: "Podi dosa", cal: 180, unit: "piece", prot: 5, carb: 22, fat: 8 },
  { name: "Paper dosa", cal: 100, unit: "piece", prot: 2, carb: 18, fat: 2 },
  { name: "Uttapam", cal: 150, unit: "piece", prot: 4, carb: 25, fat: 4 },
  { name: "Onion uttapam", cal: 180, unit: "piece", prot: 5, carb: 28, fat: 6 },
  { name: "Rava uttapam", cal: 160, unit: "piece", prot: 4, carb: 26, fat: 5 },
  { name: "Pongal", cal: 250, unit: "cup", prot: 6, carb: 35, fat: 10 },
  { name: "Ven pongal", cal: 280, unit: "cup", prot: 7, carb: 35, fat: 12 },
  { name: "Khara pongal", cal: 260, unit: "cup", prot: 6, carb: 34, fat: 11 },
  { name: "Upma", cal: 200, unit: "cup", prot: 4, carb: 28, fat: 8 },
  { name: "Rava upma", cal: 210, unit: "cup", prot: 4, carb: 29, fat: 8 },
  { name: "Semiya upma", cal: 220, unit: "cup", prot: 5, carb: 35, fat: 7 },
  { name: "Aval upma", cal: 180, unit: "cup", prot: 3, carb: 30, fat: 6 },
  { name: "Poori", cal: 100, unit: "piece", prot: 2, carb: 10, fat: 6 },
  { name: "Poori masala", cal: 150, unit: "cup", prot: 3, carb: 20, fat: 7 },
  { name: "Appam", cal: 120, unit: "piece", prot: 2, carb: 24, fat: 2 },
  { name: "Idiyappam", cal: 100, unit: "piece", prot: 2, carb: 22, fat: 1 },
  { name: "Adai", cal: 150, unit: "piece", prot: 6, carb: 25, fat: 4 },
  { name: "Pesarattu", cal: 160, unit: "piece", prot: 7, carb: 24, fat: 4 },
  { name: "Kuzhi paniyaram", cal: 50, unit: "piece", prot: 1, carb: 8, fat: 2 },
  { name: "Sweet paniyaram", cal: 60, unit: "piece", prot: 1, carb: 12, fat: 1 },
  { name: "Puttu", cal: 150, unit: "piece", prot: 3, carb: 30, fat: 1 },
  { name: "Kadala curry", cal: 180, unit: "cup", prot: 8, carb: 22, fat: 7 },
  
  // Rice dishes
  { name: "Sambar rice", cal: 250, unit: "cup", prot: 6, carb: 45, fat: 5 },
  { name: "Curd rice", cal: 220, unit: "cup", prot: 5, carb: 35, fat: 6 },
  { name: "Lemon rice", cal: 240, unit: "cup", prot: 4, carb: 42, fat: 7 },
  { name: "Tamarind rice", cal: 260, unit: "cup", prot: 4, carb: 45, fat: 8 },
  { name: "Coconut rice", cal: 280, unit: "cup", prot: 4, carb: 40, fat: 12 },
  { name: "Tomato rice", cal: 230, unit: "cup", prot: 4, carb: 42, fat: 6 },
  { name: "Vegetable rice", cal: 210, unit: "cup", prot: 5, carb: 40, fat: 4 },
  { name: "Bisibele bath", cal: 280, unit: "cup", prot: 8, carb: 45, fat: 8 },
  { name: "Puliyodarai", cal: 260, unit: "cup", prot: 4, carb: 45, fat: 8 },
  { name: "Ghee rice", cal: 300, unit: "cup", prot: 4, carb: 40, fat: 15 },
  { name: "Jeera rice", cal: 220, unit: "cup", prot: 4, carb: 42, fat: 5 },
  { name: "Rasam rice", cal: 200, unit: "cup", prot: 4, carb: 40, fat: 3 },
  { name: "Dal rice", cal: 240, unit: "cup", prot: 8, carb: 42, fat: 4 },
  { name: "Kootu rice", cal: 230, unit: "cup", prot: 6, carb: 40, fat: 5 },

  // Meals
  { name: "White rice", cal: 130, unit: "cup", prot: 3, carb: 28, fat: 0 },
  { name: "Sambar", cal: 110, unit: "cup", prot: 4, carb: 15, fat: 4 },
  { name: "Rasam", cal: 40, unit: "cup", prot: 1, carb: 5, fat: 1 },
  { name: "Curd", cal: 100, unit: "cup", prot: 5, carb: 5, fat: 6 },
  { name: "Buttermilk", cal: 40, unit: "glass", prot: 2, carb: 2, fat: 1 },
  { name: "Avial", cal: 150, unit: "cup", prot: 4, carb: 12, fat: 10 },
  { name: "Poriyal", cal: 80, unit: "cup", prot: 2, carb: 10, fat: 4 },
  { name: "Kootu", cal: 120, unit: "cup", prot: 5, carb: 15, fat: 5 },
  { name: "Thoran", cal: 100, unit: "cup", prot: 3, carb: 8, fat: 6 },
  { name: "Pachadi", cal: 70, unit: "cup", prot: 2, carb: 5, fat: 4 },
  { name: "Fryums", cal: 50, unit: "piece", prot: 0, carb: 6, fat: 3 },
  { name: "Papad", cal: 40, unit: "piece", prot: 2, carb: 6, fat: 1 },
  { name: "Pickle", cal: 30, unit: "tbsp", prot: 0, carb: 2, fat: 3 },

  // Dinner
  { name: "Chapati", cal: 100, unit: "piece", prot: 3, carb: 18, fat: 1 },
  { name: "Parotta", cal: 300, unit: "piece", prot: 5, carb: 35, fat: 15 },
  { name: "Kerala parotta", cal: 320, unit: "piece", prot: 6, carb: 38, fat: 16 },
  { name: "Veg kurma", cal: 150, unit: "cup", prot: 4, carb: 15, fat: 8 },
  { name: "Channa masala", cal: 180, unit: "cup", prot: 8, carb: 22, fat: 7 },
  { name: "Kurma", cal: 180, unit: "cup", prot: 5, carb: 15, fat: 11 },
  { name: "Egg curry", cal: 200, unit: "cup", prot: 12, carb: 8, fat: 14 },
  { name: "Chicken curry", cal: 250, unit: "cup", prot: 20, carb: 10, fat: 14 },

  // Snacks
  { name: "Medu vada", cal: 150, unit: "piece", prot: 5, carb: 18, fat: 7 },
  { name: "Masala vada", cal: 100, unit: "piece", prot: 4, carb: 12, fat: 4 },
  { name: "Paruppu vada", cal: 110, unit: "piece", prot: 4, carb: 12, fat: 5 },
  { name: "Bonda", cal: 180, unit: "piece", prot: 3, carb: 20, fat: 9 },
  { name: "Bajji", cal: 120, unit: "piece", prot: 2, carb: 15, fat: 6 },
  { name: "Onion bajji", cal: 110, unit: "piece", prot: 2, carb: 14, fat: 5 },
  { name: "Potato bajji", cal: 130, unit: "piece", prot: 2, carb: 16, fat: 6 },
  { name: "Pakoda", cal: 200, unit: "cup", prot: 4, carb: 20, fat: 12 },
  { name: "Murukku", cal: 150, unit: "piece", prot: 2, carb: 15, fat: 9 },
  { name: "Mixture", cal: 250, unit: "cup", prot: 4, carb: 25, fat: 15 },
  { name: "Sundal", cal: 120, unit: "cup", prot: 6, carb: 20, fat: 2 },
  { name: "Banana chips", cal: 160, unit: "cup", prot: 1, carb: 18, fat: 10 },
  { name: "Sharkara varatti", cal: 180, unit: "cup", prot: 1, carb: 35, fat: 5 },

  // Sweets & Beverages
  { name: "Kesari", cal: 200, unit: "cup", prot: 2, carb: 35, fat: 6 },
  { name: "Payasam", cal: 250, unit: "cup", prot: 4, carb: 40, fat: 8 },
  { name: "Filter coffee", cal: 80, unit: "cup", prot: 2, carb: 10, fat: 3 },
  { name: "Tea", cal: 60, unit: "cup", prot: 1, carb: 8, fat: 2 },
  { name: "Tender coconut", cal: 50, unit: "glass", prot: 0, carb: 10, fat: 0 },

  // Biriyani
  { name: "Chicken biriyani", cal: 450, unit: "plate", prot: 25, carb: 50, fat: 15 },
  { name: "Vegetable biriyani", cal: 350, unit: "plate", prot: 8, carb: 55, fat: 10 },
];

const MET_VALUES = {
  "walking": 3.5, "running": 9.8, "cycling": 7.5, "yoga": 3.0, "swimming": 6.0, "weightlifting": 3.0
};

// Global State
let state = {
  user: null, // { weight, height, age, gender, activityLevel }
  meals: [],
  activities: [],
  water: 0,
  customFoods: [],
  weightHistory: [],
  lastLogin: new Date().toDateString()
};

// Initialization
function initApp() {
  const saved = localStorage.getItem('fitledger_state');
  if (saved) {
    let parsed = JSON.parse(saved);
    // Reset daily logs if it's a new day
    if (parsed.lastLogin !== new Date().toDateString()) {
      parsed.lastLogin = new Date().toDateString();
      parsed.meals = [];
      parsed.activities = [];
      parsed.water = 0;
    }
    state = Object.assign(state, parsed);
  }

  // Define active nav
  const path = window.location.pathname;
  document.querySelectorAll('.nav-item').forEach(el => {
    if(path.includes(el.getAttribute('href'))) el.classList.add('active');
  });

  if (!state.user && !path.includes('index.html') && path !== '/' && !path.endsWith('/')) {
    window.location.href = 'index.html'; // redirect to setup if no user
  }

  saveState();
}

function saveState() {
  localStorage.setItem('fitledger_state', JSON.stringify(state));
}

function clearData() {
  if (confirm("Are you sure you want to sign out and clear all data?")) {
    localStorage.removeItem('fitledger_state');
    window.location.href = 'index.html';
  }
}

// Calculations
function calculateBMR() {
  if (!state.user) return 0;
  const { weight, height, age, gender } = state.user;
  if (gender === 'male') {
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    return (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
}

function calculateTDEE() {
    return Math.round(calculateBMR() * 1.2); // Base sedentary active
}

function getDailySummary() {
  let calConsumed = 0, prot = 0, carb = 0, fat = 0;
  state.meals.forEach(m => {
    let multiple = m.qty;
    calConsumed += (m.food.cal * multiple);
    prot += (m.food.prot * multiple);
    carb += (m.food.carb * multiple);
    fat += (m.food.fat * multiple);
  });
  
  let calBurned = 0;
  state.activities.forEach(a => {
    let met = MET_VALUES[a.name.toLowerCase()] || 4.0;
    // Calories Burned = Duration * (MET * 3.5 * weightKg) / 200
    calBurned += a.duration * (met * 3.5 * (state.user?.weight || 70)) / 200;
  });

  return { 
    consumed: Math.round(calConsumed), 
    burned: Math.round(calBurned), 
    prot: Math.round(prot), 
    carb: Math.round(carb), 
    fat: Math.round(fat) 
  };
}

// Search Logic
function fuzzySearch(query) {
  let db = [...state.customFoods, ...defaultFoodDB];
  let q = query.toLowerCase().trim();
  if(!q) return [];
  
  return db.filter(f => f.name.toLowerCase().includes(q) || q.includes(f.name.toLowerCase()))
    .sort((a,b) => a.name.length - b.name.length)
    .slice(0, 5);
}

// Listeners standard setup
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  if (window.initPage) window.initPage();
});
