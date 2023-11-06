interface IUser {
  id:string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  gender: "M" | "F";
  created: string;
  updated: string;
  is_active: boolean;
  is_staff: boolean;
}

interface GENDER_CHOICES {
  M: "male";
  F: "female";
}
