import React from "react";
import IPatient from "../../../../interfaces/IPatient";
interface Props {
  patient: IPatient;
}
const PatientItem = ({ patient }: Props) => {
  console.log(patient);
  return (
    <div className="bg-blue-100 rounded-lg p-2 cursor-pointer ">
      <p>name : {patient.first_name}</p>
      <p>last name : {patient.last_name}</p>
      <p>gender : {patient.gender}</p>
      <p>addicion lever : {patient.addiction_level}</p>
      <p>anxiety score  : {patient.anxiety_score}</p>
      <p> insomnia score   : {patient.insomnia_score}</p>
    </div>
  );
};

export default PatientItem;
