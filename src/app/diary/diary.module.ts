import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary/diary.component';
import { EntryItemComponent } from './entry-item/entry-item.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { ListEntriesComponent } from './list-entries/list-entries.component';
import { NewItemButtonComponent } from './new-item-button/new-item-button.component';


@NgModule({
  declarations: [DiaryComponent, EntryItemComponent, ListEntriesComponent, NewItemButtonComponent, NewItemButtonComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule
  ]
})
export class DiaryModule { }
