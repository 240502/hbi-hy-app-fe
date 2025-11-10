import { Component, OnInit, inject, signal } from '@angular/core';
import { QuestionService } from '@data-access/api/question.service';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  currentTime = signal(new Date());
  questionService = inject(QuestionService);
  private timer?: ReturnType<typeof setInterval>;
  ngOnInit(): void {
    this.questionService.loadQuestions({ page: 1, limit: 10 });
    this.timer = setInterval(() => {
      this.currentTime.set(new Date());
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
