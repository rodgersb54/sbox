
#sBox
A (work in progress) rapid prototype environment.

##Usage
1. `npm install` dependancies

command | usage | 
---------------
`gulp` | Prototyping | Edit files inside /resources/

+ For Prototyping: run `gulp` in terminal, then do your edits in /resources/ and let gulp take care of the rest.
+ For Testing: run `gulp` in terminal, then navigate to "yourlocalhost/test"

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

######Author Notes
> "Somewhere, something incredible is waiting to be known." - Carl Sagan