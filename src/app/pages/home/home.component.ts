import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { DatabaseService } from '../../database.service';
import { STRINGS } from '../../strings';
import { Test } from '../../objects/test';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  strings: object = STRINGS;
  candidateName: string = "";
  selectedTestId: string = "GgOtQTgZuWLXpY2r9TSi";
  tests: Test[];

  constructor(
    private router: Router,
    private databaseService: DatabaseService
  ) { }
  
  ngOnInit() {
    this.readTests();
  }

  readTests(): void {
    this.databaseService.readTests()
      .subscribe(tests => this.tests = tests);
  }

  onSubmit(): void {
    let candidateName = this.candidateName, testId = this.selectedTestId, selectedTest = this.retrieveSelectedTest(testId);

    this.router.navigate(['/test', candidateName, testId, selectedTest.name]);
  }

  retrieveSelectedTest(testId: string): Test {
    return this.tests.find((test) => {
      return test.id === testId;
    });
  }
}
