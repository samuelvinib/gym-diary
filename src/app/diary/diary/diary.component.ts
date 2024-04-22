import { Component, OnInit, inject } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit {
  private exerciseSetsService= inject(ExerciseSetsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  exerciseList!: ExerciseSetList;
   ngOnInit(): void {
       this.exerciseSetsService
       .refreshList()
       .subscribe((dataApi) => (this.exerciseList = dataApi.items));
   }

  newList() {
    this.exerciseSetsService
      .refreshList()
      .subscribe((dataApi)=> (this.exerciseList = dataApi.items))
  }

  itemTrackBy(index: number, item: ExerciseSet) {
    return item.id;
  }

  addExercise(newSet: ExerciseSet) {
    this.router.navigate(['/home/new-reactive'])
  }

  editEntry(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.router.navigate([`/home/diary/entry/${id}`]);
  }

  deleteItem(id: string) {
    this.exerciseSetsService
      .deleteItem(id)
      .subscribe(()=> {
        this.exerciseList = this.exerciseList.filter(
          (exerciseSet) => exerciseSet.id !== id
        );
      });
  }

  newRep(updateSet: ExerciseSet) {
    const id = updateSet.id ?? '';
    this.exerciseSetsService
    .updateItem(id, updateSet)
    .subscribe();
  }
}
