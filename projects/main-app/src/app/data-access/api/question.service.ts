import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '@models/question';
import { ApiResponse } from './types/api-response';
@Injectable({ providedIn: 'root' })
export class QuestionService {
  question = signal<Question[] | undefined>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  loadQuestions(options: { page: number; limit: number }) {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<ApiResponse<Question[]>>(``).subscribe({
      next: (response) => {
        this.question.set(response.metadata);
      },
      error: (err) => this.error.set(err.message || 'Không thể tải dữ liệu!'),
      complete: () => this.loading.set(false),
    });
  }
}
