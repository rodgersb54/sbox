
#What's sBox?
1. sBox's intended use: a personal 'scratch pad' for web development prototyping.
2. sBox is a work in progress.

##How to use
`npm install` dependancies

command | use case | &nbsp;
------------ | ------------- | -------------
`gulp` | Prototyping | Edit files inside /resources/ and let gulp take care of the rest
`gulp` | Client side test runner | navigate to "yourlocalhost/test"

##Configuration
#####Node
1. Router : Express
2. View Engine : Handlebars
3. Tests : Too small to require.

#####Client
1. Router : None (considering options)
2. View Manager : None (considering options)
3. Tests : Mocha w/Chai.

#####HTML/CSS
1. SASS
2. Bootstrap

###Dependancies
See package.json for full list
+ Velocity
+ jQuery
+ Bootstrap
+ Express
+ Moment

##Future Considerations
+ Switch to hapi for node routing
+ Install structures for SPA prototyping
+ Remove Gulp and use npm as build tool
+ Install a nosql database
+ Command Options
+ Major Cleanup on node.js controllers

######Author Notes
> "Somewhere, something incredible is waiting to be known." - Carl Sagan