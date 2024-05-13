import jobs from "../../jobs";
import Card from "./Card";

function Job() {
  return (
    <div className="big-job-screen-container">
      {jobs.map((job) => (
        <Card
          key={job.key}
          employer={job.employer}
          address={job.address}
          date={job.date}
          position={job.position}
        />
      ))}
    </div>
  );
}

export default Job;