import React, { useState } from "react";
function Worker() {
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [yearBirth, setYearBirth] = useState(0)
    let [city, setCity] = useState("")
    let [genus, setGenus] = useState("")
    let [isPassed, setIsPssed] = useState(false)
    let [array, setArray] = useState([])

    function firstNamec(e) { firstName = e.target.value }
    function lastNamec(e) { lastName = e.target.value }
    function yearBirthc(e) { yearBirth = e.target.value }
    function cityc(e) { city = e.target.value }
    function genusc(e) { genus = e.target.value }
    function isPassedc(e) { isPassed = e.target.value }

function StartAll() {
        setFirstName(firstName)
        setLastName(lastName)
        setYearBirth(yearBirth)
        setCity(city)
        setGenus(genus)
        setIsPssed(isPassed)
        alert("the user added")
        array.push({firstName:firstName,lastName:lastName,yearBirth:yearBirth,city:city,genus:genus,isPassed:isPassed })
        setArray(array)
}
function ConvertToTable() {
return (
        <table>
                <tr>
                    <th>שם פרטי</th>
                    <th>שם משפחה</th>
                    <th>תאריך לידה</th>
                    <th>עיר</th>
                    <th>מין</th>
                    <th>הדרכה</th>
                </tr>
                {array.map((item) => (
                    <tr>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.yearBirth}</td>
                        <td>{item.city}</td>
                        <td>{item.genus}</td>
                        <td>{item.isPassed}</td>
                    </tr>
                ))}
        </table>
)}
function typee(e) {
if (genus.target.value="woman" || genus.target.value=="אישה") {
    e.target.parentElement.children[0].innerText=":הכניסי שם פרטי"
    e.target.parentElement.children[2].innerText=":הכניסי שם משפחה"
    e.target.parentElement.children[4].innerText=":הכניסי תאריך לידה"
}
}

    return (
        <div>
            <form action="">
                <label htmlFor="">:הכנס שם פרטי</label><br/>
                <input type="text" onChange={firstNamec} /><br/>
                <label htmlFor="">:הכנס שם משפחה</label><br/>
                <input type="text" onChange={lastNamec} /><br/>
                <label htmlFor="">:הכנס תאריך לידה</label><br/>
                <input type="text" onChange={yearBirthc}/><br/>
                <label htmlFor="">:עיר</label><br/>
                <input type="text" onChange={cityc}/><br/>
                <label htmlFor="">:מין</label><br/>
                <input type="text" onChange={genusc,typee} /><br/>
                <label htmlFor="">:האם עברת הדרכה</label><br/>
                <input type="text" onChange={isPassedc} /><br/>
            </form>
            <button onClick={StartAll}>SEND</button><br /><br/>
            <ConvertToTable />
        </div>
    )
}
export default Worker;