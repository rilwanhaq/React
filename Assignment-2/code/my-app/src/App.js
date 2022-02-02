import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
return(
  <div className="container">
  {/* Start your React code here */}
  <img src ={employee.profileImg} alt="profile"/>
  <h1>{employee.name}</h1>
  <p>Location</p>
  <h3>{employee.location}</h3>
  <p>BloodGroup</p>
  <h3>{employee.bloodGroup}</h3>
  <p>age</p>
  <h3>{employee.age}</h3>

</div>
)
}



export default App;
