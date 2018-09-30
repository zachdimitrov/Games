const network = new brain.NeuralNetwork();

network.train([
    { input: { r: 0.62, g: 0.72, b: 0.88 }, output: { light: 1 } },
    { input: { r: 0.1, g: 0.84, b: 0.72 }, output: { light: 1 } },
    { input: { r: 0.33, g: 0.24, b: 0.29 }, output: { dark: 1 } },
    { input: { r: 0.74, g: 0.78, b: 0.86 }, output: { light: 1 } },
    { input: { r: 0.31, g: 0.35, b: 0.41 }, output: { dark: 1 } },
    { input: { r: 0, g: 1, b: 0.65 }, output: { light: 1 } },
    { input: { r: 1, g: 0.99, b: 0 }, output: { light: 1 } },
]);

const input = document.querySelector("input");
const example = document.getElementById("example");

function getRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    } : null;
}

input.addEventListener("change", (e) => {
    const rgb = getRgb(e.target.value);
    const result = network.run(rgb);
    example.style.background = e.target.value;
    example.style.color = result.light > result.dark ? "black" : "white";
});