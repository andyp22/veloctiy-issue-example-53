if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to veloctiy-issue-example-53.";
  };
  
  Template.hello.robotTest = function () {
    return "Please view console to see output. Results should be:<br/><blockquote>Name: Tim Type: robot</blockquote>";
  };
  
  // Example that will work in Meteor but break Velocity based on loading order.
  var robot = new Robot("Tim");
  robot.info();
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
