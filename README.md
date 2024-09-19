SPACE INVADERS
by Finn McDougall

Contents
What I'm Creating
Plan
    Setting up wire frame
    Getting each page barebones
In depth:
Home Page
Settings
Game



I am Creating Space Invaders


My Plan



Homepage

This is the main page with the game and the settings to work as a popup
I set this up to house 2 buttons and the title
There is audio playing on entry to the game
An animated background



Settings Page
The settings page will have both the volume controls and colour pickers for the player
The pop up is small as it only needs to encompass the 2 settings selectors  q

Game Page
Grid Creation
Adding in the settings button
Understanding how to move coloured cells on setInterval as an array

Shooting -
    On spacebar, have a block spawn right above the player sprite and 'shoot' up the map until it comes into contant with the enemy

    spacebar click
        document.addEventListener("keydown", playerShooting)

    spawn object
    
    player[i] -= width
    
    decrease width for rows
    
    when 2 classes are present 'enemy/missile' delete that array block