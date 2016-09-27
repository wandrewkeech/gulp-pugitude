##Gulp-Pugitude

####The easy-to-use Static Site Generator that uses Pug (jade-lang), Sass, and Live-Server with Gulp

The content in this repository will be mostly the `gulpfile`, `pug` template
demos, and a wiki perhaps.  So far I am still learning how to package with npm
(this is a spare time project, and I'm no professional and have no idea what I'm
doing).

Pugitude is all about putting together the straight-forward static site
generator that I wish already existed.  Where most any other offering is
oriented toward blog content, Pugitude makes no assumptions about your content,
so there's no opinion to work around.  I wanted to make a generator that would
allow making portfolio or gallery sites sensible and streamlined.

##Installation
Cloning this repo is probably the best idea. First install NodeJS (I suggest
with a tool like the wonderful [nvm](https://github.com/creationix/nvm)). Then create
a project directory, and use git to install:
```bash
    $ git clone git@github.com:wandrewkeech/gulp-pugitude
```
Then move the contents of the new `gulp-pugitude/` folder up a directory so it's
in your project directory (how you actually wanted it):
```bash  
    $ cd gulp-pugitude/
    $ mv ./* ../
    $ cd ../
    $ rm -r gulp-pugitude/
```

Now finally, use `npm` to install the dependencies and a global copy of
gulp (I have no idea why the in-directory copy does not seem to work):
```bash 
    $ npm install --save-dev 
    $ npm install -g gulp 
```

##Useage
Generating the demo content is done with a straight-forward
```bash
    $ gulp
```
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
 - [ ] Perhaps have an error-catching call back to prevent `gulp` from exiting on
   a `pug` rendering error, if the user saves with a typo (or other syntax
   problems)
 - [ ] Follow-up on the declared deprecations in the `gulp` stack
 - [x] De-breakify this repo as it was, and come up with a conceivable way for
   other people to try the setup out

##Deps and Links
 - [Gulp](https://www.npmjs.com/package/gulp)
 - [Live Server](https://www.npmjs.com/package/live-server)
 - [Pug](http://www.jade-lang.com)
 - [Sass](http://www.sass-lang.com)
