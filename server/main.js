import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { image, helpers } from 'faker';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
  // code to run on server at startup

  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);

  if(!numberRecords){
    //generate some data
    _.times(5000, ()=>{
      const { name, email, phone } = helpers.createCard();

      Employees.insert({
        name, email, phone,
        avatar : image.avatar()
      });
    });
  }

  //defines publication  of limit 20 users
 Meteor.publish('employees', function(){
    return Employees.find({}, { limit: 20 });
  });
});
