const Character = require("./models/character");
const User = require("./models/user");
var scanf = require('scanf');

class Raid
{
    constructor() 
    {
        console.log("Please enter Gamertag or PSN ID");
        var input = scanf('%s');
        this.user;
        this.character;
        this.user = new User(input);
        this.user.getMemID()
        .then(() => 
        { 
            let x = 0;
            const characterPromises = [];
            while(this.user.characterIds[x] != null)
            {
                const myCharacter = new Character(this.user, this.user.characterIds[x]);
                this.user.characters.push(myCharacter);
                characterPromises.push(myCharacter.getCharactersInfo());
                x++;
            }
            Promise.all(characterPromises)
            .then(() => 
            {
                //Prints all info gathered and if raids have not been completed
                //Future update will have this come out a bit cleaner
                console.log(this.user.characters);
            })
        })
    }
    
}

module.exports = Raid;