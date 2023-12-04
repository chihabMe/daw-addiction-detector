interface IUser {
  id:string;
  email: string;
  image:string;
  address:string;
  first_name: string;
  last_name: string;
  phone: string;
  gender: "M" | "F";
  user_type:"PATIENT"|"DOCTOR",
  created: string;
  updated: string;
  is_active: boolean;
  is_staff: boolean;
  country:string;
  city:string;

}

interface GENDER_CHOICES {
  M: "male";
  F: "female";
}
