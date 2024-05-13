/* eslint-disable react/prop-types */

function Card(props) {
  return (
    <div className="job-container">
      <h3 className="employer">Employer :</h3>
      <p className="details name">{props.employer}</p>
      <h3 className="dates">Date :</h3>
      <p className="details date">{props.date}</p>
      <h3 className="work-place">Address :</h3>
      <p className="details address">{props.address}</p>
      <h3 className="role">Role :</h3>
      <p className="details work">{props.position}</p>
    </div>
  );
}

export default Card;