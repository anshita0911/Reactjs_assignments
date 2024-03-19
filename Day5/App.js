import logo from './logo.svg';
import './App.css';
import React from 'react';
import Demo from './Demo';
import EventHandling from './EventHandling';
import Login from './Login';
import DeptArrayCrud from './DeptArrayCrud';
import Product_1 from './Product_1';
import Emp_2 from './Emp_2';
import AjaxDemo1 from './components/AjaxDemo1';
import AjaxDemo3 from './components/AjaxDemo3';

//import photo from './teams_photo.jpg';

function App()
{
  return (
    <div style={{textAlign:"center"}} >
        <h3>My website using React JS</h3>          
        <img src="/Images/Banner.jpg" width="90%" height="250" alt="Alternate text" />               
   </div>  
  );
}
//   let usersArray  =  [{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},			
//   {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},			
//   {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},			
//   {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},			
//   {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},			
//   {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}
// ];
// let resultsArray = usersArray.map(item =>  
//   <tr>
//     <td>{item.id}</td>
//     <td>{item.email}</td>
//     <td>{item.first_name}</td>
//     <td>{item.last_name}</td>
//     <td>{item.avatar}</td>
//   </tr> );


// let imageArray  =  [{"avatar":"./Images/dog1.jpg"},			
//   {"avatar":"./Images/dog2.jpg"},			
//   {"avatar":"./Images/dog3.jpg"},			
 
// ];
// let resArray = imageArray.map(item =>  
//   <tr>
    
//     <td>{item.avatar}</td>
//   </tr> );

//   let empno=1;
//   let empname="Anshita";
//   let job="Developer";
//   let sal=25000;
//   let dept="DAS";

//   return (
//     <>
//     <hr/>

// <table  border="2" width="800">
 
//   <tr>
//     <th>Id</th>
//     <th>Email</th>
//     <th>First Name</th>
//     <th>Lat Name</th>
//     <th>Avatar </th>
//   </tr>

//   {resultsArray}

// </table>
// <hr/>
// <br/>
// <table  border="2" width="500">
 
//   <tr>
    
//     <th>Avatar </th>
//   </tr>

//   {resArray}

// </table>

// <hr/>
// <br/>
//       <table border="1" >
//         <tr align='center'>
//             <th>Empno</th>
//             <th>Empname</th>
//             <th>Job</th>
//             <th>Salary</th>
//             <th>Deptno</th>
//         </tr>
//         <tr align='center'>
//             <td>{empno}</td>
//             <td>{empname} Banthia</td>
//             <td>{job}</td>
//             <td>{sal}</td>
//             <td>{dept}</td>
            
//         </tr>
       
//     </table>

//     <div>
//       <h1>Welcome here</h1>
      
      
//       <img  width="300" height="300" src="./Images/teams_photo.jpg"/>
    
//     </div>
     
//       </>
//   );
// }

export default App;
