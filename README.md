# Jess_site (Project 1 for Code Institute)

![responsive layout of web app](./assets/images/responsive-design.png)


This project, the first of the code institute bootcamp projects, is a progressive web app that I've built for the award winning Irish poet, Jessica Traynor – to showcase her latest Poetry, Book releases, videos, and blog posts. The web app has been optimised for performance, accessibility and offline access.



## UX


I used the five levels of design (Jesse James Garrett) in my approach to user experience, building the UI from the strategy plan through to the surface plan.


The following questions were asked:


* Who is this website for?
* What it is that the users want to achieve?
* How does this project address the above questions?


The site is primarily for readers, potential purchasers, and arts administrators/festival organisers. The intention of the users is to buy books, contact the author for work opportunities, and to get information on the author's workshops and upcoming events.


### User stories:


The following user stories were used -

Reader:
As a reader, I want to see a list of books, blogs and current works written by Jessica, so that I can buy her books and read her latest writings and thoughts.

I navigate to the home page. I scroll to the information on Jessica's latest book release. I click on the button to see more books. I decide to buy a book. I click buy this book. A new tab opens in my browser showing the publisher's order form for the book. I complete my order and decide to look for more of Jessica's work. I click the expandible menu and navigate to the Poetry section. I read some poems and save the page in my browser history for later reading.

Arts administrator:
As an Arts administrator, I want to get in touch with Jessica so that I can discuss work opportunities with her.

I open the web app home page. I open the expandable menu and navigate to the contact page. I then fill out the contact form with incorrect details and see error messages. I then repeat the process of filling in the contact form with correct details and click the send message button. No errors appear.

Festival organiser:
As a festival organiser, I want to view Jessica's work and get in touch with her so that I can discuss possible work opportunities with her.

I open the web app home page. I scroll to the information on Jessica's latest book release. I click on the button to see more books. I click the expandible menu and navigate to the Poetry section. i browse some of the poems and then open the expandable menu and navigate to the contact page. I then fill out the contact form with incorrect details and see error messages. I then repeat the process of filling in the contact form with correct details and click the send message button. No errors appear.


View wireframes: [wireframes](https://the-masta-blasta.github.io/Jess_site/app/Jess-Wireframe.pdf) 


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


Responsive design: responsive design was tested on google chromes webdeveloper tools. Once the site was uploaded to github pages it was also tested on a number of phones, tablets, laptop and desktop screens.


Browser compatibility: The site was run on multiple browsers, including chrome, chrome canary, firefox, IE, opera.


Progressive: The site was run through google chrome's lighthouse audit and scored full marks in all areas including, progressive, accessibility, SEO, performance.


Offline capability: Tested on an iphone 5s, iphone 8, sony xperia, samsung 8, and multiple desktops, laptops and tablets. Any page visited while online remained available offline when the site was reloaded.


Native app experience: Tested on iphone 5s, iphone 8, sony xperia, samsung 8. The site downloaded with an app icon to each homescreen. The app launched with a splash screen displaying the app icon at the appropriate size. Once launched, the site displayed in the full size of the view window without the usual upper and lower browser bars. The top bar on each android device also changed to the color theme set, this feature didn't work for iphone models.


## Deployment


This site has been deployed on GitHub pages and can be viewed here: [live preview of project](https://the-masta-blasta.github.io/Jess_site/app/) 


## Credits

All content was supplied by Jessica Traynor


## Media


Art work and photos used in this project were obtained from Jessica Traynor and dedalus press with permission.


## Acknowledgements


I based the hamburger navigation on the navigation menu used by Jonas Schmedtmann - Advanced CSS and Sass course on Udemy.