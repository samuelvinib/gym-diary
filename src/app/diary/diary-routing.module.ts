import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
import { NewEntryFormTemplateComponent } from './new-entry-form-template/new-entry-form-template.component';
import { NewEntryFormReactiveComponent } from './new-entry-form-reactive/new-entry-form-reactive.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'home'},
  {
    path:'',
    component:DiaryComponent,
    title: 'Diary'
  },
  {
    path:'new-template',
    component: NewEntryFormTemplateComponent,
  },
  {
    path:'entry',
    component: NewEntryFormReactiveComponent,
    title: 'Entry Form'
  },
  {
    path:'entry/:id',
    component: NewEntryFormReactiveComponent,
    title: 'Edit Entry'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiaryRoutingModule { }
