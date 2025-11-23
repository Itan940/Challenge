import { useState, useEffect } from 'react';
import type { Patient, PatientFormData } from '../types/patient';
import { patientService } from '../services/patientService';

export const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await patientService.getAllPatients();
      setPatients(data);
    } catch (err) {
      setError('Failed to load patients. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addPatient = (formData: PatientFormData) => {
    const newPatient: Patient = {
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      website: formData.website?.trim() || undefined,
      description: formData.description.trim(),
      avatar: formData.avatar?.trim() || undefined,
      createdAt: new Date().toISOString(),
    };
    setPatients(prev => [newPatient, ...prev]);
  };

  const updatePatient = (id: string, formData: PatientFormData) => {
    setPatients(prev =>
      prev.map(patient =>
        patient.id === id
          ? {
              ...patient,
              name: formData.name.trim(),
              website: formData.website?.trim() || undefined,
              description: formData.description.trim(),
              avatar: formData.avatar?.trim() || patient.avatar,
            }
          : patient
      )
    );
  };

  const deletePatient = (id: string) => {
    setPatients(prev => prev.filter(patient => patient.id !== id));
  };

  return {
    patients,
    loading,
    error,
    addPatient,
    updatePatient,
    deletePatient,
    reloadPatients: loadPatients,
  };
};
