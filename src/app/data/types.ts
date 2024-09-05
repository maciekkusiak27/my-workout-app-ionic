export type Exercise = {
  instruction: string;
  weight: string;
  replies: number;
  series: number;
};

export type DayPlan = {
  day: string;
  description: string;
  exercises: Exercise[];
};

export type TrainingPlan = {
  name: string;
  description: string;
  plan: DayPlan[];
};
