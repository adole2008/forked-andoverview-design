# a possible andoverview website design?
here is the code i spent way too much time on this. its really just some design choices etc and other features we could think of implementing in wordpress

for the backend im using node.js + express, obv all of this u can ignore because we are using wordpress

and yes i imported hundreds of real articles cause why not

u can also ignore the article editing system i set up, that can't work in wordpress
## features
*   so basically it looks hella nice if i may say so myself
*   making an account and creating posts etc is fully functional
*   stuffs and such
*   find the easter egg on the write for us page! (dont cheat by looking at the code)
## HOW TO RUN ON YUR COMPUTER
**first you need stuff**
*   node.js. just go get it from their website. the LTS one is probably fine
**ok now do the thing**
1.  **get the code.** download the zip, use git, i don't care just get it on your computer
    ```sh
    git clone https://github.com/tnkrueckergreen/CUSTOM-ANDOVERVIEW-DESIGN-PROTOTYPE.git
    ```
2.  **navigate to the project directory**
    ```sh
    cd CUSTOM-ANDOVERVIEW-DESIGN-PROTOTYPE
    ```
    you should see something like:
    ```
    ~/CUSTOM-ANDOVERVIEW-DESIGN-PROTOTYPE $
    ```
3.  **install all the packages.** this will download like half the internet into a folder called `node_modules`
    ```sh
    npm install
    ```
    you should see output like:
    ```
    npm WARN deprecated something@1.0.0: some warning message
    
    added 214 packages, and audited 215 packages in 5s
    
    25 packages are looking for funding
      run `npm fund` for details
    
    found 0 vulnerabilities
    ```
4.  **turn it on**
    ```sh
    npm start
    ```
    you should see:
    ```
    > andoverview-dynamic@1.0.0 start
    > node backend/server.js
    
    Server is running and listening on port 3000
    Database initialized successfully.
    ```
5.  **look at it!** open your browser and go to `http://localhost:3000`. if it works, aMaZiNg. if not, figure it out. ask chat or smth idk

also i realize the code is hundreds of files but its better than a few monolithic files. im following best modular coding practices ☝️🤓 and its easier to see what's going on (somewhat)

credit to chat for helping me with lots of js code and logic and backend and css etc but good god it cant design for shit u wasted my time chat but thank u anyway
also credit to inspect element for helping me ~~steal~~ borrow css code etc from expensive website templates

the end.
