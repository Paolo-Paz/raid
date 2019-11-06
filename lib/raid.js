const Character = require('./models/character');
const User = require('./models/user');


class Raid
{
    constructor(userName) 
    {
        var input = userName;
        this.user;
        this.character;
        this.user = new User(input);
    }
    process(){
        return new Promise((resolve,reject)=>{
            this.user.getMemID()
        .then(() => 
        { 
            if(this.user.characterIds[0]==null)
            {
                console.log("Invalid username");
                return;
            }
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
                resolve(this.user.characters);
            })
        })
        .catch((e) =>{
        reject("User not found");
    })  
        })
    }
}

module.exports = Raid;
