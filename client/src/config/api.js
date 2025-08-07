import config from './environment.js';

export const API_BASE_URL = config.API_BASE_URL;

export const buildApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

export const buildFileUrl = (filePath) => {
  if (!filePath) return "https://via.placeholder.com/300x200?text=Image+Not+Found";
  
  const cleanPath = filePath.startsWith("/") ? filePath.substring(1) : filePath;
  return `${API_BASE_URL}/${cleanPath}`;
}; 