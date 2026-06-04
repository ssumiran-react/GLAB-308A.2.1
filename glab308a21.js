const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

for (const i of adventurer.inventory) {
    //console.log(i);
}
//adventurer.roll();

///////////////////////////////////
///  Part 2
class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
const rob = new Character();
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];

robin.companion = new Character("Leo");
robin.companion.type = "Cat";

robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.roll();
robin.companion.roll();
robin.companion.companion.roll();
//console.log(rob);
///////////////////////////////////
///  Part 3 and Part 4
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = "";

        // for (const r in Adventurer.ROLES) {
        //     if (Adventurer.ROLES[r].toLocaleLowerCase() === role.toLocaleLowerCase()) {
        //         this.role = Adventurer.ROLES[r];
        //         break;
        //     }
        // }
        Adventurer.ROLES.forEach( r => {
            if (r.toLocaleLowerCase() === role.toLocaleLowerCase()) {
                this.role = r;
            }
        })

        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}
class Companion extends Character {
    constructor(name, type, inventory) {
        super(name);
        super.type = type;
        super.inventory = inventory;
    }
}

const sinbad = new Adventurer("Sinbad", "healeR");
sinbad.companion = new Companion("Leo", "Cat", ["small hat", "sunglasses"]);
//console.log("adv :", sinbad);

//////////////////////////
// Part 5
class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}
const healers = new AdventurerFactory("Healer");
const robinn = healers.generate("Robin");
console.log(robinn);