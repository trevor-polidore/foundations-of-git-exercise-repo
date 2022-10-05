import { walk } from "./docs/walk.js"
import { shoutTimes } from "./docs/shout.js";

function walkThenShout(steps, shouts) {
    walk(steps);
    shoutTimes(shouts);
};

walkThenShout(10,3);