import ChairBase from "./chair";

export default class MediumChair extends ChairBase {
	constructor() {
		super();
		this.height = 60;
		this.width = 60;
		this.depth = 60;
	}
}
