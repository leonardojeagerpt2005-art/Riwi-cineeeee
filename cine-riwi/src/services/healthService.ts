// src/services/healthService.ts
import apiClient from "./apiClient";

export interface HealthResponse {
  status: string;
  timestamp: string;
}

export const getHealthCheck = async (): Promise<HealthResponse> => {
  const response = await apiClient.get<HealthResponse>("/health");
  return response.data;
};
