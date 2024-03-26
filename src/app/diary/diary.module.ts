import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary/diary.component';
import { EntryItemComponent } from './entry-item/entry-item.component';
import { DiaryRoutingModule } from './diary-routing.module';
import { ListEntriesComponent } from './list-entries/list-entries.component';


@NgModule({
  declarations: [DiaryComponent, EntryItemComponent, ListEntriesComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule
  ]
})
export class DiaryModule { }
