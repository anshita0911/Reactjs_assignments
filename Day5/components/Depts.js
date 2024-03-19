import React from 'react';
import { Link } from 'react-router-dom';

export default function Depts()
 {
                            
    let deptsArray = [
        { Deptno: 10, Dname: "Audit", Loc: "Hyd" },
        { Deptno: 20, Dname: "Innovation", Loc: "Pune" },
        { Deptno: 30, Dname: "GPS", Loc: "Hyd" },
        { Deptno: 40, Dname: "Operations", Loc: "Chennai" },
        { Deptno: 50, Dname: "DAS", Loc: "Hyd" },
        { Deptno: 60, Dname: "Consulting", Loc: "Hyd" }
    ];     
       
	 
        var result = deptsArray.map( item => 
            <tr>  
               <td> {item.Deptno}  </td> 
               <td> {item.Dname}  </td> 
               <td> {item.Loc}  </td>  
            </tr>);

         

      return (
        <div>   
            <h3>All Deptartments</h3>
           
            <table   border="2"  cellPadding="5"  cellSpacing="0" width="500">
                <thead>
                        <tr>
                                <th>Deptno</th>
                                <th>Dname</th>
                                <th>Location</th>
                        </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
                
            </table>
            <br/>  
            

        </div>  );
}
 

 

