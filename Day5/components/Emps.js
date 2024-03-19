import React from 'react';
import { Link } from 'react-router-dom';
import './Emps.css';

export default  function Emps()
{  
    let emps = [
            { deptno: 3, empno: 1, ename: "Anshita", job: "Dev1", sal : 25000 },
            { deptno: 4, empno: 2, ename: "Meetha", job: "Dev2", sal : 25000 },
            { deptno: 6, empno: 3, ename: "Snigdha", job: "Dev3", sal : 25000 },
            { deptno: 10, empno: 4, ename: "Deepika", job: "Dev4", sal : 25000 },
            { deptno: 3, empno: 1, ename: "Anshita", job: "Dev1", sal : 25000 },
            { deptno: 4, empno: 2, ename: "Meetha", job: "Dev2", sal : 25000 },
            { deptno: 6, empno: 3, ename: "Snigdha", job: "Dev3", sal : 25000 },
            { deptno: 10, empno: 4, ename: "Deepika", job: "Dev4", sal : 25000 }
        ];
 

    
 
        var result = emps.map( (item, index) => 
            <tr className={ index % 2 == 0?"c2":"c3" } >  
               <td> {item.empno}  </td> 
               <td> {item.ename}  </td> 
               <td> {item.job}  </td> 
               <td> {item.deptno}  </td> 
               <td align='center'>
                     <Link to={"/Details/" + item.empno}>Details</Link>
               </td>
            </tr>);

      return (
        <div>             
            <h3>All Employee Details</h3>
            <table  border="2"  cellpadding="5"  cellSpacing="0" width="700">
                <tr className="c1">
                    <th>Emp Number</th>
                    <th>Emp Name</th>
                    <th>Emp Job</th>
                    <th>Emp Deptno</th>    
                    <th></th>                
                </tr>
                {result}
            </table>
        </div>  );
    }
 

 