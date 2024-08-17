import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";
import Button from "@mui/material/Button";

function HomePage() {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/jobListings").then((response) => {
      setJobListings(response.data);
    });
  }, []);

  return (
    <div className="homepage-container">
      <h1 className="title">Job Postings</h1>
      <div className="job-cards-container">
        {jobListings.map((job) => (
          <div key={job.id} className="job-card">
            <h3 className="job-title">{job.position}</h3>
            <p className="job-company">
              <strong>Company:</strong> {job.company}
            </p>
            <p className="job-city">
              <strong>Location:</strong> {job.city}
            </p>
            <p className="job-salary">
              <strong>Salary:</strong> {job.salary}
            </p>
            <p className="job-description">
              <strong>Details:</strong> {job.description}
            </p>
            <Button
              style={{ marginTop: "15px" }}
              color="success"
              variant="contained"
            >
              Apply This Job
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
