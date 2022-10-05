const shout = () => {
    console.log("HELLO!");
}

const shoutLouder = () => {
    console.log("HELLO!!!");
}

const shoutTimes = times => {
    for (i = 0; i <  times; i++){
        shout();
    }
}

shoutTimes(4);

