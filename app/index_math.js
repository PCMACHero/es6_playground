import * as math from "./math";

import {addToDom as atd} from "./helpers";

console.log("Math is: ", math);

atd("h1", `25 + 67 = ${math.add(25,67)}`);

atd("h1", `43 - 23 = ${math.subtract(43,23)}`);

atd("h1", `43 * 23 = ${math.multiply(43,23)}`);

atd("h1", `43 / 0 = ${math.divide(43,0)}`);

atd("h1", `43 / 2 = ${math.divide(43,2)}`);