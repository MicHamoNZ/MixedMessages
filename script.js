function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

const swimSets = {
    warmUp: ['300m Freestyle easy pace\n\t1min rest\n\t200m Freestyle moderate pace','250m Freestyle easy pace\n30sec rest\n150m Freestyle moderate pace','500m Freestyle build-up (start easy and gradually increase speed)'],
    mainSet: [],
    coolDown: []
};

let swimProgram = [];

// Iterate over swimSets
for(let prop in swimSets) {
    let index = generateRandomNumber(swimSets[prop].length);
    console.log(prop, index);

    // Use the swimSets properties to customise the sets being added to the swimProgram
    switch(prop) {
        case 'warmUp':
            swimProgram.push(`Warmup:\n\t${swimSets[prop][index]}`);
            break;
        case 'mainSet':
            swimProgram.push(`Warmup:\n\t${swimSets[prop][index]}`);
            break;
        case 'cooDown':
            swimProgram.push(`Warmup:\n\t${swimSets[prop][index]}`);
            break;
        default:
            swimProgram.push('This is your lucky day');
            break;
    };
}

console.log(swimProgram);