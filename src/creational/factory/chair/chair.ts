import { dimension } from "./dimension";

// Implement a Chair Interface
export interface IChair {
	height: number;
	width: number;
	depth: number;
	getDimensions(): dimension;
}

// The Chair Base Class
export default class ChairBase implements IChair {
	constructor(
		public height: number = 0,
		public width: number = 0,
		public depth: number = 0
	) {}

	getDimensions(): dimension {
		return {
			width: this.width,
			height: this.height,
			depth: this.depth,
		};
	}
}
