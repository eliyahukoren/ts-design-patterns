import ChairBase from "./chair";

export default class BigChair extends ChairBase{
	constructor(){
		super()
		this.height = 80;
		this.width = 80;
		this.depth = 80;
	}
}
