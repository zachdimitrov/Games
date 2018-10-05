const X_MAX = 600;
const Y_MAX = 600;
let graphic = document.getElementById("graphic");
let rand = (high, low) => Math.random() * (high - low) + low;

let randomPoints = generatePoints(2000);

function generatePoints(n) {
    return Array(n)
        .fill()
        .map((x, i) => i)
        .map(_ => ({ x: rand(0, X_MAX), y: rand(0, Y_MAX) }));
}

// console.log(randomPoints);

team = point => point.x > point.y ? 1 : -1;

let randomWeights = ({
    x: rand(-1, 1),
    y: rand(-1, 1)
})

guess = (weights, point) => {
    const sum = point.x * weights.x + point.y * weights.y;
    const team = sum >= 0 ? 1 : -1;
    return team;
}

train = (weights, point, team) => {
    const guessResult = guess(weights, point);
    const error = team - guessResult;
    const learningRate = 0.01;
    return {
        x: weights.x + point.x * error * learningRate,
        y: weights.y + point.y * error * learningRate
    }
}

let weights = (function testTrain() {
    const examples = generatePoints(1000000).map(point => ({
        point,
        team: team(point)
    }));

    let currentWeights = randomWeights;

    for (const example of examples) {
        currentWeights = train(currentWeights, example.point, example.team);
    }
    return currentWeights;
})();

console.log(weights);

graphic.innerHTML = `
<svg width="${X_MAX}" height="${Y_MAX}">
    ${randomPoints.map(point=> 
        `<circle 
        cx="${point.x}" 
        cy="${point.y}" 
        r="3" 
        fill="${guess(weights, point) === -1?'blue':'red'}"/>`
    )}
    <line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}" stroke="green"/>
</svg>
`