# Note Taker
This is a full-stack web application that allows the user to create, 
save, and delete notes to and from a MySQL database.
![Landing Page](/screenshots/ss1.png?raw=true)
The landing page features a 'get started' button that, when clicked, allows the user to access the notes page.
![New Note](/screenshots/ss2.png?raw=true)
Upon clicking the 'get started' button, the user will be redirected to this page. The left side of the page contains a list of the titles of previously saved notes. The right side features a blank note, with 'note title' and 'note text' as placeholders.
![Saved Note](/screenshots/ss5.png?raw=true)
Clicking one of the saved titles will cause the saved note text and title to appear in place of 'note title' and 'note text' so that the user may view their saved notes. Clicking the red trashcan icon in the saved notes list deletes the selected note from the database.
![Creating Note](/screenshots/ss3.png?raw=true)
By clicking the pencil icon in the upper right corner of the navbar, the user may create a new note. After entering a note title and some note text, a save icon will appear in the upper right corner of the screen in the nav bar (next to the pencil icon).
![Saving Note](/screenshots/ss4.png?raw=true)
When the save icon is clicked, the note  will be saved into the list of other saved notes and the page will revert back to the new note template. At any time, the user may navigate back to the start page by clicking 'note taker' in the upper left corner of the screen.

*The application itself was pre-developed by Trilogy; I developed the server and the routes that connect the client to the database.

## Technologies
Database: MySQL

Frameworks/Libraries: Node, Express, jQuery, Bootstrap

## Links
[Deployed Application](https://fierce-plains-84379.herokuapp.com/)