import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../objects/question';
import { STRINGS } from '../../strings';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() progress: number;
  chosenOption: string = '';
  @Output() submittedAnswer = new EventEmitter<string>();
  strings: object = STRINGS;

  constructor() {  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.submittedAnswer.emit(this.chosenOption);

    this.chosenOption = '';
  }
}
