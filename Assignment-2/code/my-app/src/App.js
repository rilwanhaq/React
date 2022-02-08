import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
return(
  <div className="container">
  {/* Start your React code here */}
  <div className='profile-image'>
  <img src ={employee.profileImg} alt="profile"/>
  </div>
  <div className='tittle'>
  <h1>{employee.name}</h1>
  </div>
  <div className='profile-info'>
  <label>Location</label>
  <strong>{employee.location}</strong>
  </div>
  <div className='profile-info'>
  <label>BloodGroup</label>
  <strong>{employee.bloodGroup}</strong>
  </div>
  <div className='profile-info'>
  <label>age</label>
  <strong>{employee.age}</strong>
  </div>

</div>
)
}



export default App;
