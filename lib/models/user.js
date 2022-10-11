const axios = require('axios');

class User
{
    constructor(name)
    {
        this.userName = name;
        this.userID;
        this.platform;
        this.characters = [];
        this.characterIds;
    }

    getMemID()
    {
        return new Promise((resolve, reject) => 
        {
            axios.get(
                "http://www.bungie.net/Platform/Destiny/2/Stats/GetMembershipIdByDisplayName/" + this.userName + "/",
                {
                    headers:{
                        "X-API-KEY": global.token
                    }
                }
            ) .then((r) =>
            {
                if(r.data.Response[0] == null)
                {
                    console.log("test");
                    reject();
                }
                this.userID = r.data.Response[0].membershipId;
                this.platform = r.data.Response[0].membershipType;
            }) .then(() =>
            {
                axios.get(
                    "https://www.bungie.net/Platform/Destiny2/" + this.platform + "/Profile/" + this.userID + "/?components=100",
                    {
                        headers:
                        {
                            "X-API-KEY": global.token
                        }
                    }) .then((r) =>
                    {
                        this.characterIds = r.data.Response.profile.data.characterIds;
                        resolve("resolved");
                    })
                    .catch((e) =>{
                    reject("User not found");
                })  
            })
            .catch((e) =>{
            reject("User not found");
        })  
        })
    }
} 
module.exports = User;