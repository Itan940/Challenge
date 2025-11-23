import type { PatientFormData, ValidationErrors } from '../types/patient';

export const validatePatientForm = (data: PatientFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 1) {
    errors.name = 'Name must be at least 1 character';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Name must not exceed 100 characters';
  }

  if (data.website && data.website.trim()) {
    const urlPattern = /^(https?:\/\/)?([\/\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(data.website.trim())) {
      errors.website = 'Please enter a valid URL';
    }
  }

  if (!data.description.trim()) {
    errors.description = 'Description is required';
  } else if (data.description.trim().length > 2000) {
    errors.description = 'Description must not exceed 2000 characters';
  }

  if (data.avatar && data.avatar.trim()) {
    const urlPattern = /^(https?:\/\/)?([\/\w .-])*\.(?:jpg|jpeg|png|gif|svg|webp)$/i;
    if (!urlPattern.test(data.avatar.trim())) {
      errors.avatar = 'Please enter a valid image URL';
    }
  }

  return errors;
};

export const hasErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};
