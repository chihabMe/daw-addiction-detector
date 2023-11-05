import React from 'react'
import IPatient from '../../../../interfaces/IPatient'
interface Props {
    patient:IPatient
}
const PatientItem = ({patient}:Props) => {
  return (
    <div>{patient.first_name}</div>
  )
}

export default PatientItem
