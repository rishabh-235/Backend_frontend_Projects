import React, { useContext, useState } from "react";
import "./experience.css";
import FormDateContext from "../ContextAPI/FormDataProvider";
import * as yup from "yup";

const Experience = ({ setStep, application }) => {
  const [experience, setExperience] = useState(application?.experience || "");
  const array = application?.skills || [];
  const [skills, setSkills] = useState([...array]);
  const [newSkill, setNewSkill] = useState("");
  const { dispatch } = useContext(FormDateContext);
  const schema = yup.object({
    experience: yup.number().required("Experience is required"),
    skills: yup
      .array()
      .of(yup.string().required("Skill cannot be empty"))
      .min(1, "At least one skill is required")
      .required(),
  });
  const [errors, setErrors] = useState({
    experience: "",
    skills: "",
  });

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleSkillChange = (e) => {
    setNewSkill(e.target.value);
  };

  const addSkillField = (e) => {
    e.preventDefault();
    const isDuplicate = skills.some(
      (skill) => skill.toLowerCase() === newSkill.toLowerCase()
    );
    if (isDuplicate || newSkill.trim() === "") {
      setNewSkill("");
      return;
    }
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };

  const removeSkillField = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate({ experience, skills }, { abortEarly: false });
    } catch (error) {
      const validationErrors = error.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setErrors(validationErrors);
      return;
    }

    dispatch({
      type: "experience",
      experience: {
        experience,
        skills,
      },
    });
    setStep(2);
  };

  return (
    <div className="experience-container">
      <h1>Experience Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="experience">Experience (in years): </label>
          <input
            style={{ border: errors.experience ? "1px solid red" : "" }}
            type="number"
            id="experience"
            value={experience}
            onChange={handleExperienceChange}
          />
          {errors.experience && (
            <p className="error-message">{errors.experience}</p>
          )}
        </div>
        <div>
          <label>Skills:</label>
          <div style={{ marginBottom: "8px" }}>
            <input
              style={{ border: errors.skills ? "1px solid red" : "" }}
              type="text"
              value={newSkill}
              onChange={handleSkillChange}
              placeholder="Enter skill"
            />
            {errors.skills && <p className="error-message">{errors.skills}</p>}
          </div>

          <button className="add-skill-btn" onClick={addSkillField}>
            Add Skill
          </button>

          <div className="skills-list">
            {skills.length === 0 && <p>No skills added yet.</p>}
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-btn">{skill}</div>
                <button
                  onClick={() => removeSkillField(index)}
                  className="remove-skill-btn"
                >
                  -
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Experience;
