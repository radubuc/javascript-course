//Week 5 quiz scratch

//Given prompt and code
//You are working for an event scheduling company and were asked to create something that helps organize events better.The app you are working on already has an Event class as follows:

class Event {
    constructor(title, date) {
        this.title = title; //string
        this.date = date; //string
    }
}

//Your task is to create a class named EventOrganizer that contains a property called events(an array of Events) and two methods: addNewEvent, and removeEvent.

//addNewEvent should take an event and add it to the events array ONLY if an event with the same title doesn't exist already.

//removeEvent should take a string representing the event title and remove the event with the matching title.


//My code
class EventOrganizer {
    constructor() {
        this.events = [];
    }

    addNewEvent() {
        let title = prompt("Enter title of event:");
        let date = prompt("Enter date of event:");
        if (events.indexOf(title) === -1) {
            this.events.push(new Event(title, date));
        } else if (events.indexOf(title) > -1) {
            console.log("Event already exists.");
        }
    }


    removeEvent() {
        let title = prompt("Enter the title of the event you'd like to remove:");
        if (title > -1 && title < this.events.length) {
            this.events.splice(title, 1); 
        }
    }

}

