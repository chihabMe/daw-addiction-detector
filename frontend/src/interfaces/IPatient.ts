export default interface IPatient {
  addiction_level: number;
  average_hours_of_play_per_week: number;
  average_month_of_play: number;
  insomnia_score: number;
  excessive_sleepiness_score: number;
  anxiety_score: number;
  depression_score: number;
  user: IUser;
}
