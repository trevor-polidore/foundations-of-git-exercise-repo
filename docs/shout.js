export const shoutTimes = times => {
    for (i = 0; i <  times; i++){
        shout();
    }
}

const shout = () => {
    console.log("HELLO!");
}

const shoutLouder = () => {
    console.log("HELLO!!!");
}


