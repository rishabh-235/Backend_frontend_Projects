import React, { useState } from "react";
import PersonalInfo from "../Components/PersonalInfo";
import Experience from "../Components/Experience";
import AdditionalInfo from "../Components/AdditionalInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ApplicationForm() {
  const [step, setStep] = useState(0);
  const applications = useSelector((state) => state.application.applications);
  const jobId = useParams().id;
  const application = applications.find((job) => job.jobId === jobId);
  return (
    <>
      {step===0 && <PersonalInfo setStep={setStep} application={application} />}
      {step===1 && <Experience setStep={setStep} application={application} />}
      {step===2 && <AdditionalInfo setStep={setStep} application={application} />}
    </>
  );
}

export default ApplicationForm;
