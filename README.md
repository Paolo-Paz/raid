<html>
    <div class="navigation">
      <!--Pages will be added in future update-->   
        <p align="right"><a href="home.html">Home</a></p>
        <p align="right"><a href="public/index.html"><b>Destiny 2</b></a></p>
        <p align="right"><a href="about.html">About us</a></p>
    </div>
</html>
RAID  
This project has developed enough that I have launched the web application. I will be putting out one final update that will correct API calls for getting weekly raid completetion status. Please feel free to check out the site at https://master-choir-365517.uc.r.appspot.com/

RAID a tool for checking raid progress and hopefully some more cool stuff in the near future!
This requires Axios to function properly and a new file in your raid folder named config.js with the following code:
```js
const config = {
    token: "*INSERT YOUR TOKEN HERE*",
}

module.exports = config;
```
Simply insert your Bungie API token and run 'npm install' to install the dependencies required for this project from the root directory.
Please keep in mind that the Github page currently will not actually work as I have not completed the code to allow the JS to run on Github pages yet. I currently use Express on my machine to host the program and run it's function. I hope to fix this soon.

