import React, { useContext } from 'react';
import "./applicationsummary.css";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const ApplicationSummary = () => {
    const applications = useSelector((state) => state.application.applications);
    const applicationId = useParams().id;
    const navigate = useNavigate();

    const application = applications.find((app) => app.jobId === applicationId);

    return (
        <div className='application-summary-container' >
            {/* Job Name and Title */}
            <div >
                <h1></h1>
                <h2>{application.jobName}</h2>
            </div>

            {/* Personal Details Section */}
            <div >
                <h3>Personal Details</h3>
                <p><strong>Name:</strong> {application.applicantName}</p>
                <p><strong>Email:</strong> {application.email}</p>
                <p><strong>Phone Number:</strong> {application.phone}</p>
            </div>

            {/* Experience Section */}
            <div >
                <h3>Experience</h3>
                <p><strong>Experience:</strong> {application.experience} year</p>
                <p><strong>Skills:</strong> {application.skills.map((skill, index)=>(<span key={index}>{skill}</span>))}</p>
            </div>

            {/* Additional Section */}
            <div >
                <h3>Additional Information</h3>
                <p><strong>Cover Letter:</strong> {application.coverLetter}</p>
                <p><strong>Start Date:</strong> {application.startDate}</p>
            </div>

            {/* Edit Button */}
            <button onClick={() => navigate(`/apply/${applicationId}`)} className='edit-button'>
                Edit
            </button>
        </div>
    );
};

export default ApplicationSummary;