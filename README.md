Hi St Marg's Project Group 2! 
How do we start going about your project for today's lesson? 
You have clone this workspace in your Cloud 9, and Angular, Bootstrap, Jquery and Ui-router have already been installed for you.
We could use a Semantic-Ui framework to beef up your Polling Site. 
<b> So, what is Semantic-Ui?  </b> It is a modern front-end development framework, powered by LESS and jQuery. It has a sleek, subtle, and flat design look that provides a lightweight user experience. Hence, I think it would match your theme for the Polling Site.

##1) Install 'Semantic-UI' By typing this line into your Terminal: 
    bower install semantic-ui 
Then, wait for it to download the files into your Workspace. Check through your "index.html" file for its linking css & script tags, double check its directory whether it is correct: 
    <link rel="stylesheet" type="text/css" href="bower_components/semantic-ui/dist/semantic.css">
    <script type="text/javascript" src="bower_components/semantic-ui/dist/semantic.js"></script>
    
So, we have ng-app="pollingSite" and within the <body></body> tags, we have <div ui-view></div>. We are moving away from having full page html files, we are linking those relevant files with this main "index.html" file, while having various files (within templates FOLDER) ready to be routed in via our "app.js" & "controllers.js" files. 

2) Fill in the relevant 'About Us' details within "welcome.html" file. (Google for Semantic-Ui to see what you can include within) 

3) Group Work: Communicate with one another to decide on what type of look you girls want. Split the different parts of the Website to various group members, 
-"cvcpolling.html" file: 
    (a) Fill in the 'Terms and Conditions' for voting of Chairman & Vice Chairman (design using simple HTML CSS codes - look to semantic-ui/ bootstrap webpage for help) Try to include ICONS.
    (b) 'Return' & 'Proceed' Button at the bottom

-"tlpolling.html" file: 
    (a) Fill in the 'Terms and Conditions' for voting of Team Leaders (design using simple HTML CSS codes - look to semantic-ui/ bootstrap webpage for help) Try to include ICONS.
    (b) 'Return' & 'Proceed' Button at the bottom
    
-"endpolling.html" file: 
    (a) Fill in the relevant details you want, and design the page (you can add in image of SmartsMedia for instance)

4) JSON files
There are different json files to store the data (We will be using a backend database to store these information) but for now, if you have time, you can gather all these particulars first. We can input into the database another time, and it would be more efficient in this way.)
Already in this template, there are "team1.json" and "team2.json" files within the JSON FOLDER. The information is currently in an array of objects (take a team leader as 1 object). So, if there are more groups just add on accordingly. 
One basic set of information for a particular Team Leader would look like:
    {"team_no":"No 1",
    "name":"Apple Chew",
    "class":"1E2",
    "about_me":"I am ... ... ",
    "reason":"Why you should vote for me",
    "votecount":"",
    "image":"applechew.jpg"
    }
    
I will be around to guide you, so any questions do alert me. 
Happy coding!

Miss Ong
