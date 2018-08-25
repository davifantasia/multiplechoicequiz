import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { Test } from './objects/test';
import { Question } from './objects/question';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private db: AngularFirestore) { }

  readTests(): Observable<Test[]> {
    return this.db.collection<Test>(
      'tests', 
      ref => ref.orderBy('id')
    ).valueChanges();
  }

  readQuestions(testId: string): Observable<Question[]> {
    return this.db
    .collection<Question>(`tests/${testId}/questions`)
    .valueChanges();
  }

  readAnswer(testId: string, questionId: string): Observable<any[]> {
    return this.db
    .collection<any>(`tests/${testId}/questions/${questionId}/answer`)
    .valueChanges();
  }
}
