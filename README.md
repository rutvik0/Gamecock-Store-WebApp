# Gamecock-Store-WebApp

Simply clone the files to a desired location
<br><br>
Open terminal, navigate to the file, and do the following commands:
<br><br>
```npm install -g firebase-tools```  (This installs firebase tools globally)
 <br><br>
 ```firebase login```  (You will be redirected to firebase where you login using your credentials)
 <br> <br>
 ```firebase init```
 <br><br>
 Now in the terminal prompt, choose the Hosting option, navigate using arrow keys and select using space.<br>
 Now you will be prompted to choose from an existing firebase project or create a new one <br>
 We will assume you already have an existing firebase project.<br><br>
 Now for the Hosting Setup<br>
 ```What do you want to use as your public directory?```: www <br>
 ```Configure as a single-page app (rewrite all urls to /index.html)?```: y<br>
 ```File www/index.html already exists. Overwrite?```: n<br>
 
 Now you are ready to deploy the web app. simply do firebase deploy. <br><br>
 ```firebase deploy``` <br><br>
 You will be prompted with the Hosting URL where the web app is hosted, click on it and you will be able to use the app.
