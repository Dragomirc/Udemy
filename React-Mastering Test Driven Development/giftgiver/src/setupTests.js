import requestAnimationFrame from "./tempPolyfills";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true /*required to modify props through different tests*/
});
