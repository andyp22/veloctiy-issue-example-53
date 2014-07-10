Robot = function(name){
  Person.apply(this,arguments)
  this.name = name;
  this.type = 'robot';
}

Robot.prototype = Person.prototype;
Robot.prototype.constructor = Robot;