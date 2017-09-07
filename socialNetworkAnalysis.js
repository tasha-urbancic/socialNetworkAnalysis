var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


var whoHasTheMostFollowers = function () {

  // merge all followers into one list of followers
  var allFollowersArray = [];
  for (person in data) {
    allFollowersArray.push(data[person]['follows']);
    var mergedFollowersArray = [].concat.apply([], allFollowersArray);
  }

  // count up the number of each follower and make an object of number of followers per person
  var followersCount = {};
  for (i in mergedFollowersArray) {
    var currPerson = mergedFollowersArray[i];
    if (!followersCount[currPerson]) {
      followersCount[currPerson] = 0;
    }
    followersCount[currPerson] += 1;
  }

  // make a list of names and number of people following that are corresponding.
  var numFollowers = [];
  var peoplesNames = [];
  for (person in followersCount) {
    numFollowers.push(followersCount[person]);
    peoplesNames.push(person);
  }

  // find the max
  numFollowers = numFollowers.map(Number);
  var maxFollowers = numFollowers.reduce(function(a, b) {
    return Math.max(a, b);
  });

  //find the index values of the maxFollowers, add to a list
  var maxIndex = 0;
  var indexValues = [];
  for (var i = 1; i < numFollowers.length; i++) {
    if (numFollowers[i] == maxFollowers) {
      indexValues.push(i);
    }
  }

  //make a list of people at those indexes
  var winningPeople = [];
  for (var i = 0; i < indexValues.length; i++) {
    winningPeople.push(peoplesNames[indexValues[i]]);
  }

  console.log('the people/person with the most followers are/is ', winningPeople, ', with ', maxFollowers, 'followers.');

}

whoHasTheMostFollowers();


var whoFollowsTheMostPeople = function () {

  var winningPerson = 'nobody';
  var maxCount = 0;

  for (person in data) {

    var numOfFollowers = data[person]['follows'].length;
    if (numOfFollowers > maxCount) {
      maxCount = numOfFollowers;
      winningPerson = data[person]['name'];
    }

  }

  console.log('The winning person, with the most followers is', winningPerson);

}

// whoFollowsTheMostPeople();








