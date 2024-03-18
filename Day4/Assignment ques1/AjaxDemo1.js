import axios from 'axios';
import { useState } from 'react';

function AjaxDemo1() {

    const [customersArray, setCustomersArray] = useState([]);

    function buttonClick() {
        let url = "https://reqres.in/api/users";
        axios.get(url).then((resData) => {
            console.log(resData.data.records);
            setCustomersArray(resData.data.data);
        });
    }


    var resultArray = customersArray.map((item, index) =>
        <tr key={index}>
            <td> {item.id}  </td>
            <td> {item.email}  </td>
            <td> {item.first_name}  </td>
            <td> {item.last_name}  </td>
            <td> {item.avatar}  </td>
        </tr>);



    return (
        <>
            <h3>Server Communication in React JS</h3>
            <hr />

            <button onClick={buttonClick}>Get Data</button>
            <hr />

            <table border="2" cellpadding="5" cellSpacing="0" width="700">
                <tr>
                    <th>Customer id</th>
                    <th>Customer email</th>
                    <th>Customer First Name</th>
                    <th>Customer Lat Name</th>
                    <th>Customer Avatar</th>
                </tr>
                {resultArray}
            </table>

        </>
    );
}

export default AjaxDemo1;