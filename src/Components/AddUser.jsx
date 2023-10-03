import React, { useState } from 'react'
import Header from './Header'

const AddUser = () => {
    const [inputField,setInputField]=useState(
        {id:"",firstName:"",lastName:"",maidenName:"",age:"",gender:"",email:"",phone:"",birthDate:"",bloodGroup:"",address:{address:"",city:"",postalCode:"",state:""}}   
    )

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add User</h1>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">ID</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="id" value={inputField.id}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">First Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="firstName" value={inputField.firstName} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Maiden Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="maidenName" value={inputField.maidenName}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Last Name</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="lastName" value={inputField.lastName}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Age</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="age" value={inputField.age}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Gender</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="gender" value={inputField.gender}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email</label>
                            <input onChange={inputHandler} type="email" name="email" id="" className="form-control" value={inputField.email}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address: Lane</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="address" value={inputField.address.address}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">City</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="city" value={inputField.address.city}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">State</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="state" value={inputField.address.state}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Postal Code</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="postalCode" value={inputField.address.postalCode}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Birth Date</label>
                            <input onChange={inputHandler} type="date" className="form-control" name="birthDate" value={inputField.birthDate}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="phone" value={inputField.phone}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Blood Group</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="bloodGroup" value={inputField.bloodGroup}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser