import SmallChair from "./chair-small";
import MediumChair from "./chair-medium";
import BigChair from "./chair-big";
import { IChair } from "./chair";

export default class ChairFactory {
	static getChair(chair: string): IChair {
		switch (chair){
			case 'BigChair':
				return new BigChair();
			case 'MediumChair':
				return new MediumChair();
			default:
				return new SmallChair();
		}
	}
}
