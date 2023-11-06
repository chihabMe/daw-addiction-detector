import  { useEffect, useState } from "react";
import IPatient from "../../../../interfaces/IPatient";
import PatientItem from "./PatientItem";

const PatientsList = () => {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/patients")
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
        setLoading(false);
        setError("");
      })
      .catch(() => {
        setError("failed to fetch data");
        setLoading(false);
      });
  }, [setPatients]);
  if (loading)
    return (
      <div className="w-full justify-center items-center">
        <h1>loading</h1>
      </div>
    );
  if (error) return <h1 className="text-red-400 font-bold text-xl">{error}</h1>;
  return (
    <ul className=" w-full max-w-screen-lg  py-2  gap-2   mx-auto  grid grid-cols-2  lg:grid-cols-2">
      {patients.map((patient) => (
        <PatientItem key={patient.id} patient={patient} />
      ))}
    </ul>
  );
};

export default PatientsList;
