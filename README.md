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

2.  **run this command.** this will download like half the internet into a folder called `node_modules`
    ```sh
    npm install
    ```

3.  **turn it on**
    ```sh
    npm start
    ```

4.  **look at it** your computer should say something like `Server is running... on port 3000`. open your browser and go to `http://localhost:3000`. if it works, aMaZiNg. if not, figure it out. ask chat or smth idk

i forgot to say earlier that u need to install all the packages first do npm install express, bcrypt etc. basically look at package.json pls

also i realize the code is hundreds of files but its better than a few monolithic files. im following best modular coding practices 🤓 and its easier to see what's going on (somewhat)

credit to chat for helping me with lots of js code and logic and backend and css etc but good god it cant design for shit u wasted my time chat but thank u anyway

also credit to inspect element for helping me steal css code etc from websites i like

the end.
