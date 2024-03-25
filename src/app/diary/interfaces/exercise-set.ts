export interface ExerciseSet {
  id?: string;
  date: Date;
  exercise: string;
  sets: number;
  reps: number;
}
export type ExerciseSetList = Array<ExerciseSet>;
