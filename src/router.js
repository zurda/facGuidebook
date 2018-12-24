const handler = require("./handlers/handler");

const router = (req, res) => {
  const url = req.url;
  
// ---------------- POST METHOD -----------------
  if (req.method === 'POST') {
    if (url === "/submitPost") {
      handler.handlerSubmit(req, res);
    } else if(url === "/userLogin"){
      handler.handlerLogin(req, res);
    }
      else if (url === '/form.html') {
      res.end("you're trying to access the post form");
    } else if (url === '/userSignUp') {
      handler.handlerSignUp(req, res);
    }
  }
  
// --------------- GET METHOD -------------------
else {
  if (url === "/") {
    handler.handlerHome(req, res);
  } else if (url === '/authenticate') {
    handler.handlerAuthenticate(req, res);
  } else if (url === '/restaurants') {
    handler.handlerRestaurants(req, res);
  } else if (url === '/users'){
    handler.handlerUsers(req, res);
  }else if (url.indexOf("public") !== -1) {
    console.log("going to handlerPUblic!!");
    handler.handlerPublic(req, res, url);
  }  else if(url === '/userLogout'){
    handler.handlerLogout(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 not found!");
  }
}

};

module.exports = router;
