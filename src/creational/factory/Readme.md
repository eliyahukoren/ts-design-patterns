Factory Design pattern:


* The Factory Pattern defers the creation of the final object to a subclass.

* The Factory pattern is about inserting another layer/abstraction between instantiating an object and where in your code it is actually used.

* It is unknown what or how many objects you will need to be created until runtime.
 * You want to localize knowledge of the specifics of instantiating a particular object to the subclass so that the client doesn't need to be concerned about the details.

* You want to create an external framework, that an application can import/reference, and hide the details of the specifics involved in creating the final object/product.

* The unique factor that defines the Factory pattern, is that your project now defers the creation of objects to the subclass that the factory had delegated it to.


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
