import ChairBase from "./chair";

export default class SmallChair extends ChairBase {
	constructor() {
		super();
		this.height = 40;
		this.width = 40;
		this.depth = 40;
	}
}
