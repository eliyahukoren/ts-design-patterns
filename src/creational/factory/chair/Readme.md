Creation steps:

1. Create dimension.ts file with definition ot type dimension

```js
export type dimension = {
	height: number
	/// ...
}
```

2. In the chair.ts create interface IChair and then create a base class ChairBase

```js
import { dimension } from "./dimension";

// Implement a Chair Interface
interface IChair {
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

```

3. Create 3 classes for small, medium and big chair like in example below:

```js
import ChairBase from "./chair";

export default class BigChair extends ChairBase{
	constructor(){
		super()
		this.height = 80;
		this.width = 80;
		this.depth = 80;
	}
}

...
```

4. Create a Chair factory

```js
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
```

5. Create a client

```js
import ChairFactory from "./factory";

const smallChair = ChairFactory.getChair('SmallChair');
const mediumChair = ChairFactory.getChair("MediumChair");
const bigChair = ChairFactory.getChair("BigChair");


console.log(`a small chair have dimension: ${smallChair.getDimensions()}`);
console.log(`a medium chair have dimension: ${mediumChair.getDimensions()}`);
console.log(`a big chair have dimension: ${bigChair.getDimensions()}`);

```
