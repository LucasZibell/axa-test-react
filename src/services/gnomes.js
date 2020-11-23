import api from '../config/api';

export const getGnomes = () => api.get('/master/data.json');
