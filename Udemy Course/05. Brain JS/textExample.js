const data = [{
    text: "Mnogo vikam i kreshtq",
    category: "losho"
}, {
    text: "Izmivmam si zabite vsqka sutrin",
    category: "dobro"
}, {
    text: "Izqjdam si vsichko na ibqd",
    category: "dobro"
}, {
    text: "Slusham kato mi se obqsnqva",
    category: "dobro"
}, {
    text: "Pravq mnogo bokluci",
    category: "losho"
}, {
    text: "Ligavq se dokato qm",
    category: "losho"
}, {
    text: "Obicham da si igraq s decata",
    category: "dobro"
}, {
    text: "Udrqm i biq kogato ne sym v nastroenie",
    category: "losho"
}, {
    text: "Spazvam vsichki pravila i zkoni",
    category: "dobro"
}, {
    text: "Lqgam da spq kogato mi kajat",
    category: "dobro"
}, {
    text: "Ne zaspivam mnogo vreme",
    category: "losho"
}, {
    text: "Ne si opravqm legloto sutrin",
    category: "losho"
}, {
    text: "Pomagam pri pochistvaneto na ploshtadkata",
    category: "dobro"
}, {
    text: "Pochistvam i hranq domashnite lubimci",
    category: "dobre"
}, {
    text: "Bwgam i se kriq kogato sym uplashen",
    category: "losho"
}, ]

const net = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

net.train(trainingData, {
    iterations: 2000,
    log: true
})

const text = "Opravih si kolata sam";
const output = net.run(text);
console.log(output);