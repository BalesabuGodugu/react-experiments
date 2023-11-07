
import './App.css';

const HeaderComponent =()=> { return <header>
  <div className="logo-container">
    <img className="logo" src=""/>
  <h1>JS TechWorld</h1>
  </div>
  <nav>
    <a href="">Home</a>
    <a href="">Courses</a>
    <a href="">Contactus</a>
    <a href="">Aboutus</a>

  </nav>
</header>};

const CourseComponent = () => {
  return (
    <div className="course">
      <img href="" alt="course"/>
      <h2>coursename:</h2>
      <h3>courseduration:</h3>
      <h3>courseprice:</h3>
    </div>
  )
}


const MainComponent = () => {
  return (
    <div className="main">
      
      <div className="course_cotainer">
        <CourseComponent/>
      </div>
    </div>
  )
}

const FooterComponent = () => {
  return (
    <footer>
      <div>footer info</div>
    </footer>
  )
}

function App() {
  return (
    <div>
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
     
    </div>
  );
}

export default App;
