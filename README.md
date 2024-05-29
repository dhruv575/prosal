# Prosal

This is just a silly little project that people can use to learn a bit more about web dev, but also in case people want a more romantic way of asking someone out! It's a very basic and not so great looking website (that does not work at all on mobile) as of now that just employs pretty basic javascript and css code. It has 4 sections, the first to talk a little bit more about who you are and would be as a partner and a chance to display some of your own personality, the second to talk about some of the things you like about the person you're askin out, the third so they can say yes, and the fourth to give some date ideas once they do say yes. It also has some silly little features, like the green flags turning green when hovered over, the special mouse and mouse trail, and the no button that runs away.

The main goal of this is to give people an intro into web dev and the whole process starting at forking a github to actually deploying a website. Hopefully you enjoy it at least a little bit.

## Getting Started
First, you're gonna want to fork the repository. In the top right hand corner of the Github page, you should see a "Fork" button. Go ahead and click on it to have your own personal app. Next, you are going to want to be able to open this code on your local environment. 

### Never Coded Before
If you have never coded before, let's start by downloading the latest version of Visual Studio Code from: https://code.visualstudio.com/download
Next, we will also be needing to have node.js and npm installed, which we can get from: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Once these are both installed, go ahead and retsart your computer. Then follow along with the rest of the readme as normal.

### After Installations
From your new forked repository, go ahead and press code and copy the link
Go to the terimnal and run 
```
git clone YOUR_LINK_HERE
cd prosal
code .
```
This should open a new VS code with your folder open. From here, run
```
npm install
npm run start
```
The install could take a couple minutes, but once it's done, you should be able to see the application for yourself after running npm run start at localhost:3000

## Changing Things
I highly reccomend you change basically everything and not just fill in the template (except maybe the scroll since that's more complicated), both for your own personal learning and so that it truly is unique for whoever you make it for. With that in mind, here's how to customize the different major parts. If you have any questions, leave a comment on the Tiktok and I'll try and answer there or adjust the README here to make them clearer.

### Structure
The website you are actually seeing at localhost:3000 is just the code in `App.js`. However, the way `App.js` (and many React projects) is structured is as a series of components. For example, the Header at the top is displayed by `<Header />` at line 48. You will also notice that the only things being directly displayed are the things in the return block. 
```
return (
<div className="App gradient-background">
    <Header />
    <Me />
    <You />
    <Decision />
</div>
);
```
If you would like to add another section, or remove a section, and have that be displayed on the actual website, you will need to make changes in `App.js`.

### Components
All of the components are stored in `src/components`. You will notice that each one has a `.css` file and a `.js` file. The `.js` file lays out the structure and specifics of our components, and the `.css` tells the website how those components should look stylistically. Therefore, if you wanted to add something to one of your components, like a line of text, you would make that chamge in the `.js` file, and if you wanted to make that line of text look a specific way, you would add a style in the `.css` file and link the two together. 
```
<div className="dates-item">
  <img src="/path/to/image2.png" alt="Date 2" className="dates-picture" />
  <h2>Title 2</h2>
  <p>Placeholder description for date 2.</p>
</div>
```
For example, this snippet from `dates.js`. Here we have 3 things (an image, a header, and a text) all grouped together into a div block. Div blocks are used to denote a solid component (i.e. connect multiple things), and this one is structured to be a "dates-item", while the image is structured to be a "dates-picture".

Looking at `dates.css`, we can see 
```
.dates-item {
  background-color: #8b0000; /* dark red */
  color: #ffffff; /* white text for better contrast */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.dates-item:hover {
  transform: scale(1.02);
}

.dates-picture {
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```
This code tells our website how to display the picture and box and how to style them (i.e. the picture should only be 12rem wide and 12rem tall).

You can go through and mess around with editing these components and see what changes happen on the website. The website should automatically reload anytime you save a `.js` file.

### Images

Images should be uploaded in the assets folder for consistency's sake. A good example of how you can import and place images in your website is in the Header component with the heart logo. Go ahead and follow that example for getting your images in when you do end up adding them as well!

### Where to go for help

Probably the best resource for help at this point is ChatGPT (I did use a decent bit of help from it to code this). If you give it code, as well as an explanation of what you want to change/fix, it will do a pretty great job at giving you edited code as well as explaining and pointing out what each edit does!

### Deploying the website

The easiest way to deploy websites like this is through Vercel in my opinion. The first thing we will need to do is push your changes to github. You will also need to push your changes to github anytime in the future when you want to see the changes go live on the domain (i.e. your changes will still appear on localhost:3000, but will not appear on pleasedateme.com without you pushing to github).

You can do this by 
```
git add .
git commit -m"TYPE WHATEVER CHANGES YOU MADE IN THESE QUOTES"
git push
```
Once this is all pushed, you can go to vercel: https://vercel.com/
Create an account, opt for hobby, and then connect your github.

From here, you should be able to select your github repositories. Choose prosal and deploy! This will take a few minutes but at the end you should be able to see your website live and have a couple of free link options to send to the person of your dreams