const axios = require("axios");
const characterArray = [];
//const scourge = "548750096";
//This class gets the character info for all characters linked to user

class Character
{
    constructor(parent,characterID)
    {
        this.userName = parent.userName
        this.userID = parent.userID;
        this.platformID = parent.platform;
        this.characterID = characterID;
        this.raidStatus;
        this.lightLevel;
        this.classType;
        this.raceType;
        this.gender;
        //this.getCharactersID();
    }
    
    getCharactersID()
    {
        return new Promise((resolve, reject) => 
        {
            axios.get(
                "https://www.bungie.net/Platform/Destiny2/" + this.platformID + "/Profile/" + this.userID + "/Character/" + this.characterID + "/?components=200,204",
                {
                    headers:{"X-API-KEY": global.token}
                }
            ).then((r) =>
            {
                this.lightLevel = r.data.Response.character.data.light;
                if(r.data.Response.character.data.genderHash == 2204441813)
                {
                    this.gender = "Female";
                }
                else {this.gender = "Male"};

                switch(r.data.Response.character.data.raceHash)
                {
                    case 2803282938:
                        this.raceType = "Awoken";
                        break;
                    
                    case 3887404748:
                        this.raceType = "Human";
                        break;
                    
                    case 898834093:
                        this.raceType = "Exo";
                        break;
                        
                        default: null;
                }

                switch(r.data.Response.character.data.classHash)
                {
                    case 2271682572:
                        this.classType = "Warlock";
                        break;
                    
                    case 3655393761:
                        this.classType = "Titan";
                        break;
                        
                    case 671679327:
                        this.classType = "Hunter";
                        break;

                        default: null;
                }
                resolve("");
            })
        })
    }
}
module.exports = Character;