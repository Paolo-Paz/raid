const axios = require('axios');


//This class gets the character info for all characters linked to user
class Character
{
    constructor(parent,characterID)
    {
        this.userName = parent.userName
        this.userID = parent.userID;
        this.platformID = parent.platform;
        this.characterID = characterID;
        this.lightLevel;
        this.classType;
        this.raceType;
        this.gender;
        this.scourgeRaid = "Scourge of the Past has not been completed this week.";
        this.lastWishRaid = "Last Wish has not been completed this week.";
        this.crownRaid = "Crown of Sorrow has not been completed this week.";
        this.eaterRaid = "Leviathan, Eater of Worlds has not been completed this week.";
        this.eaterPRaid = "Leviathan, Eater of Worlds Prestige difficulty has not been completed this week.";
        this.spireRaid = "Spire of Stars has not been completed this week.";
        this.spirePRaid = "Spire of Stars Prestige difficulty has not been completed this week.";
    }
    
    getCharactersInfo()
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
                let n = 0;
                let scourge = "548750096";
                let lastWish = "1661734046";
                let crown = "3333172150";
                let eater = "3089205900";
                let eaterP = "809170886";
                let spire = "119944200";
                let spireP = "3213556450";

                while(r.data.Response.activities.data.availableActivities[n] != null)
                {
                    switch(r.data.Response.activities.data.availableActivities[n].activityHash)
                    {
                        case scourge:
                            if(r.data.Response.activities.data.availableActivities[n].isCompleted == "true")
                            {
                                this.scourgeRaid = "Scourge of the Past has been completed this week."
                            }
                            n++;
                            break;
                        case lastWish:
                            if(r.data.Response.activities.data.availableActivities[n].isCompleted == "true")
                            {
                                this.lastWishRaid = "Last Wish has been completed this week."
                            }
                            n++;
                            break;
                        case crown:
                            if(r.data.Response.activities.data.availableActivities[n].isCompleted == "true")
                            {
                                this.crownRaid = "Crown of Sorrow has been completed this week."
                            }
                            n++;
                            break;
                        case eater:
                            if(r.data.Response.activities.data.availableActivities[n].isCompleted == "true")
                            {
                                this.eaterRaid = "Leviathan, Eater of Worlds has been completed this week."
                            }
                            n++;
                            break;
                        case eaterP:
                            if(r.data.Response.activities.data.availableActivities[n].isCompleted == "true")
                            {
                                this.eaterPRaid = "Leviathan, Eater of Worlds Prestige has been completed this week."
                            }
                            n++;
                            break;
                        case spire:
                            if(r.data.Response.activities.data.availableActivities[n].isCompleted == "true")
                            {
                                this.spireRaid = "Spire of Stars has been completed this week."
                            }
                            n++;
                            break;
                        case spireP:
                            if(r.data.Response.activities.data.availableActivities[n].isCompleted == "true")
                            {
                                this.spirePRaid = "Spire of Stars Prestige has been completed this week."
                            }
                            n++;
                            break;
                        default: n++;
                    }
                }
                resolve("");
            })
        })
    }
}
module.exports = Character;