export interface Patient {
  id: string;
  name: string;
  website: string;
  description: string;
  avatar: string;
  createdAt: string;
}

export interface PatientFormData {
  name: string;
  website: string;
  description: string;
}

export interface ValidationErrors {
  name?: string;
  website?: string;
  description?: string;
}
