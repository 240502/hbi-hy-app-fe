export interface ApiResponse<T> {
  message?: string;
  code?: number;
  status?: string;
  metadata?: T;
}
