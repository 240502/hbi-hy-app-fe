import { Component, OnInit, inject } from '@angular/core';
import { QuestionService } from '@data-access/api/question.service';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  questionService = inject(QuestionService);
  ngOnInit(): void {
    this.questionService.loadQuestions({ page: 1, limit: 10 });
  }

  
}
