import IPatient from "../../../../interfaces/IPatient";
interface Props {
  patient: IPatient;
}
const PatientItem = ({ patient }: Props) => {
  return (
    <div className="bg-blue-100 rounded-lg p-2 cursor-pointer ">
      <p>name : {patient.user.first_name}</p>
      <p>last name : {patient.user.last_name}</p>
      <p>gender : {patient.user.gender}</p>
      <p>addicion lever : {patient.addiction_level}</p>
      <p>anxiety score  : {patient.anxiety_score}</p>
    </div>
  );
};

export default PatientItem;
