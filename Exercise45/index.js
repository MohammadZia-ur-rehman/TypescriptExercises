"use strict";
function CarInfo(manufacturer, model, ...args) {
    const car = { manufacturer, model };
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        car[key] = value;
    }
    return car;
}
const myCar = CarInfo("Toyota", "Corolla", "year", 2022, "color", "blue");
console.log(myCar);
