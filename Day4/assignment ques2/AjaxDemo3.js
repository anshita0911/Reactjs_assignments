// import { useState } from "react";
// import { dataServiceObj } from "../services/data.service";


// function AjaxDemo3() {
//     const [deptsArray, setDeptsArray] = useState([]);

//     // For reading data from user through textboxes
//     const [deptno, setDeptno] = useState("");
//     const [dname, setDname] = useState("");
//     const [loc, setLoc] = useState("");

//     function getDeptsButton_click() {

//         dataServiceObj.getAllDepartments().then((resData) => {
//             setDeptsArray(resData.data);
//         });
//     }


//     function addDeptButton_click() {
//         let deptObj = {};
//         deptObj.deptno = deptno;
//         deptObj.dname = dname;
//         deptObj.loc = loc;

//         dataServiceObj.addDept(deptObj).then((resData) => {
//             alert("New Dept added to Server");
//             getDeptsButton_click(); // get the latest data from server
//             clearFields();
//         });
//     }

//     function clearFields() {
//         setDeptno("");
//         setDname("");
//         setLoc("");
//     }


//     function deleteDept_click(dno) {
//         dataServiceObj.deleteDept(dno).then((resData) => {
//             alert("Dept details are deleted from Server");
//             getDeptsButton_click(); // get the latest data from server            
//         });

//     }

//     function selectDept_click(dno) {

//         dataServiceObj.getDeptById(dno).then((resData) => {
//             let deptObj = resData.data;
//             setDeptno(deptObj.deptno);
//             setDname(deptObj.dname);
//             setLoc(deptObj.loc);
//         });
//     }

//     function updateDeptButton_click() {
//         let deptObj = {};
//         deptObj.deptno = deptno;
//         deptObj.dname = dname;
//         deptObj.loc = loc;

//         dataServiceObj.updateDept(deptObj).then((resData) => {
//             alert("Dept details are updated in Server");
//             getDeptsButton_click(); // get the latest data from server
//             clearFields();
//         });
//     }

//     let resultArray = deptsArray.map((item, index) => {
//         return <tr key={index}>
//             <td>   {item.deptno}  </td>
//             <td>   {item.dname}  </td>
//             <td>   {item.loc}  </td>
//             <td>
//                 <a onClick={() => selectDept_click(item.deptno)} href="javascript:void(0);">Select</a> |
//                 <a onClick={() => deleteDept_click(item.deptno)} href="javascript:void(0);">Delete</a>
//             </td>
//         </tr>
//     });


//     return (<>

//         <h3>Perform CRUD Operations using JSON-Server in React Application</h3>
//         <hr />

//         <input type="text" placeholder="Dept Number" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
//         <input type="text" placeholder="Dept Name" value={dname} onChange={(e) => setDname(e.target.value)} />
//         <input type="text" placeholder="Dept Location" value={loc} onChange={(e) => setLoc(e.target.value)} />
//         <hr />

//         <input type="button" onClick={getDeptsButton_click} value="Get Depts" />
//         <input type="button" onClick={addDeptButton_click} value="Add Dept" />
//         <input type="button" onClick={updateDeptButton_click} value="Update Dept" />
//         <hr />

//         <table border="2" width="500" cellspacing="0" cellpadding="5">
//             <tr>
//                 <th>Dept Number</th>
//                 <th>Dept Name</th>
//                 <th>Location</th>
//                 <th></th>
//             </tr>
//             {resultArray}
//         </table>

//     </>);
// }

// export default AjaxDemo3;



import { useState } from "react";
import { dataServiceObj } from "C:/Users/abanthia/Downloads/react_assignments/my-project/src/services/data.services.js";


function AjaxDemo3() {
    const [empsArray, setEmpsArray] = useState([]);

    // For reading data from user through textboxes
    const [empno, setEmpno] = useState("");
    const [ename, setEname] = useState("");
    const [job, setJob] = useState("");
    const [sal, setSal] = useState("");
    const [deptno, setDeptno] = useState("");

    function getEmpsButton_click() {

        dataServiceObj.getAllEmployees().then((resData) => {
            setEmpsArray(resData.data);
        });
    }


    function addEmpButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;

        dataServiceObj.addEmp(empObj).then((resData) => {
            alert("New Employee is added to Server");
            getEmpsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    function clearFields() {
        setEmpno("");
        setEname("");
        setJob("");
        setSal("");
        setDeptno("");
    }


    function deleteEmp_click(eno) {
        dataServiceObj.deleteEmp(eno).then((resData) => {
            alert("Emp details are deleted from Server");
            getEmpsButton_click(); // get the latest data from server            
        });

    }

    function selectEmp_click(eno) {

        dataServiceObj.getEmpById(eno).then((resData) => {
            let empObj = resData.data;
            setEmpno(empObj.empno);
            setEname(empObj.ename);
            setJob(empObj.job);
            setSal(empObj.sal);
            setDeptno(empObj.deptno);
        });
    }

    function updateEmpButton_click() {
        let empObj = {};
        empObj.empno = empno;
        empObj.ename = ename;
        empObj.job = job;
        empObj.sal = sal;
        empObj.deptno = deptno;

        dataServiceObj.updateEmp(empObj).then((resData) => {
            alert("Emp details are updated in Server");
            getEmpsButton_click(); // get the latest data from server
            clearFields();
        });
    }

    let resultArray = empsArray.map((item, index) => {
        return <tr key={index}>
            <td>   {item.empno}  </td>
            <td>   {item.ename}  </td>
            <td>   {item.job}  </td>
            <td>   {item.sal}  </td>
            <td>   {item.deptno}  </td>
            <td>
                <a onClick={() => selectEmp_click(item.empno)} href="javascript:void(0);">Select</a> |
                <a onClick={() => deleteEmp_click(item.empno)} href="javascript:void(0);">Delete</a>
            </td>
        </tr>
    });


    return (<>

        <h3>Perform CRUD Operations using JSON-Server in React Application</h3>
        <hr />

        <input type="text" placeholder="Emp Number" value={empno} onChange={(e) => setEmpno(e.target.value)} />
        <input type="text" placeholder="Emp Name" value={ename} onChange={(e) => setEname(e.target.value)} />
        <input type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
        <input type="text" placeholder="Sal Number" value={sal} onChange={(e) => setSal(e.target.value)} />
        <input type="text" placeholder="Dept Number" value={deptno} onChange={(e) => setDeptno(e.target.value)} />
        <hr />

        <input type="button" onClick={getEmpsButton_click} value="Get Emps" />
        <input type="button" onClick={addEmpButton_click} value="Add Emp" />
        <input type="button" onClick={updateEmpButton_click} value="Update Emp" />
        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Emp Number</th>
                <th>Emp Name</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Dept Number</th>
                <th></th>
            </tr>
            {resultArray}
        </table>

    </>);
}

export default AjaxDemo3;