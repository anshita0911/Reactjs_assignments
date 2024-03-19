import React  from 'react';
import { Link, useParams } from 'react-router-dom';

function Details(props)
{     
    const {id} = useParams();
  
    let empsArray =  [
      { deptno: 3, empno: 1, ename: "Anshita", job: "Dev1", sal : 25000 },
      { deptno: 4, empno: 2, ename: "Meetha", job: "Dev2", sal : 25000 },
      { deptno: 6, empno: 3, ename: "Snigdha", job: "Dev3", sal : 25000 },
      { deptno: 10, empno: 4, ename: "Deepika", job: "Dev4", sal : 25000 }
   ];

   let empObj =  empsArray.find(item => item.empno == id); 
 
    return (
    <div>
     <h3>Selected Employee Details</h3>       
     <hr/>
     <div>
        Employee Number :  {empObj.empno}  <br/>
         Employee Name :  {empObj.ename}  <br/>
         Employee Job :  {empObj.job}  <br/>
         Employee Deptno :  {empObj.deptno}  <br/>  
     </div>
        <hr/>
      <Link  to="/Emps">Back to Employees</Link> 
    </div> 
    );
   
}  

export default Details;