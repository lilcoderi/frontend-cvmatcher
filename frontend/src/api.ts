// frontend/src/api.ts

import axios from 'axios';

// Tambahkan kata kunci 'type' di sini

import type { MatchRequest, MatchResponse } from './types';



const API_BASE_URL = 'http://localhost:8000';



export const postMatchRequest = async (data: MatchRequest): Promise<MatchResponse> => {

  const response = await axios.post<MatchResponse>(`${API_BASE_URL}/predict`, data);

  return response.data;

};