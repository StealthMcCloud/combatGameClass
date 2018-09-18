
class Goblin extends Creature {
    constructor(options) {
        options.styles = ["goblin"]
        super(options);
    }
}

class HobGoblin extends Creature {
    constructor(options) {
        options.styles = ["hobGoblin"]
        super(options);
    }
}


class GoblinLeader extends Creature {
    constructor(options) {
        options.styles = ["goblinLeader"]
        super(options);
    }
}

class GoblinKing extends Creature {
    constructor(options) {
        options.styles = ["goblinKing"]
        super(options);
    }
}
