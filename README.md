##Gulp-Pugitude

I've messed up with the packaging, and in testing any method to reproduce a
working build everything breaks. Don't use this repo or any install method for
now.

~~__The easy-to-use Static Site Generator that uses Pug, Sass, and Live-Server with Gulp.__

The content in this repository will be mostly the `gulpfile`, `pug` template demos,
and a wiki perhaps?

##Installation
Cloning this repo is probably ~~not~~ the best idea ~~(so you don't need to
disentangle your project from this one)~~, because I'm a scrub who can't package
npm modules yet. First install NodeJS (I suggest
with a tool like the wonderful https://github.com/creationix/nvm ). Then create
a project directory, and use git
to install:

    $ git clone git@github.com:wandrewkeech/gulp-pugitude

Then move the contents of the new `gulp-pugitude/` folder up a directory so it's
in your project directory (how you actually wanted it):
    
    $ cd gulp-pugitude/
    $ mv ./* ../
    $ cd ../
    $ rm -r gulp-pugitude/

##Useage
Generating the demo content is done with a straight-forward

    $ gulp

which should build all the content first (which automatically mirrors the
structure of your source directory tree), watch all source directories, fire up
`live-server`, and open your browser. Updates will appear automatically and very
quickly in your browser window (as soon as I fix the bug with running
`live-server` from within `gulp`).

##Issues
 - [ ] Build a comprehensive demo of `pug` features and use in the demo project
 - [ ] Build a `sass` theme for the demo project (likely borrow from
http://www.jade-lang.com ) 
 - [ ] Get automatic refresh in browser with live-server working with `gulp`
_much more than that too I'm sure_~~
