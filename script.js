const goblin = new Goblin({
    name: "Goblin",
});

const hobgoblin = new HobGoblin({
    name: "Hob Goblin",
    health: 200,
    chanceToCrit: .15,
    chanceToMiss: .25
});

const goblinLeader = new GoblinLeader({
    name: "Greknack Clinker",
    health: 500,
    chanceToCrit: .2,
    chanceToMiss: .2,
    baseDamage: 25
});

const goblinKing = new GoblinKing({
    name: "Jareth",
    health: 1000,
    chanceToCrit: .35,
    chanceToMiss: .1,
    baseDamage: 30
 })

const StealthMcCloud = new Hero({
    name: "Stealth McCloud",
    health: 1000,
    chaneToCrit: .2,
    chanceToMiss: .2,
    baseDamage: 25,
    styles: ["StealthMcCloud"],
});

const game = new Game({
    hero: StealthMcCloud,
    monsters: [goblinKing],
    startButton: document.getElementById("battle"),
    resetButton: document.getElementById("reset"),
    outputElementId: "output",
});