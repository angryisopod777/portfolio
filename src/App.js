import logo from './logo.svg';
import './App.css';
import 'react-bootstrap/Nav'
import 'react-bootstrap/Row'
import 'react-bootstrap/Col'
import 'react-bootstrap/Card'
import 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

const handleClick = (myLink) => () => {
  window.location.href=myLink;
}
function App() {
  return (
    <div className="App">

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="#">UIUX Portfolio</a>
		<div class="collapse navbar-collapse">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item"><a class="nav-link" href="#objective">About me</a></li>
				{/* <li class="nav-item"><a class="nav-link" href="#interface">Work Experience</a></li> */}
				<li class="nav-item"><a class="nav-link" href="#interviews">Design Projects</a></li>
			</ul>
		</div>
	</div>
</nav>
<div class="d-flex flex-column justify-content-center align-items-center top-pane">
	<h1>UIUX Portfolio</h1>
</div>
<section id="AboutMe">
      <div class="container content-section rounded-pill">
        <div class="row">
          <div class="col-lg-12 mb-5 mt-5">
            <h2 class="assignment-title">About me</h2>
          </div>
        </div>
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-xl-6 col-lg-6 col-md-8 col-sm-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div class="row">
          <div class="col-lg-12 mb-5 mt-5">
            <h2 class="assignment-title">Design Projects</h2>
          </div>
        </div>
    <div id="interviews" class="container-fluid dream">
	<div class="row px-md-3 px-lg-5 pt-3 pt-md-5 justify-content-center">
		<div class="col-md-6 col-xl-5 col-xxl-4 mb-4">
			<div class="card" onClick={handleClick("https://angryisopod777.github.io/personas-assignment/")}>
				<div class="card-header">
					<h3>Boba Ordering Interface Storyboarding</h3>
				</div>
				<div class="card-body lead">
					{/* <p class="card-text">The goal of this project was to understand the typical users of
          the boba ordering interface and create personas and storyboards from their experiences.
					</p> 
          <a href="https://angryisopod777.github.io/personas-assignment/">Learn More</a> */}
          <img src="./Annika.png" class="card-img-top card-img-height" alt="..." />
				</div>
			</div>
		</div>
		<div class="col-md-6 col-xl-5 col-xxl-4 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h3>Fahsion Rental Service Website</h3>
				</div>
				<div class="card-body lead">
					{/* <p class="card-text">The observations below were gathered from unsuspecting Boba tea shop customers.</p> */}
				</div>
			</div>
		</div>
    <div class="col-md-6 col-xl-5 col-xxl-4 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h3>Customizable Lofi Music Player</h3>
				</div>
				<div class="card-body lead">
					{/* <p class="card-text">The observations below were gathered from unsuspecting Boba tea shop customers.</p> */}
				</div>
			</div>
		</div>
    <div class="col-md-6 col-xl-5 col-xxl-4 mb-4">
			<div class="card h-100">
				<div class="card-header">
					<h3>Website Redesign</h3>
				</div>
				<div class="card-body lead">
					{/* <p class="card-text">The observations below were gathered from unsuspecting Boba tea shop customers.</p> */}
				</div>
			</div>
		</div>
	</div>
</div>


{/* <div id="objective" class="container-fluid bg-white">
	<div class="container">
		<h3 class="pb-4">Mission Objective</h3>
		
		<p class="lead">Oh no! Aliens have discovered Earth! We all knew it would happen eventually but we're all still terrified. 
			But, behold! They offer to make us a deal. They explain that they will refrain from destroying our planet if we provide them
			sufficient resources to understand how our most coveted resource, Boba tea, can be ordered without any human interaction.
			Naturally, we take them up on this offer, promising to provide as many ways as possible for them to step into our shoes and understand
			the glories, and hardships, of our contactless boba ordering interface.
		</p>
		<br></br>
	</div>
</div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

export default App;
