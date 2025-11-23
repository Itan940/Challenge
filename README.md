# Patient Management Application

A modern, responsive patient management application built with React, TypeScript, and Vite. This application allows users to view, add, edit, and delete patient records with a clean, intuitive interface.

## 🚀 Features

- **Patient List Display**: View all patients in a responsive grid layout with individual cards
- **Expand/Collapse Details**: Accordion behavior - only one card expands at a time
- **Add New Patients**: Create new patient records through a validated form modal
- **Edit Patient Information**: Update existing patient data with real-time validation
- **Delete Patients**: Remove patient records with confirmation dialogs
- **Form Validation**: Comprehensive client-side validation for all input fields
- **Toast Notifications**: User-friendly success/error notifications for all actions
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Default Avatar**: Fallback profile image when patient avatar is missing
- **Smooth Animations**: Polished animations throughout the application for better UX
- **Accessibility**: Built with accessibility in mind (keyboard navigation, ARIA labels, semantic HTML)
- **Light-it Branding**: Custom color palette and typography matching Light-it brand

## 🛠️ Technologies Used

### Core Stack
- **React 18.2**: Modern React with hooks for state management
- **TypeScript**: Full type safety throughout the application
- **Vite**: Fast build tool and development server

### Development Tools
- **ESLint**: Code linting with TypeScript and React rules
- **Prettier**: Code formatting for consistent style
- **CSS3**: Custom styling

### Architecture & Patterns
- **Custom Hooks**: Reusable logic with `usePatients` and `useToast`
- **Component Composition**: Modular, reusable components
- **Type Safety**: Strict TypeScript configuration with proper type definitions
- **Separation of Concerns**: Clear separation between services, components, hooks, and utilities

## 📁 Project Structure

```
patient-management-app/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   └── img/           # Images (logo, favicon, default profile)
│   ├── components/        # Reusable UI components
│   │   ├── Modal.tsx      # Accessible modal component
│   │   ├── Modal.css
│   │   ├── PatientCard.tsx # Patient card with expand/collapse
│   │   ├── PatientCard.css
│   │   ├── PatientForm.tsx # Form component with validation
│   │   ├── PatientForm.css
│   │   ├── Toast.tsx      # Toast notification component
│   │   └── Toast.css
│   ├── hooks/             # Custom React hooks
│   │   ├── usePatients.ts # Patient data management hook
│   │   └── useToast.ts    # Toast notification management hook
│   ├── services/          # API services
│   │   └── patientService.ts # HTTP client for patient API
│   ├── types/             # TypeScript type definitions
│   │   └── patient.ts     # Patient and API response types
│   ├── utils/             # Utility functions
│   │   └── validation.ts  # Form validation logic
│   ├── App.tsx            # Main application component
│   ├── App.css            # Main application styles
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── eslint.config.js       # ESLint flat config
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # App-specific TypeScript config
├── tsconfig.node.json     # Node-specific TypeScript config
└── vite.config.ts         # Vite configuration
```

## 📄 File Documentation

### Root Files

#### `index.html`
- Main HTML entry point
- Links to Google Fonts (Ubuntu, Manrope)
- Sets favicon and page title
- Includes root div for React mounting

#### `package.json`
- Project metadata and dependencies
- Scripts for dev, build, preview, lint, and format
- Core dependencies: React 18.2, TypeScript, Vite 4.5.3

#### `vite.config.ts`
- Vite bundler configuration
- React plugin setup
- Development server settings

#### TypeScript Configuration Files
- **`tsconfig.json`**: Base TypeScript configuration
- **`tsconfig.app.json`**: App-specific settings (strict mode, ESNext)
- **`tsconfig.node.json`**: Node environment settings for Vite config

#### Linting & Formatting
- **`.eslintrc.json`**: ESLint rules for React and TypeScript
- **`eslint.config.js`**: Modern ESLint flat config
- **`.prettierrc`**: Code formatting rules

### Source Files

#### `src/main.tsx`
- Application entry point
- Renders the root React component
- Mounts React app to DOM

#### `src/App.tsx`
- Main application component
- Manages global state (patient list, modal, toast)
- Orchestrates all child components
- Implements accordion behavior for card expansion
- Handles CRUD operations

#### `src/App.css`
- Global application styles
- Dark theme with Light-it branding colors
- Responsive grid layout
- Header and button styles

#### `src/index.css`
- CSS reset and base styles
- Font family definitions (Ubuntu for headings, Manrope for body)
- Root CSS variables

### Components

#### `src/components/Modal.tsx` & `Modal.css`
- **Purpose**: Reusable modal dialog component
- **Features**:
  - Backdrop with fade-in animation
  - Slide-up animation for modal content
  - Click outside to close
  - Escape key to close
  - Focus trap for accessibility
- **Styling**: Dark theme (#1f2233), border (#353849)

#### `src/components/PatientCard.tsx` & `PatientCard.css`
- **Purpose**: Display individual patient information
- **Features**:
  - Collapsible card with smooth animation
  - Avatar with default fallback image
  - Edit and Delete action buttons
  - Controlled expansion via props
- **Props**: `patient`, `isExpanded`, `onToggleExpand`, `onEdit`, `onDelete`
- **Styling**: Dark card (#1f2233), violet accent (#6366f1), hover effects

#### `src/components/PatientForm.tsx` & `PatientForm.css`
- **Purpose**: Form for adding/editing patients
- **Features**:
  - Real-time validation on blur
  - Error messages below inputs
  - Character limits (name: 2-100, description: 10-2000)
  - URL validation for website field
- **Props**: `initialData`, `onSubmit`, `onCancel`
- **Styling**: Dark inputs (#2a2d3e), custom scrollbar, violet accents

#### `src/components/Toast.tsx` & `Toast.css`
- **Purpose**: Notification system
- **Features**:
  - Slide-in animation from top
  - Auto-dismiss after 3 seconds
  - Manual dismiss button
  - Success (green) and error (red) variants
- **Props**: `message`, `type`, `onClose`
- **Styling**: Positioned at top-right, stacking notifications

### Hooks

#### `src/hooks/usePatients.ts`
- **Purpose**: Manage patient data and CRUD operations
- **State**: `patients`, `loading`, `error`
- **Functions**:
  - `fetchPatients()`: Load data from API on mount
  - `addPatient(patient)`: Add new patient (in-memory)
  - `updatePatient(id, data)`: Update existing patient
  - `deletePatient(id)`: Remove patient
- **Returns**: Object with state and CRUD functions

#### `src/hooks/useToast.ts`
- **Purpose**: Manage toast notifications
- **State**: Array of active toasts
- **Functions**:
  - `showToast(message, type)`: Display new notification
  - `removeToast(id)`: Dismiss specific toast
  - Auto-removal after 3 seconds
- **Returns**: Object with toasts array and toast functions

### Services

#### `src/services/patientService.ts`
- **Purpose**: HTTP client for patient API
- **Functions**:
  - `fetchPatients()`: GET request to fetch all patients
  - Communicates with MockAPI endpoint
- **Error Handling**: Throws errors for failed requests
- **Base URL**: `https://63bedcf7f5cfc0949b634fc8.mockapi.io/users`

### Types

#### `src/types/patient.ts`
- **Interfaces**:
  - `Patient`: Core patient data structure
    - id, name, website, description, avatar, createdAt
  - `PatientFormData`: Form submission data (without id and createdAt)
  - `ApiPatient`: API response format
- **Purpose**: Type safety across the application

### Utilities

#### `src/utils/validation.ts`
- **Purpose**: Form validation logic
- **Functions**:
  - `validateName(name)`: 2-100 characters
  - `validateWebsite(url)`: Valid URL format
  - `validateDescription(text)`: 10-2000 characters
- **Returns**: Object with `isValid` boolean and `error` message

### Assets

#### `src/assets/img/`
- **Logo_Light-it_White.svg**: Light-it company logo (header)
- **Favicon Light-it.png**: Browser favicon
- **Default_Profile.png**: Fallback avatar for patients without images

## 🎨 Design Decisions

### Branding & Color Palette
- **Dark Theme**: Background #2a2d3e, Cards #1f2233
- **Accent Color**: Violet #6366f1 (Light-it branding)
- **Text**: White #fcfcfc with high contrast
- **Typography**: 
  - Ubuntu font for headings/titles
  - Manrope font for body text

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
