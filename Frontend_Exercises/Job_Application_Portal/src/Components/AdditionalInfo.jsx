import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./additionalinfo.css";
import FormDateContext from "../ContextAPI/FormDataProvider";
import { useDispatch } from "react-redux";
import {
  addApplication,
  editApplication,
} from "../Redux/State/ApplicationSlice";
import JobsContext from "../ContextAPI/JobsProvider";
import * as yup from "yup";

const AdditionalInfo = ({ application }) => {
  const [fileUrl, setFileUrl] = useState(application?.coverLetter || "");
  const [startDate, setStartDate] = useState(application?.startDate || null);
  const navigate = useNavigate();
  const { state } = useContext(FormDateContext);
  const dispatch = useDispatch();
  const { jobs } = useContext(JobsContext);
  const schema = yup.object({
    fileUrl: yup.string().required("File is required"),
    startDate: yup.date().required("Start date is required"),
  });
  const [errors, setErrors] = useState({
    fileUrl: "",
    startDate: "",
  });

  const handleFileChange = (e) => {
    setFileUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const jobId = useParams().id;
  const job = jobs.find((job) => jobId === job.id);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate({ fileUrl, startDate }, { abortEarly: false });
    } catch (error) {
      const validationErrors = error.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setErrors(validationErrors);
      return;
    }

    dispatch(
      editApplication({
        jobId,
        jobName: job.title,
        company: job.company,
        applicantName: state.personalInfo.username,
        email: state.personalInfo.email,
        phone: state.personalInfo.phone,
        experience: state.experience.experience,
        skills: state.experience.skills,
        coverLetter: fileUrl,
        startDate: startDate,
      })
    );
    navigate(`/applications/${jobId}`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate({ fileUrl, startDate }, { abortEarly: false });
    } catch (error) {
      const validationErrors = error.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setErrors(validationErrors);
      return;
    }

    dispatch(
      addApplication({
        jobId,
        jobName: job.title,
        company: job.company,
        applicantName: state.personalInfo.username,
        email: state.personalInfo.email,
        phone: state.personalInfo.phone,
        experience: state.experience.experience,
        skills: state.experience.skills,
        coverLetter: fileUrl,
        startDate: startDate,
      })
    );
    navigate(`/applications/${jobId}`);
  };

  return (
    <div className="additional-info-container">
      <h1>Additional Information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="coverLetter">Upload Cover Letter (PDF): </label>
          <input
            style={{ border: errors.fileUrl ? "1px solid red" : "" }}
            type="file"
            id="coverLetter"
            accept="application/pdf"
            onChange={handleFileChange}
          />
          {errors.fileUrl && <p className="error-message">{errors.fileUrl}</p>}
        </div>
        <div>
          <label htmlFor="startDate">Starting Date: </label>
          <input
            style={{ border: errors.startDate ? "1px solid red" : "" }}
            type="date"
            id="startDate"
            value={startDate?startDate:""} 
            onChange={handleDateChange}
          />
          {errors.startDate && (
            <p className="error-message">{errors.startDate}</p>
          )}
        </div>
        {application ? (
          <button onClick={handleEdit}>Edit</button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
    </div>
  );
};

export default AdditionalInfo;
