import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            class: '',
            passingYear: '',
            marks: '',
            c1: false,
            c2: false,
            c3: false,
            c4: false,
            c5: false
        };

        this.handleFirstChange = this.handleFirstChange.bind(this);
        this.handleLastChange = this.handleLastChange.bind(this);
        this.handleClassChange = this.handleClassChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleMarksChange = this.handleMarksChange.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }
    
    handleFirstChange(evt) {
        var letters = /^[A-Za-z]+$/;
        this.setState({
            firstName: evt.target.value,
        });
        if(this.state.firstName){
            if(!this.state.firstName.match(letters)) {
                this.setState({error: 'First Name must contain only alphabets and length must be less than 20!', c1: false})
            }
            else{
                this.setState({c1: true});
                this.dismissError();
            }
        }
    };
    
    handleLastChange(evt) {
        this.setState({
            lastName: evt.target.value,
        });
        var letters = /^[A-Za-z]+$/;
        if(this.state.lastName){
            if(!this.state.lastName.match(letters)) {
                this.setState({error: 'Last Name must contain only alphabets and length must be less than 20!', c2: false})
            }
            else{
                this.setState({c2: true});
                this.dismissError();
            }
        }
    };
    
    handleClassChange(evt) {
        this.setState({
            class: evt.target.value,
        });
        if(this.state.class){
            this.setState({c3: true});
        }
    };

    handleYearChange(evt) {
        this.setState({
            passingYear: evt.target.value,
        });
        var numbers = /^[0-9]+$/;
        if(this.state.passingYear){
            if(!this.state.passingYear.match(numbers) || this.state.passingYear.length<3) {
                this.setState({error: 'Year of Passing must contain only numbers and must be 2017 or earlier!', c4: false})
            }
            else{
                this.setState({c4: true});
                this.dismissError();
            }
        }
    };
    
    handleMarksChange(evt) {
        this.setState({
            marks: evt.target.value,
        });
        var decimal=  /^[0-9.]+$/;
        if(this.state.marks){
            if(!this.state.marks.match(decimal)) {
                this.setState({error: 'Marks must be a number!', c5: false})
            }
            else{
                this.setState({c5: true});
                this.dismissError();
            }
        }
    };
    contactSubmit(e){
        e.preventDefault();
        alert("Application submitted, we will get back to you!");
        this.setState({
            firstName: '',
            lastName: '',
            class: '',
            passingYear: '',
            marks: '',
            c1: false,
            c2: false,
            c3: false,
            c4: false,
            c5: false
        });
    }
    render() {
        const { history } = this.props;
        return (
            <div className="FormCenter">
                <div>
                    <h4 className="heading">New Admission Form</h4>
                </div>
                <form className="FormFields" onSubmit= {this.contactSubmit.bind(this)}>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" className="FormField__Input" required maxLength="20" placeholder="Enter First Name" name="firstName" value={this.state.firstName} onChange={this.handleFirstChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" className="FormField__Input" required maxLength="20" placeholder="Enter Last Name" name="lastName" value={this.state.lastName} onChange={this.handleLastChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="class">Class</label>
                        <input type="text" id="class" className="FormField__Input" required placeholder="Enter Class" name="class" value={this.state.class} onChange={this.handleClassChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="passingYear">Year</label>
                        <input type="text" id="passingYear" className="FormField__Input" required minlength="4" maxlength="4" placeholder="Enter Year of Passing" name="passingYear" value={this.state.passingyear} onChange={this.handleYearChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="marks">Marks</label>
                        <input type="text" id="marks" className="FormField__Input" required placeholder="Enter Marks in Percentage(%)" name="marks" value={this.state.marks} onChange={this.handleMarksChange} />
                    </div>
                    <div className="error-container">
                    {
                        this.state.error &&
                        <h3 className="show" data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    </div>
                    <div className="FormField">
                        <button type="submit" className="FormField__Button mr-20" disabled={!this.state.c1 || !this.state.c2 || !this.state.c4 || !this.state.c5 || Number(this.state.passingYear)>2017 || Number(this.state.marks)>100}>Submit</button>
                    </div>
                    <div className="FormField">
                        <button type="button" onClick={() => history.push('/')} className="FormField__Button mr-20" >Back</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignInForm);