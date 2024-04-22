import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import {ActivatedRoute, Router} from '@angular/router';
import { multipleValidator } from './custom-validation';
import {ExerciseSet, ExerciseSetList} from "../interfaces/exercise-set";

@Component({
  selector: 'app-new-entry-form-reactive',
  templateUrl: './new-entry-form-reactive.component.html',
  styleUrls: ['./new-entry-form-reactive.component.css'],
})
export class NewEntryFormReactiveComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(ActivatedRoute);
  private route = inject(Router);
  private entryId?: string | null;
  public entryForm!: FormGroup;
  private formBuilder = inject(NonNullableFormBuilder);

  ngOnInit(): void {
    this.entryId = this.router.snapshot.paramMap.get('id');
    if(this.entryId){
      this.exerciseSetsService
        .getItem(this.entryId)
        .subscribe((entry)=> this.updateForm(entry));
    }
    this.entryForm = this.formBuilder.group({
      date: [new Date(),Validators.required],
      exercise: ['', Validators.required],
      sets: [0,[Validators.required, Validators.min(0), multipleValidator(2)]],
      reps: [0,[Validators.required, Validators.min(0), multipleValidator(3)]],
    });
  }

  updateForm(entry: ExerciseSet){
    let {id: _, ...entryForm} = entry;
    this.entryForm.setValue(entryForm);
  }

  newEntry() {
    if(this.entryForm.valid){
      const newEntry = {...this.entryForm.value};
      if(this.entryId){
        this.exerciseSetsService
          .updateItem(this.entryId, newEntry)
          .subscribe((entry)=> this.route.navigate(['/home']));
      }else{
        this.exerciseSetsService
          .addNewItem(newEntry)
          .subscribe((entry) => this.route.navigate(['/home']));
      }
    }
  }
}
