
#sBox
A (work in progress) rapid prototype environment.

##How to use
`npm install` dependancies

command | use case | &nbsp;
------------ | ------------- | -------------
`gulp` | Prototyping | Edit files inside /resources/ and let gulp take care of the rest
`gulp` | unit tests | navigate to "yourlocalhost/test"

##Current Configuration
#####Node
1. Router : Express
2. View Engine : Handlebars
3. Tests : Too small to require.

#####Client
1. Router : None ( considering...)
2. View Manager : None ( considering... )
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

######Author Notes
> "Somewhere, something incredible is waiting to be known." - Carl Sagan