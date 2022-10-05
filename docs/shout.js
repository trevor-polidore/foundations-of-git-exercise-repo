export const shoutTimes = times => {
    for (let i = 0; i <  times; i++){
        shout();
    }
}

const shout = () => {
    console.log("HELLO!");
}

const shoutLouder = () => {
    console.log("HELLO!!!");
}


