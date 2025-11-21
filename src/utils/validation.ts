import { PatientFormData, ValidationErrors } from '../types/patient';

export const validatePatientForm = (data: PatientFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Validate name
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Name must not exceed 100 characters';
  }

  // Validate website
  if (!data.website.trim()) {
    errors.website = 'Website is required';
  } else {
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(data.website.trim())) {
      errors.website = 'Please enter a valid URL';
    }
  }

  // Validate description
  if (!data.description.trim()) {
    errors.description = 'Description is required';
  } else if (data.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters';
  } else if (data.description.trim().length > 500) {
    errors.description = 'Description must not exceed 500 characters';
  }

  return errors;
};

export const hasErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};
