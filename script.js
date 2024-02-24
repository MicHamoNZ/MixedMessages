function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

const swimSets = {
    warmUp: ['300m Freestyle easy pace<br>1min rest<br>200m Freestyle moderate pace','250m Freestyle easy pace<br>30sec rest<br>150m Freestyle moderate pace','500m Freestyle build-up (start easy and gradually increase speed)'],
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
            swimProgram.push(`Warmup:<br>${swimSets[prop][index]}`);
            break;
        case 'mainSet':
            swimProgram.push(`<br>Main:<br>${swimSets[prop][index]}`);
            break;
        case 'coolDown':
            swimProgram.push(`<br>Cooldown:<br>${swimSets[prop][index]}`);
            break;
        default:
            swimProgram.push('This is your lucky day');
    };
}

function formatSwimProgram(program) {
    const formatted = swimProgram.join('<br>');
    return formatted;
}

document.getElementById("program").innerHTML = 
formatSwimProgram(swimProgram);