import Job from "./sub-components/Job"
import Info from "./sub-components/Info"
import School from "./sub-components/Education";
import Skill from "./sub-components/Skills";
import Award from "./sub-components/Awards";

function Body() {
  return (
    <div>
      <div id="body-container">
        <h2 title="Experience" className="glitch">Experience</h2>
        <Job />
      </div>
      <div className="body-container-two">
        <h2 title="Education" className="glitch second">Education</h2>
        <School />
        <h2 title="Skills" className="glitch second">Skills</h2>
        <Skill />
        <h2 title="Awards" className="glitch second">Awards</h2>
        <Award />
        <h2 title="Contact" className="glitch second">Contact</h2>
        <Info />
      </div>
    </div>
  );
}

export default Body;