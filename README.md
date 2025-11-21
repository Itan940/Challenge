# Patient Management Application

A modern, responsive patient management application built with React, TypeScript, and Vite. This application allows users to view, add, edit, and delete patient records with a clean, intuitive interface.

## 🚀 Features

- **Patient List Display**: View all patients in a responsive grid layout with individual cards
- **Expand/Collapse Details**: Each patient card includes an animated expand/collapse feature to view additional information
- **Add New Patients**: Create new patient records through a validated form modal
- **Edit Patient Information**: Update existing patient data with real-time validation
- **Delete Patients**: Remove patient records with confirmation dialogs
- **Form Validation**: Comprehensive client-side validation for all input fields
- **Toast Notifications**: User-friendly success/error notifications for all actions
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Animations**: Polished animations throughout the application for better UX
- **Accessibility**: Built with accessibility in mind (keyboard navigation, ARIA labels, semantic HTML)

## 🛠️ Technologies Used

### Core Stack
- **React 18.2**: Modern React with hooks for state management
- **TypeScript**: Full type safety throughout the application
- **Vite**: Fast build tool and development server

### Development Tools
- **ESLint**: Code linting with TypeScript and React rules
- **Prettier**: Code formatting for consistent style
- **CSS3**: Custom styling without UI libraries (following the challenge requirements)

### Architecture & Patterns
- **Custom Hooks**: Reusable logic with `usePatients` and `useToast`
- **Component Composition**: Modular, reusable components
- **Type Safety**: Strict TypeScript configuration with proper type definitions
- **Separation of Concerns**: Clear separation between services, components, hooks, and utilities

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Modal.tsx       # Accessible modal component
│   ├── Modal.css
│   ├── PatientCard.tsx # Patient card with expand/collapse
│   ├── PatientCard.css
│   ├── PatientForm.tsx # Form component with validation
│   ├── PatientForm.css
│   ├── Toast.tsx       # Toast notification component
│   └── Toast.css
├── hooks/              # Custom React hooks
│   ├── usePatients.ts  # Patient data management hook
│   └── useToast.ts     # Toast notification management hook
├── services/           # API services
│   └── patientService.ts
├── types/              # TypeScript type definitions
│   └── patient.ts
├── utils/              # Utility functions
│   └── validation.ts   # Form validation logic
├── App.tsx            # Main application component
├── App.css
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Design Decisions

### Component Architecture
- **Atomic Design Principles**: Built components from the ground up without UI libraries
- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Components are designed to be reusable and composable

### State Management
- **Local State**: Used React's `useState` for component-level state
- **Custom Hooks**: Extracted complex state logic into custom hooks (`usePatients`, `useToast`)
- **No Persistent Data**: As per requirements, all data changes are in-memory only

### Styling Approach
- **CSS Modules Pattern**: Separate CSS file for each component
- **Custom CSS**: No UI libraries used, all components built from scratch
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Smooth Animations**: CSS transitions and keyframe animations for better UX

### Form Validation
- **Real-time Validation**: Validation occurs on blur and form submission
- **User-friendly Error Messages**: Clear, actionable error messages
- **Visual Feedback**: Input fields show error states with red borders

### Accessibility
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Labels**: Screen reader support with proper ARIA attributes
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Focus Management**: Proper focus handling in modals and forms

## 🚦 Getting Started

### Prerequisites
- Node.js (version 16.x or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd patient-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier

## 🧪 Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can preview the production build:

```bash
npm run preview
```

## 🎯 Key Features Implementation

### Patient Data Fetching
- Data is fetched from the MockAPI endpoint on application load
- Loading state is shown during data fetch
- Error handling with user-friendly error messages

### CRUD Operations
- **Create**: Add new patients with form validation
- **Read**: View patient list and individual patient details
- **Update**: Edit existing patient information
- **Delete**: Remove patients with confirmation

### Form Validation Rules
- **Name**: Required, 2-100 characters
- **Website**: Required, must be a valid URL format
- **Description**: Required, 10-500 characters

### Notifications
- Success notifications for successful operations
- Auto-dismiss after 3 seconds
- Multiple notifications stack vertically
- Smooth slide-in animation

## 🎨 UI/UX Highlights

- **Modern Design**: Clean, professional interface with a gradient background
- **Card-based Layout**: Patient information displayed in cards for better organization
- **Expand/Collapse**: Smooth animations when expanding/collapsing patient details
- **Modal Dialogs**: Centered modal for add/edit operations with backdrop
- **Empty State**: Helpful empty state when no patients are available
- **Loading State**: Spinner animation during data loading
- **Responsive Grid**: Automatically adjusts columns based on screen size

## 🔧 Code Quality

### TypeScript
- Strict type checking enabled
- All components, hooks, and utilities are fully typed
- Type-safe API interfaces

### Linting
- ESLint configured with React and TypeScript rules
- Code follows React best practices

### Formatting
- Prettier configured for consistent code style
- Configuration in `.prettierrc`

## 📝 API Integration

The application integrates with the MockAPI endpoint:
```
https://63bedcf7f5cfc0949b634fc8.mockapi.io/users
```

The API provides patient data with the following structure:
- `id`: Unique identifier
- `name`: Patient name
- `website`: Patient website URL
- `description`: Patient description
- `avatar`: Patient avatar image URL
- `createdAt`: Creation timestamp

## 🌟 Future Enhancements

While the current implementation meets all requirements, potential improvements could include:
- Search and filter functionality
- Sorting options (by name, date, etc.)
- Pagination for large datasets
- Dark mode support
- Export patient data to CSV/PDF
- Backend integration for persistent storage
- Unit and integration tests

## 📄 License

This project was created as part of a technical challenge.

## 👨‍💻 Author

Created with attention to detail, following modern React best practices and industry standards.
