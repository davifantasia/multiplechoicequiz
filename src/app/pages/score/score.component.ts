import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  candidateName: string;
  score: number;
  numOfQuestions: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const paramMap = this.route.snapshot.paramMap;
    this.candidateName = paramMap.get('candidateName');
    this.score = +paramMap.get('score');
    this.numOfQuestions = +paramMap.get('numOfQuestions');
  }

}
