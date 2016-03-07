console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

//#### Part 1

var makeMiddleEarth = function() {
   // create a section tag with an id of `middle-earth`
  var middleEarth = $('<section id="middle-earth"></section>');
   // add each land as an `article` tag
   for (var i = 0; i < lands.length; i++) {
     $(middleEarth).append('<article><h1>' + lands[i] + '</h1></article>');
   }

  //  lands.forEach(function (){
  //    $('section').append("<article></article>")
  //    $('article').append("<h1>"lands[i]"</h1")
  //  }) HOW TO MAKE THE SAME ONE WITH FOR EACH????? IT IS NOT WORKING!!!!
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   $('body').append(middleEarth)
};

makeMiddleEarth();

// #### Part 2

var makeHobbits = function () {
  var hobbitList = $('<ul id="hobbitList"></ul>')
  for ( var i = 0; i < hobbits.length; i++) {
    hobbitList.append('<li class="hobbit">' + hobbits[i] + '</li>');
  }
  $('article:nth-child(1)').append(hobbitList);
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`

};
makeHobbits();

//#### Part 3

var keepItSecretKeepItSafe = function () {
  var divRing = $('<div id="the-ring" class="magic-imbued-jewelry"></div>')
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   $('li:nth-child(1)').append(divRing);
};

keepItSecretKeepItSafe();

//#### Part 4


var makeBuddies = function () {
  var aside = $('<aside></aside>');
  var buddiesList = $('<ul id="listofBuddies"></ul>')
   for (var i = 0; i < buddies.length; i++) {
     $(buddiesList).append('<li class="buddies">' + buddies[i] + '</li>')
     }
  $(aside).append(buddiesList);
  $('article:nth-child(2)').append(aside);
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};

makeBuddies();

//#### Part 5


var beautifulStranger = function () {
  $('aside ul li').eq(3).html('Aragon')
   // change the `'Strider'` text to `'Aragorn'`
};

beautifulStranger();
