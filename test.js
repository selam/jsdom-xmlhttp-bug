var jsdom = require('jsdom');
var virtualConsole = jsdom.createVirtualConsole();

virtualConsole.on("jsdomError", function (error) {
    console.error(error.message, error.detail);
});

jsdom.env({
     url: "http://localhost/~timu/workspace/jsdom-xmlhttp-bug/test.html",
     virtualConsole: virtualConsole.sendTo(console),
     features: {
         FetchExternalResources : ["link", "script"],
           ProcessExternalResources: ["link", "script"],
           SkipExternalResources: false
     },
     onload: function(window){
         console.log("Loaded");
     }
});
