export default interface IPatient {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  created: Date;
  updated: Date;
  user_type:"paitent"|"doctor",
  profile: {
    addiction_level: number;
    average_hours_of_play_per_week: number;
    average_month_of_play: number;
    insomnia_score: number;
    excessive_sleepiness_score: number;
    anxiety_score: number;
    depression_score: number;
  };
}
