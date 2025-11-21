# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd patient-management-app
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:5173**

---

## 📱 Using the Application

### Viewing Patients
- On load, the app fetches patient data from the API
- Patients are displayed in a responsive grid
- Click the **▼** icon on any card to expand and see more details

### Adding a Patient
1. Click **"Add Patient"** button in the header
2. Fill in the form fields:
   - **Name**: 2-100 characters
   - **Website**: Valid URL (e.g., https://example.com)
   - **Description**: 10-500 characters
3. Click **"Add Patient"** to save
4. A success notification will appear

### Editing a Patient
1. Expand a patient card to see action buttons
2. Click **"Edit"** button
3. Modify the form fields
4. Click **"Update Patient"** to save changes
5. A success notification will appear

### Deleting a Patient
1. Expand a patient card
2. Click **"Delete"** button
3. Confirm the deletion
4. A success notification will appear

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

---

## 🎨 Features to Try

1. **Responsive Design**: Resize your browser to see mobile/tablet/desktop layouts
2. **Animations**: Watch the smooth expand/collapse animations
3. **Form Validation**: Try submitting invalid data to see validation in action
4. **Toast Notifications**: Notice the success notifications after each action
5. **Modal Interactions**: Try pressing ESC to close the modal or clicking the backdrop

---

## 📁 Project Structure

```
patient-management-app/
├── src/
│   ├── components/       # UI Components
│   │   ├── Modal.tsx/css
│   │   ├── PatientCard.tsx/css
│   │   ├── PatientForm.tsx/css
│   │   └── Toast.tsx/css
│   ├── hooks/           # Custom Hooks
│   │   ├── usePatients.ts
│   │   └── useToast.ts
│   ├── services/        # API Services
│   ├── types/           # TypeScript Types
│   ├── utils/           # Utilities
│   └── App.tsx          # Main App
├── README.md            # Full Documentation
├── DESIGN_DECISIONS.md  # Technical Details
└── PROJECT_SUMMARY.md   # Overview
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use a different port:
npm run dev -- --port 3000
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Restart your IDE/editor
# Or run:
npm run build
```

---

## 📚 Need More Help?

- **Full Documentation**: See `README.md`
- **Technical Details**: See `DESIGN_DECISIONS.md`
- **Project Overview**: See `PROJECT_SUMMARY.md`

---

## 🎉 Enjoy!

You're all set! Start exploring the Patient Management Application.
