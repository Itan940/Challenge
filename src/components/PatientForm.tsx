import { useState, useEffect } from 'react';
import type { Patient, PatientFormData, ValidationErrors } from '../types/patient';
import { validatePatientForm, hasErrors } from '../utils/validation';
import './PatientForm.css';

interface PatientFormProps {
  patient?: Patient;
  onSubmit: (data: PatientFormData) => void;
  onCancel: () => void;
}

export const PatientForm = ({ patient, onSubmit, onCancel }: PatientFormProps) => {
  const [formData, setFormData] = useState<PatientFormData>({
    name: patient?.name || '',
    website: patient?.website || '',
    description: patient?.description || '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (patient) {
      setFormData({
        name: patient.name,
        website: patient.website,
        description: patient.description,
      });
    }
  }, [patient]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate on blur
    const validationErrors = validatePatientForm(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, website: true, description: true });

    // Validate form
    const validationErrors = validatePatientForm(formData);
    setErrors(validationErrors);

    if (!hasErrors(validationErrors)) {
      onSubmit(formData);
    }
  };

  return (
    <form className="patient-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`form-input ${touched.name && errors.name ? 'form-input-error' : ''}`}
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter patient name"
        />
        {touched.name && errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="website" className="form-label">
          Website <span className="required">*</span>
        </label>
        <input
          type="text"
          id="website"
          name="website"
          className={`form-input ${touched.website && errors.website ? 'form-input-error' : ''}`}
          value={formData.website}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="https://example.com"
        />
        {touched.website && errors.website && (
          <span className="form-error">{errors.website}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description <span className="required">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          className={`form-textarea ${touched.description && errors.description ? 'form-input-error' : ''}`}
          value={formData.description}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter patient description"
          rows={4}
        />
        {touched.description && errors.description && (
          <span className="form-error">{errors.description}</span>
        )}
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {patient ? 'Update Patient' : 'Add Patient'}
        </button>
      </div>
    </form>
  );
};
