import { Medicine } from './medicine';
import { User } from './user';

export class Cart {
    id:number;
	products:Array<Medicine>= [];
    user:User;
}
