
export function walk(steps) {
    for(let i = 0; i < steps; i++){
        step(i);
    }
}

function step(num) {
    let stp = num % 2 === 0 ? "left" : "right"
    console.log(stp);
}

export function skip(ssssssss) {
    
}