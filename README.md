# Jess_site (Project 1 for Code Institute)

![responsive layout of web app](https://github.com/The-masta-blasta/Jessica_webapp/blob/master/app/assets/images/responsive-design.png)


This project is a progressive web app built for Irish poet, Jessica Traynor – to showcase her latest Poetry, Book releases, videos, and blog posts. The web app has been optimised for performance, accessibility and offline access.



## UX


I used the five levels of design (Jesse James Garrett) in my approach to user experience, building the UI from the strategy plan through to the surface plan.


The following questions were asked:


* Who is this website for?
* What it is that the users want to achieve?
* How does this project address the above questions?


The site is primarily for readers, potential purchasers, and arts administrators/festival organisers. The intention of the users is to buy books, contact the author for work opportunities, and to get information on the author's workshops and upcoming events.


### User stories:


The following user stories were used -

#### Reader:

As a reader, I want to see a list of books, blogs and current works written by Jessica, so that I can buy her books and read her latest writings and thoughts.

Actions:

* Navigate to the home page. 
* Scroll to the information on Jessica's latest book release. 
* Click on the button to see more books. 
* Decide to buy a book or not. 
* Click buy this book. A new tab opens in my browser showing the publisher's order form for the book. 
* Complete order and decide to look for more of Jessica's work. 
* Click the expandible menu and navigate to the Poetry section of Jessica's web app. 
* Read some poems and save the page in the browser history for later reading.

#### Arts administrator:

As an Arts administrator, I want to get in touch with Jessica so that I can discuss work opportunities with her.

Actions: 

* Open the web app home page. 
* Scroll to the contact form. 
* Fill out the contact form with incorrect details (see error messages). 
* Repeat the process of filling in the contact form with correct details. 
* Click the send message button. No errors appear.

#### Festival organiser:

As a festival organiser, I want to view Jessica's work and get in touch with her so that I can discuss possible work opportunities with her.


Action: 

* Open the web app home page. 
* Scroll to the information on Jessica's latest book release. 
* Click on the button to see more books. 
* Click the expandible menu and navigate to the Poetry section. 
* Browse some of the poems.
* Open the expandable menu and navigate to the contact page.
* Fill out the contact form with incorrect details and see error messages. 
* Repeat the process of filling in the contact form with correct details.
* Click the send message button. No errors appear.


View wireframes: [wireframes](https://github.com/KevinCurtisDev/Jessica_webapp/blob/master/app/Jess-Wireframe.pdf) 


### Features


Progressive web app: I have used a service worker to cache assets, and to prompt the user to download the site as a web app to their device's home screen. This effectively allows the user to open and use the web app even when their device is offline. The included manifest.json file also assists in mobile functionality- allowing the web app to launch and display like a native app.


Accessibility: The site has been optimised for accessibility – using semantic HTML and aria roles and labels where appropriate.


Navigation: Navigation for the site is through a hamburger menu that, on tapping/clicking, expands to cover the entire screen. The visual effects and the menu state were achieved entirely through css, using the css “checkbox hack.” For accessibility I have included a hidden element allowing screen readers to skip to the main content of the page.


Site header: The site header takes advantage of white space to draw the user's attention to the center of the page where Jess's name and a number of social Icons are displayed, with an image of a bird (from the cover of Jess's latest book) slightly in the background. The header takes up 70% of the screen, leaving a visual que to scroll down to the welcome section, which offers a brief introduction to the site.


Video: Users can view the video (embedded from youtube) that loads on the index.html page. They can also opt to view additional videos by clicking the button below the currently displayed video. Clicking this button links the user to a dedicated video page.


Books: There is one book listed on the main page of the site (this is the book that is currently being launched). Users can view other books by Jessica by clicking the see more books button.


Contact: The contact form is placed at the bottom of the page. It promts the user to get in touch via a simple form asking for your name, email address, and message. Aria labels are included in the form for accessibility purposes.



## Technologies Used


HTML5 – Semantic html was used throughout the site, with a strong emphasis placed on accessibility (using aria and best practices).


Post CSS – Post CSS was used in order to make the css more organised and manageable. Flexbox was implemented to achieve the sites responsive design.


Normalize.css was used to implement a css reset.


Javascript (es2015) – javascript was used to implement the service worker script in order to allow site functionality when the user is offline.


Gulp was used as the project task runner, to compress, organise and compile the final distribution of the web app.


## Testing


Responsive design: responsive design was tested on google chrome webdeveloper tools. Once the site was uploaded to github pages it was also tested on a number of phones, tablets, laptop and desktop screens.


Browser compatibility: The site was run on multiple browsers, including chrome, chrome canary, firefox, IE, opera.


Progressive: The site was run through google chrome's lighthouse audit and scored full marks in all areas including, progressive, accessibility, SEO, performance.


Offline capability: Tested on an iphone 5s, iphone 8, sony xperia, samsung 8, and multiple desktops, laptops and tablets. Any page visited while online remained available offline when the site was reloaded.


Native app experience: Tested on iphone 5s, iphone 8, sony xperia, samsung 8. The site downloaded with an app icon to each homescreen. The app launched with a splash screen displaying the app icon at the appropriate size. Once launched, the site displayed in the full size of the view window without the usual upper and lower browser bars. The top bar on each android device also changed to the colour theme set, this feature didn't work for iphone models.


## Deployment


This site has been deployed on GitHub pages and can be viewed here: [live preview of project](https://kevincurtisdev.github.io/Jessica_webapp/) 

## Difficulties

The most challenging area in building this web app was striking a good balance between design and following what Jessica (the poet the site is designed for) wanted to display. An other challenging area was cache management when using the service worker. This is an area of the site that still needs improvement.

## Further Enhancements

I would like to continue to make the web app offline friendly by integrating indexBD into the contact form, allowing users to send a message offline and later have the message delivered when their device connects to the internet.

The site's load time would benefit further by inlining css for above the fold content in order to mitigate the render blocking styles during the critocal rendering path.

## Credits

All content was supplied by Jessica Traynor


## Media


Art work supplied by Denise Nestor. Photos used in this project were obtained from Jessica Traynor and dedalus press with permission.


## Acknowledgements


I based the hamburger navigation on the navigation menu used by Jonas Schmedtmann - Advanced CSS and Sass course on Udemy. 

The script used to defer embedded videos is from [varvy.com](https://varvy.com/pagespeed/defer-videos.html), written by Patrick Sexton