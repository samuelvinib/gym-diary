import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ExerciseSetsService } from '../services/exercise-sets.service';
import { Router } from '@angular/router';
import { multipleValidator } from './custom-validation';

@Component({
  selector: 'app-new-entry-form-reactive',
  templateUrl: './new-entry-form-reactive.component.html',
  styleUrls: ['./new-entry-form-reactive.component.css'],
})
export class NewEntryFormReactiveComponent implements OnInit {
  private exerciseSetsService = inject(ExerciseSetsService);
  private router = inject(Router);
  public entryForm!: FormGroup;
  private formBuilder = inject(NonNullableFormBuilder);

  ngOnInit(): void {
    this.entryForm = this.formBuilder.group({
      date: [new Date(),Validators.required],
      exercise: ['', Validators.required],
      sets: [0,[Validators.required, Validators.min(0), multipleValidator(2)]],
      reps: [0,[Validators.required, Validators.min(0), multipleValidator(3)]],
    });
  }

  newEntry() {
    if(this.entryForm.valid){
      const newEntry = {...this.entryForm.value};
      this.exerciseSetsService
        .addNewItem(newEntry)
        .subscribe((entry)=> this.router.navigate(['/home']));
    }
  }
}
