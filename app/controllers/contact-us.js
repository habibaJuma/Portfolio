import Controller from '@ember/controller';
import EmberResolver from 'ember-resolver';

let url = "http://requestbin.net/r/1mllex51"
export default Controller.extend({
actions:{

  submit(){
  console.log(fname.value)
  console.log(secondname.value)
  console.log(country.value)
  console.log(subject.value)
    //submit to url
  
    
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

  }
}
 
});
