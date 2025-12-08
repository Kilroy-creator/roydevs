// src/utils/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const sendContactForm = async (formData) => {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return response.json();
};

export const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/api/projects`);
  return response.json();
};