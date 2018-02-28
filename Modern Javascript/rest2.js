let peopleIWantToInvite = [];
let partyguest = (...people) =>{
    let newPeople = people;
    peopleIWantToInvite = peopleIWantToInvite.concat(people);
    console.log(peopleIWantToInvite);
    return peopleIWantToInvite;
}

partyguest("Loke", "saini", "anu");
partyguest("piyush", "nvn", "ram");