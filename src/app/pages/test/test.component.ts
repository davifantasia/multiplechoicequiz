import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../database.service';
import { Test } from '../../objects/test';
import { Question } from '../../objects/question';
import { STRINGS } from '../../strings';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private candidateName: string;
  private currentIndex: number;
  private score: number = 0;

  test: Test;
  questions: Question[];
  currentQuestion: Question;
  progress: number;
  strings: object = STRINGS;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dbService: DatabaseService
  ) { }

  ngOnInit() {
    const paramMap = this.route.snapshot.paramMap;
    this.candidateName = paramMap.get('candidateName');
    this.test = {
      id: paramMap.get('testId'),
      name: paramMap.get('testName')
    }

    this.readQuestions(this.test.id);
  }

  readQuestions(id: string): void {
    this.dbService.readQuestions(id)
      .subscribe(questions => {
        this.questions = questions;
        this.currentQuestion = this.questions[0];
        this.currentIndex = 0;
        this.progress = this.computeProgress(0, this.questions.length - 1);
      });
  }

  onSubmittedAnswer(sumittedAnswer: string): void {
    this.dbService.readAnswer(this.test.id, this.currentQuestion.id)
    .subscribe( answer => {
      this.score += sumittedAnswer === answer[0].answer ? 1 : 0;

      const nextQuestion = this.getNextQuestion();
      if (nextQuestion) {
        this.currentQuestion = nextQuestion;
        this.progress = this.computeProgress(this.currentIndex, this.questions.length - 1);
      } else {
        this.goToScore();
      }
    });
  }

  getNextQuestion(): Question {
    if ( this.progress === 100) {
      return;
    }
    
    return this.questions[++this.currentIndex];
  }

  computeProgress(currentIndex, lastIndex): number {
    // ++ so initial computation starts from 1 instead of 0 because anything divided by 0 is 0.
    currentIndex++;
    lastIndex++;

    return Math.floor(
      (currentIndex/lastIndex) * 100
    );
  }

  goToScore(): void {
    let candidateName = this.candidateName, score = this.score, numOfQuestions = this.questions.length;
    
    this.router.navigate(['/score', candidateName, score, numOfQuestions]);
  }
}
