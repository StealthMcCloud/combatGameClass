class Game {

    constructor(options) {
        this.hero = options.hero
        this.monsters = options.monsters || [new Creature({ name: "Hydra" })]
        this.startButton = options.startButton;
        this.resetButton = options.resetButton;
        this.outputElement = document.getElementById(options.outputElementId);
        this.init()
    }

    battle() {
        this.appendImage(this.hero);

        this.monsters.forEach(monster => {
            this.appendImage(monster);

            let newDiv;
            if (this.hero.health <= 0 || monster.health <= 0) {
                newDiv = document.createElement("div");
                let victory = document.createTextNode(this.hero.health > 0
                    ? this.hero.name + ' came out victorious. '
                    : monster.name + ' came out victorious. ')
                newDiv.appendChild(victory);
            }

            else if (this.hero.health > 0 && monster.health > 0) {
                this.hero.fight(monster)
                monster.fight(this.hero)
                newDiv = document.createElement("div");
                let battleMessage2 = document.createTextNode(this.hero.name + ' is at ' + this.hero.health + ' health and ' + monster.name + ' is at ' + monster.health + ' health. ');
                newDiv.appendChild(battleMessage2);
            }
            this.outputElement.appendChild(newDiv);
        })
    }

    appendImage(creature) {
        if (!creature.imageElement.parentElement) {
            this.outputElement.appendChild(creature.imageElement);
        }
    }

    reset() {
        location.reload();
    }

    init() {
        const currentGameInstance = this;
        this.startButton.addEventListener("click", this.battle.bind(currentGameInstance));
        this.resetButton.addEventListener("click", this.reset.bind(currentGameInstance));
    }

}

