import Students from "./PreProcess";
import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import {withRouter} from "react-router-dom";

class Result extends Component {

    renderStudent = (student, index) => {
        return (
            <tr key={index} className={`student-${student.status === "Pass" || student.status === "Topper" ? "pass" : "fail"}-${student.status === "Topper" ? "top" : ""}`}>
                <td>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.total}</td>
                <td>{student.status}</td>
            </tr>
        )
    }
    render() {
        const { history } = this.props;
        return (
            <div>
                <div>
                    <h4 className="heading">Results</h4>
                </div>
                <div className="Result">
                    <ReactBootstrap.Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Students Result Board</th>
                            </tr>
                            <tr>
                                <th className="sub-head">Student Name</th>
                                <th className="sub-head">Roll Number</th>
                                <th className="sub-head">Total Marks</th>
                                <th className="sub-head">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Students.map(this.renderStudent)}
                        </tbody>
                    </ReactBootstrap.Table>
                </div>
                <ReactBootstrap.Button onClick={() => history.push('/newadmission')}>New Admission</ReactBootstrap.Button>
            </div>
        );
    }
}
console.log(Students);
export default withRouter(Result);