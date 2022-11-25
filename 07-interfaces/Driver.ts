import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GoalfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GoalfCoach();

//declare an array for coaches...initially empty
let theCoaches: Coach[] = [];

//add the coaches to the array
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for (let tempCoach of theCoaches) {
  console.log(tempCoach.getDailyWorkout());
}
