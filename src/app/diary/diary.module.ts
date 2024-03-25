import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from './diary/diary.component';
import { EntryItemComponent } from './entry-item/entry-item.component';
import { DiaryRoutingModule } from './diary-routing.module';


@NgModule({
  declarations: [DiaryComponent, EntryItemComponent],
  imports: [
    CommonModule,
    DiaryRoutingModule
  ]
})
export class DiaryModule { }
