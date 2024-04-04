import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary/diary.component';
import { EntryItemComponent } from './entry-item/entry-item.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { ListEntriesComponent } from './list-entries/list-entries.component';
import { NewItemButtonComponent } from './new-item-button/new-item-button.component';
import { NewEntryFormTemplateComponent } from './new-entry-form-template/new-entry-form-template.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewEntryFormReactiveComponent } from './new-entry-form-reactive/new-entry-form-reactive.component';

@NgModule({
  declarations: [
    DiaryComponent,
    EntryItemComponent,
    ListEntriesComponent,
    NewItemButtonComponent,
    NewItemButtonComponent,
    NewEntryFormTemplateComponent,
    NewEntryFormReactiveComponent,
  ],
  imports: [CommonModule, DiaryRoutingModule, RouterModule, FormsModule],
})
export class DiaryModule {}
