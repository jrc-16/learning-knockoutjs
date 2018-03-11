## Introduction
This introduction illustrates some of the key points of MVVM:

- You've got a clean, object-oriented representation of your UI's data and behaviors (your viewmodel)

- Separately, you've got a declarative representation of how it should be displayed visibly (your view)

- You can implement arbitrarily sophisticated behaviors just by updating the viewmodel object. You don't have to worry about which DOM elements need to be changed/added/removed - the framework can take care of synchronizing things for you.			

## How to run this project

From the branch `single-page-applications/step-2` the project relies on using a web server in order to use external files.

In that branch run

``` js
http-server
```

Then navigate to

``` js
http://localhost:8080/
```

### Further information

As its been a while since picking up this project again, a more simple way to get a Nodejs server up and running is to use the [http-server] (https://www.npmjs.com/package/http-server) module. The project home page details basic installation and usage instructions.

For usage further usage instructions [follow this tutorial](http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server)
