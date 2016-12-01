  //We use alert to say things to the user.
  //alert('hello')


function start() {

  //We use prompt to ask the questions
  //We use variables to store things, like answers
   var name = prompt('Please enter your name to save your progrees');

   //We use operators, like this plus sign, to combine things.
   var greeting = 'Hello ' + name + " You look brave. I'am a villager who is looking for someone to do some adventuring for me will you help me. I will pay you well??";
   alert(greeting);

   //We can use while loops to keep doing things until we think we're done
   while (answer !== 'left' && answer !== 'right') {
    var message = 'You are in a forest. There is a trail left and one right. Which way do you want to go?';
    var answer = prompt(message);
   }

  if (answer === 'left') {
    alert('You where killed by a hungry ogre who used for lunch.')
  }

  else if (answer === 'right') {
    alert('You followed the trail and found a camp.')
    Chapter2acamp()

  }

}

function Chapter2acamp() {

while (answer !== 'sneak away' && answer !== 'reveal yourself') {
  var answer = prompt("You are hiding behind a bush and are scouting out the camp you've found. One of the campers heard you rusteling in the bushes will you try to \'sneak away or \'reveal yourself. Which do you choose?")
  }
  if (answer === 'sneak away') {
    var answer = prompt('You try to sneak away and you run into a patrol They yell hey you stop! You stop dead in your tracks. Do you choose to \'fight \'run away\' or surrender?')
    }

  else if (answer === 'reveal yourself')
  var answer = prompt('You slowly rise from the bushes and walk torwards the camper who spoted you. He takes you to there leader and he interogates you')


  }

start();
