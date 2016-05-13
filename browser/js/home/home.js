app.controller('homeCtrl', function($scope, $state) {
$scope.textToSay = "Waiting....";

$scope.clickMe = function(){
  responsiveVoice.speak($scope.textToSay, "Russian Female", {volume: 1});
  // var msg = new SpeechSynthesisUtterance('Hello World');
  //   window.speechSynthesis.speak(msg);
};
// // responsiveVoice.setDefaultVoice("US English Female");
// responsiveVoice.AddEventListener("OnLoad",function(){
//       console.log("ResponsiveVoice Loaded Callback");
//       responsiveVoice.speak("hello world");
//       responsiveVoice.speak("hello world", "UK English Male", {volume: 1});
//   });
//   responsiveVoice.speak("hello world", "UK English Male", {volume: 1});


// if(responsiveVoice.voiceSupport()) {
// responsiveVoice.speak("hello world", "UK English Male");
// console.log('spoken');
// }
                    // if (annyang) {
                    //   // Let's define a command.
                    //   var commands = {
                    //     'hello': function() { $scope.mainText = "Hello!";
                    //     $scope.$apply();
                    //    },
                    //    'next step': function() { $scope.mainText = "Next Step!";
                    //    $scope.$apply();
                    //   },
                    //     'next ingredient': function() {
                    //       $scope.mainText = 'next ingredient';
                    //     $scope.$apply(); }
                    //   };
                    //
                    //   // Add our commands to annyang
                    //   annyang.addCommands(commands);
                    //
                    //   // Start listening.
                    //   annyang.start();
                    // }



});//end controller





app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller:'homeCtrl'
    });
});
