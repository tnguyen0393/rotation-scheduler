import React, { useState } from "react";
import "../../css/bootstrap.css";

const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [militaryBranch, setMilitaryBranch] = useState("")
  const [departmentOfDefenseId, setDepartmentOfDefenseId] = useState("")
  const [gradYear, setGradYear] = useState("")

  const submitButtonHandler = (e) => {
    e.preventDefault()

    const residencyInfo = {
        formValues: {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            military_branch: militaryBranch,
            dept_of_def_id: departmentOfDefenseId,
            grad_year: gradYear
        }
    }

    console.log(residencyInfo)

    fetch("/processResidencyInfo", {
        method: "POST",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify(residencyInfo)
    }).then((response) => {
        if (response.ok) {
            console.log("SUCCESS")
        } else {
            console.log("FAILED")
        }
        return response.json(); //This will give back any json object the server responds with
    })
  }

  const updateInfo = (e) => {
    let name = e.target.name
    let value = e.target.value
    console.log(name)
    
    switch(name) {
        case 'firstName':
            setFirstName(value)
            break;
        case 'lastName':
            setLastName(value)
            break;
        case 'phoneNumber':
            setPhoneNumber(value)
            break;
        case 'militaryBranch':
            setMilitaryBranch(value)
            break;
        case 'deptOfDefenseId':
            console.log("THIS WORKS")
            setDepartmentOfDefenseId(value)
            break;
        case 'gradYeaar':
            setGradYear(value)
            break;
        default:
            console.log("STATE NAME DOES NOT EXIST")
    }
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstNameInput">First Name</label>
        <input
          type="text"
          className="form-control"
          id="firstNameInput"
          placeholder="First Name"
          name="firstName"
          onChange={updateInfo}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastNameInput">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="lastNameInput"
          placeholder="Last Name"
          name="lastName"
          onChange={updateInfo}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumInput">Phone Number</label>
        <input
          type="text"
          className="form-control"
          id="phoneNumInput"
          placeholder="Phone Number"
          name="phoneNumber"
          onChange={updateInfo}
        />
      </div>
      <div className="form-group">
        <label htmlFor="militaryBranchInput">Military Branch</label>
        <select className="form-control" id="militaryBranchInput" name="militaryBranch" onChange={updateInfo}>
            <option value="army">Army</option>
            <option value="navy">Navy</option>
            <option value="air force">Air Force</option>
            <option value="marine">Marine Corps</option>
        </select>
      </div>
      <div className="form-group">
          <label htmlFor="deptOfDefenseIdInput">Department of Defense ID</label>
          <input 
          type="text"
          className="form-control"
          id="deptOfDefenseIdInput"
          placeholder="Department of Defense ID"
          name="deptOfDefenseId"
          onChange={updateInfo}
          />
      </div>
      <div className="form-group">
      <label htmlFor="gradYearInput">Graduation Year</label>
          <input 
          type="text"
          className="form-control"
          id="gradYearInput"
          placeholder="Graduation Year"
          name="gradYeaar"
          onChange={updateInfo}
          />
      </div>

      <button className="btn btn-primary" onClick={submitButtonHandler}>Submit</button>
    </form>
  );
};

export default Form;
