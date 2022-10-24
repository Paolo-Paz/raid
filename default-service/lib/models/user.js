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
        console.log("getMemID started\n");
        return new Promise((resolve, reject) => 
        {
            axios.get(
                "http://www.bungie.net/Platform/Destiny/2/Stats/GetMembershipIdByDisplayName/" + this.userName + "/",
                {
                    headers:{
                        "X-API-KEY": ""
                    }
                }
            ) .then((r) =>
            {
                if(r.data.Response[0] == null)
                {
                    console.log("UserID = Null");
                    reject();
                }
                this.userID = r.data.Response;
                console.log(this.userID);
                this.platform = "2"
            }) .then(() =>
            {
                axios.get(
                    "https://www.bungie.net/Platform/Destiny2/" + this.platform + "/Profile/" + this.userID + "/?components=100",
                    {
                        headers:
                        {
                            "X-API-KEY": ""
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