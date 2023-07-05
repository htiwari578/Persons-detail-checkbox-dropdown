import React, {Component} from 'react';

class SimpleForm extends Component {
    state ={
        persons : {
            name : "",
            age : "",
            country: "",
            gender : "",
            passport: "",
            license: "",
            city: "",
            passportNumber: "",
            designation: "",
            techsKnown : [],

        },
        countries : [
            "USA",
            "Canada",
            "India",
            "United Kingdom",
        ],
        countryList: [
            {
                country : "USA",
                cities: ["New York", "Log Angeles", "San Francisco", "Seattle"],
            },
            {
                country : "Canada",
                cities : ["Torronto", "Montreal", "Vancouver", ]
            },
            {
                country: "India",
                cities: ["New Delhi", "Uttar Pradesh", "Patna", "Mumbai"],
            },
            {
                country: "United Kingdom",
                cities: ["London", "Bristol", "Manchester", ],
            },
        ],
        designations : [
            "Developer",
            "Product Manager",
            "Senior Developer",
            "Team Lead",
            "Sales Manager",
        ],
        techs : [
            "Java",
            
            "Javascript",
            "Node.js",
            "React.js",
            "Python",
        ],
    };
    handleChange = (e) => {
        const {currentTarget : input} = e;

        let s1 = {...this.state};
        // s1.persons[e.currentTarget.name] = e.currentTarget.value;

        input.type==="checkbox" 
        ? input.name ==="techsKnown" 
        ? s1.persons.techsKnown=this.updateCBs(input.checked,input.value,s1.persons.techsKnown) 
        : s1.persons[input.name]=input.checked 
       
        : s1.persons[input.name] = input.value;
        if(input.name === "country") s1.persons.city=""; 
        if(!s1.persons.passport) s1.persons.passportNumber=""; 
        this.setState(s1);
    };
    updateCBs = (checked,value,arr)=> {
        if(checked) arr.push(value);
        else {
        let index = arr.findIndex(ele => ele===ele.value);
        if(index >= 0) arr.splice(index, 1);
        }
        return arr;

    }
    handleSubmit = (e) => {
        e.preventDefault();
    };
    render (){
        let {name,age,country, gender,passport,license,city,passportNumber,designation,techsKnown}
         = this.state.persons;
        const {countries , countryList,designations,techs} = this.state;
        const cities = country ? countryList.find(c1 => c1.country == country).cities : [];
        return (
            <div className = "container">
                <h4>Enter New Details</h4>
                <div className = "form-group">
                    <label>Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    palceholder="Enter Name"
                    value={name}
                    onChange = {this.handleChange}
                    />
                </div>
                <div className = "form-group">
                    <label>Age</label>
                    <input
                    type="text"
                    className="form-control"
                    id="age"
                    name ="age"
                    palceholder="Enter Age"
                    value={age}
                    onChange = {this.handleChange}
                    />
                </div>
                <div className = "form-group">
                    <label>Country</label>
                    <select
                    type="text"
                    className="form-control"
                    name ="country"
                    value={country}
                    onChange = {this.handleChange}
                    
                    >
                    
                    <option disabled value="">Select the Country</option>
                    {countries.map ((c1) => (
                        <option>{c1}</option>
                    ))}
                    </select>
                </div>
                {country ? <div className = "form-group">
                    <label>Cities</label>
                    <select
                    type="text"
                    className="form-control"
                    name ="city"
                    value={city}
                    onChange = {this.handleChange}
                    
                    >
                    
                    <option disabled value="">Select the City</option>
                    {cities.map ((c1) => (
                        <option>{c1}</option>
                    ))}
                    </select>
                </div> : ""}
                <div className ="form-check form-check-inline">
                    <input 
                    className = "form-check-input"
                    type= "radio"
                    name="gender"
                    value="Male"
                    checked = {gender==="Male"}
                    onChange = {this.handleChange}
                    />
                    <label className ="form-check-inline">Male</label>
                </div>
                <div className ="form-check form-check-inline">
                    <input 
                    className = "form-check-input"
                    type= "radio"
                    name="gender"
                    value="Female"
                    checked = {gender==="Female"}
                    onChange = {this.handleChange}
                    />
                    <label className ="form-check-inline">Female</label>
                </div>
                <div className="form-check">
                    <input 
                    className="form-check-input"
                    type="checkbox"
                    name="passport"
                    value={passport}
                    checked={passport}
                    onChange = {this.handleChange}

                     />
                    <label className = "form-check-label">Passport</label>
                    
                </div>
                {passport ? <div className = "form-group">
                    <label>Passport Number</label>
                    <input
                    type="text"
                    className="form-control"
                    id="passportNumber"
                    name="passportNumber"
                    palceholder="Enter  Passport Number"
                    value={passportNumber}
                    onChange = {this.handleChange}
                    />
                </div> : ""}
                <div className="form-check">
                    <input 
                    className="form-check-input"
                    type="checkbox"
                    name="license"
                    value={license}
                    checked={license}
                    onChange = {this.handleChange}

                     />
                    <label className = "form-check-label">License</label>
                    
                </div>
                <label className = "form-check-label fw-bold">Choose Designation :</label> <br/>
                {designations.map((d1)=> (
                    
                    <div className ="form-check form-check-inline">
                    <input 
                    className = "form-check-input"
                    type= "radio"
                    name="designation"
                    value={d1}
                    checked = {designation===d1}
                    onChange = {this.handleChange}
                    />
                    <label className ="form-check-inline">{d1}</label>
                </div>
                
                ))}
                <br/>
                <label className = "form-check-label fw-bold">Choose Technology :</label> <br/>
                
                {techs.map((t1)=> (
                    <div className="form-check">
                    <input 
                    className="form-check-input"
                    type="checkbox"
                    name="techsKnown"
                    value={t1}
                    checked={techsKnown.findIndex((tech) =>tech === t1) >=0}
                    onChange = {this.handleChange}

                     />
                    <label className = "form-check-label">{t1}</label>
                    
                </div>

                 ))}
                <br/>
                <button className = "btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                
            </div>
           
        );
    }

}
export default SimpleForm;