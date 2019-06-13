const Character = require("./models/character");
const User = require("./models/user");

class Raid
{
    constructor() 
    {
        this.user;
        this.character;
        this.user = new User("amylase722");
        //console.log(this.user);
        this.user.getMemID()
        .then(() => 
        { 
            let x = 0;
            const characterPromises = [];
            while(this.user.characterIds[x] != null)
            {
                const myCharacter = new Character(this.user, this.user.characterIds[x]);
                this.user.characters.push(myCharacter);
                characterPromises.push(myCharacter.getCharactersID());
                x++;
            }

            Promise.all(characterPromises)
            .then(() => 
            {
                console.log(this.user.characters);
            })
        })
    }
    
}

module.exports = Raid;