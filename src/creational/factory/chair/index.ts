import ChairFactory from "./factory";

const smallChair = ChairFactory.getChair('SmallChair');
const mediumChair = ChairFactory.getChair("MediumChair");
const bigChair = ChairFactory.getChair("BigChair");

console.log(`a small chair have dimension: ${smallChair.getDimensions().toString()}`);
console.log(`a medium chair have dimension: ${mediumChair.getDimensions().toString()}`);
console.log(`a big chair have dimension: ${bigChair.getDimensions().toString()}`);
