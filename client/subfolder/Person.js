Person = function(name){
  this.name = name;
  this.type = 'human';
}

Person.prototype.info = function(){
  console.log("Name:", this.name, "Type:", this.type);
}