import { useState } from 'react';
import type { Patient } from './types/patient';
import { usePatients } from './hooks/usePatients';
import { useToast } from './hooks/useToast';
import { PatientCard } from './components/PatientCard';
import { Modal } from './components/Modal';
import { PatientForm } from './components/PatientForm';
import { Toast } from './components/Toast';
import './App.css';

function App() {
  const { patients, loading, error, addPatient, updatePatient, deletePatient } = usePatients();
  const { toasts, showToast, removeToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPatient, setEditingPatient] = useState<Patient | undefined>(undefined);

  const handleAddClick = () => {
    setEditingPatient(undefined);
    setIsModalOpen(true);
  };

  const handleEditClick = (patient: Patient) => {
    setEditingPatient(patient);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingPatient(undefined);
  };

  const handleFormSubmit = (formData: { name: string; website: string; description: string }) => {
    if (editingPatient) {
      updatePatient(editingPatient.id, formData);
      showToast('Patient updated successfully!', 'success');
    } else {
      addPatient(formData);
      showToast('Patient added successfully!', 'success');
    }
    handleModalClose();
  };

  const handleDelete = (id: string) => {
    deletePatient(id);
    showToast('Patient deleted successfully!', 'success');
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading patients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error-container">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1 className="app-title">Patient Management</h1>
            <p className="app-subtitle">Manage your patient records efficiently</p>
          </div>
          <button className="add-button" onClick={handleAddClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Patient
          </button>
        </div>
      </header>

      <main className="app-main">
        {patients.length === 0 ? (
          <div className="empty-state">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h2>No patients yet</h2>
            <p>Get started by adding your first patient</p>
            <button className="add-button" onClick={handleAddClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Patient
            </button>
          </div>
        ) : (
          <div className="patients-grid">
            {patients.map(patient => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onEdit={handleEditClick}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={editingPatient ? 'Edit Patient' : 'Add New Patient'}
      >
        <PatientForm
          patient={editingPatient}
          onSubmit={handleFormSubmit}
          onCancel={handleModalClose}
        />
      </Modal>

      <div className="toast-container">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
