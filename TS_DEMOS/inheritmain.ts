import { Player } from "./player";
import { Team } from "./team";
let team=new Team(999,'INDIA');
let player=new Player(100,'Sachin Tendulkar',200,team);
player.printPlayer();