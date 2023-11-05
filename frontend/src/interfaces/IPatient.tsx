
export default interface IPatient{
    first_name :string;
    last_name :string;
    id:number;
    email:string;
    phone :string;
    gender:string;
    is_active:boolean;
    created :Date;
    updated :Date;
    addiction_level :number;
    average_hours_of_play_per_week :number;
    average_month_of_play :number;
    insomnia_score:number;
    excessive_sleepiness_score :number;
    anxiety_score :number;
    depression_score :number
}
