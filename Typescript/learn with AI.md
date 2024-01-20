```ts
interface Shape{
  height: bigInt,
  width: bigInt,
}


function rectangleArea(area: Shape): number{
  return area.height * area.width;
}

let rectangle: Shape = {
  height: 2.322,
  width: 10.23,
}

rectangleArea(rectangle);

  // what if write Shape as a lowercase shape?
  // what if wrote decimal instead of number
```