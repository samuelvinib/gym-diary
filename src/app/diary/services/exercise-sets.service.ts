import { Injectable, inject } from '@angular/core';
import { ExerciseSet, ExerciseSetList } from '../interfaces/exercise-set';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ExerciseSetListApi{
  hasNext: boolean;
  items: ExerciseSetList;
}

@Injectable({
  providedIn:'root'
})
export class ExerciseSetsService {
  constructor() {}

  private httpClient = inject(HttpClient);
  private url = 'http://localhost:3000/diary';
  getInitialList() : Observable<ExerciseSetListApi>{
    return this.httpClient.get<ExerciseSetListApi>(this.url);
  }

  refreshList(): Observable<ExerciseSetListApi>{
    return this.httpClient.get<ExerciseSetListApi>(this.url);
  }

  addNewItem(item: ExerciseSet): Observable<ExerciseSet> {
    return this.httpClient.post<ExerciseSet>(this.url,item);
  }

  updateItem(id: string, item: Partial<ExerciseSet>): Observable<ExerciseSet>{
    return this.httpClient.put<ExerciseSet>(`${this.url}/${id}`, item);
  }

  deleteItem(id: string): Observable<boolean>{
    return this.httpClient.delete<boolean>(`${this.url}/${id}`);
  }

  getItem(id: string): Observable<ExerciseSet> {
    return this.httpClient.get<ExerciseSet>(`${this.url}/${id}`)
  }
}
