import { Component } from '@angular/core';
import { ExerciseSetList } from '../interfaces/exercise-set';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent {
  exerciseList:ExerciseSetList=[
  {id:'1', date: new Date(), exercise:'Deadlift', reps:15, sets:3},
  {id:'2', date: new Date(), exercise:'Squat', reps:15, sets:3},
  {id:'3', date: new Date(), exercise:'Barbell row', reps:15, sets:3},
  ];
}
