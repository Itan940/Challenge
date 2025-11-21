import { Patient } from '../types/patient';

const API_URL = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users';

export const patientService = {
  async getAllPatients(): Promise<Patient[]> {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch patients');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching patients:', error);
      throw error;
    }
  },
};
