import Hammer, * as others from "./index";

for (const name in others) {
	Hammer[name] = others[name];
}

export default Hammer;
