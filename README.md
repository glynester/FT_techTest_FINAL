# FT_techTest

## INSTRUCTIONS 
Go to:
http://fintimesrfuntimes.herokuapp.com/  
Note: you must not use https or the api will not work.  

## DESCRIPTION
This application returns a list of FT headlines by querying the FT Developers API.

A user can make a search for a particular search topic.

The search can also be narrowed down by the type of "curation" the user would like to see, e.g. "articles" or "blogposts". If no curation is entered, then all curation types are returned.

A list is returned by the search. All items in the list are hyperlinked to their location in the FT cms.

The user can move their mouse down the list to see a summary of each item. The details of an item are shown as the mouse hovers over it, e.g. author, published date, short summary.
Once the mouse is moved on, the details are hidden and the next item's details are revealed.

If there is an error in the api call, this is handled. - but not displaying in error field currently (althought this is set up).

## Running Instructions
Type command to run the server: nodemon bin/www
Open in browser: http://localhost:3000/

## Technology
Built using the Express.js (node js) framework with javascript.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
FULL REQUIREMENT
Build a news headline aggregator
Build a website that shows a list of news headlines from Financial Times. You may use our Developer APIs to achieve this.

Provide a search box for users to search for headlines containing specific words (i.e. searching for "brexit" should return a list of brexit-related headlines).

Optionally, provide pagination for results, at 20 results per page.



This website should be:

Server-rendered
Progressively enhanced
Responsive
Accessible


For bonus points, the site should:

Be built using Javascript and node.js
Be deployed on Heroku
Not rely too heavily on client-side frameworks (i.e. Angular, React) or libraries like jQuery
Have a similar look and feel as ft.com
Be performant over 3G networks


It'd be really awesome if, on top of all that, your site:

Uses Origami Components
Works offline


Please submit a link to your functioning app. Make sure you bring your source code to the face to face interview.

Be careful when pushing your code publicly to a version control system like github, as other applicants may have access to your code. Entries deemed too similar will be immediately disqualified.
# FT_techTest_FINAL
