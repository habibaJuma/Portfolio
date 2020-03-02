import Route from '@ember/routing/route';

export default Route.extend({
  model(){

 var  array_yetu =[{
    title:"Python",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXhdmjZXWXWd3ZYklazaaqPcRksCXekVZwYDDXlwvmF8J8y0pe",
    body:"Ember.js helps developers be more productive out of the box. Designed with developer ergonomics in mind, its friendly APIs help you get your job done—fast."

},
{
    title:"JavaScript",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6CfgBheGO9yL3jjFCfx9iFMgcEkXRvguSD8lOyojFkAp3QNHs",
    body:"avaScript is crucial if you have to deal with a growing number of clients where the frontend is built in ReactJs, AngularJs, VueJs, etc."

},
{
    title:"Ember",
    image:"data:image/png;base64,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",
    body:"Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design ..."

}]
    return array_yetu ;


}

});
