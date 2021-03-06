import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

const EmployeeList = (props) => {
  console.log("prosp employees", props.employees);
   return (
     <div>
      <div className="employees-list">
        Employee List
      </div>
     </div>
   )
};

export default createContainer(() =>{
  // set up subscription
  Meteor.subscribe('employees');

  // return an object. Wheneber we return will be sent to EmployeeList as props
 return { employees: Employees.find({}).fetch() };
},EmployeeList);
