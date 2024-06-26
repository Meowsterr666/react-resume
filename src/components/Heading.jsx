import pic from "../../images/pic.png"

function Heading() {
  return(
    <div>
      <nav id="menu-nav">
        <a className="menu-item" href="#">Home</a>
        <a className="menu-item" href="#body-container">About</a>
        <a className="menu-item" href="#detail-container">Contact</a>
      </nav>
      <div className="second-heading">
        <h1>Hello!</h1>
        <div className="glitch">
          <h1 title="I'm Abel Pineda">I&#39;m Abel Pineda</h1>
          <img src={pic} alt="logo"/>
        </div>
        <div>
          <h1>Summary</h1>
          <p className="summary-p">I am a fast learner who adapts well in my surrounding environment whether at home or at work. I am hard working always there to do the job&#39;s responsibilities and passionate daily in anything I do.</p>
        </div>
      </div>
    </div>
  );
}

export default Heading;