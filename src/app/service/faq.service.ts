import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {QuestionAnswer} from '../models/question-answer';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private faqUrl = '/api/question-answer';

  constructor(private http: HttpClient) { }

  getAllQuestionAnswers() {
    return this.http.get<QuestionAnswer[]>(this.faqUrl);
  }
}
