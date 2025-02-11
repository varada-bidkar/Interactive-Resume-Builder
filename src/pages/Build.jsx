import React, { useState } from 'react';
import './Build.css';

export default function Build() {
  
    const [activeSection, setActiveSection] = useState("Education");
    const [formData, setFormData] = useState({
      Education: { "School/University": "", "Degree": "", "Year of Graduation": "" },
      Experience: { "Company": "", "Role": "", "Duration": "" },
      Skills: { "Skill Name": "", "Proficiency Level": "" },
      Projects: { "Project Name": "", "Description":"" ,"Technologies Used": "" }
    });
    const [saveMessage, setSaveMessage] = useState("");
    const [errors, setErrors] = useState({});
  
    const sections = [
      { name: "Education", fields: ["School/University", "Degree", "Year of Graduation"] },
      { name: "Experience", fields: ["Company", "Role", "Duration"] },
      { name: "Skills", fields: ["Skill Name", "Proficiency Level"] },
      { name: "Projects", fields: ["Project Name", "Description", "Technologies Used"] }
    ];
  
    const handleInputChange = (section, field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [section]: { ...prevData[section], [field]: value }
      }));
  
      // Clear error when the user starts typing
      setErrors((prevErrors) => ({
        ...prevErrors,
        [section]: { ...prevErrors[section], [field]: "" }
      }));
    };
  
    const handleSave = (section) => {
      const sectionData = formData[section];
      let hasError = false;
      const newErrors = {};
  
      // Validate each field in the section
      for (const field in sectionData) {
        if (sectionData[field].trim() === "") {
          hasError = true;
          newErrors[field] = `${field} is required.`;
        }
      }
  
      if (hasError) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [section]: newErrors
        }));
        setSaveMessage(``);
      } else {
        setSaveMessage(`${section} data saved!`);
        setErrors({}); // Clear errors if save is successful
  
        // Clear save message after 2 seconds
        setTimeout(() => setSaveMessage(""), 2000);
      }
    };
  
    return (
      <div className="app">
        <div className="sidebar">
          {sections.map((section) => (
            <div 
              key={section.name} 
              className={`sidebar-item ${activeSection === section.name ? "active" : ""}`} 
              onClick={() => setActiveSection(section.name)}
            >
              {section.name}
            </div>
          ))}
          <div 
            className={`sidebar-item ${activeSection === "Summary" ? "active" : ""}`} 
            onClick={() => setActiveSection("Summary")}
          >
            Summary
          </div>
        </div>
  
        <div className="content">
          {activeSection === "Summary" ? (
            <div>
              <h2>Summary</h2>
              {Object.entries(formData).map(([section, fields]) => (
                <div key={section} className="summary-section">
                  <h3>{section}</h3>
                  {Object.entries(fields).map(([field, value]) => (
                    <p key={field}><strong>{field}:</strong> {value || "N/A"}</p>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h2>{activeSection}</h2>
              {sections.find(section => section.name === activeSection).fields.map((field, index) => (
                <div key={index} className="input-group">
                  <label>{field}</label>
                  <input
                    type="text"
                    placeholder={`Enter your ${field.toLowerCase()}`}
                    value={formData[activeSection][field]}
                    onChange={(e) => handleInputChange(activeSection, field, e.target.value)}
                  />
                  {errors[activeSection] && errors[activeSection][field] && (
                    <p className="error-message">{errors[activeSection][field]}</p>
                  )}
                </div>
              ))}
              <button onClick={() => handleSave(activeSection)} className="save-button">Save</button>
              {saveMessage && <p className="save-message">{saveMessage}</p>}
            </div>
          )}
        </div>
      </div>
    );
  }
  