class Creature {
    constructor(options) {
        if (!options.name) {
            throw (new Error("Please name your creature."))
        } else {
            this.name = options.name;
        }
        this.health = options.health || 100;
        this.maxHealth = this.health * 1.25;
        this.chanceToCrit = options.chanceToCrit || .1;
        this.chanceToMiss = options.chanceToMiss || .25;
        this.baseDamage = options.baseDamage || 20;

        this.styles = options.styles || ["creature"];
        this.imageElement = document.createElement('img');
        this.imageElement.classList.add(...this.styles);
    }

    //this can better be set as 2 functions.
    fight(creature) {
        let message;
        if (Math.random() < this.chanceToMiss) {
            message = this.name + ' missed ' + creature.name + '. '
        } else {
            const damage = Math.random() < this.chanceToCrit
                ? this.baseDamage * 2
                : this.baseDamage
            creature.health -= damage
            message = creature.name + ' has been hit!'
        }
        let newDiv = document.createElement("div");
        let battleMessage = document.createTextNode(message);
        newDiv.appendChild(battleMessage);
        document.body.appendChild(newDiv)
    }

}