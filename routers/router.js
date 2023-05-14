import express from 'express';
let router = express.Router();

import links from './links.js';



links.forEach(function(link) {
    router.get(link.url, function(req, res, next) {
    //   console.log("trying to open " + link.url);
      res.render(link.page, {title: link.title,  layout: link.layout, description: link.description});
    });
  });


  export default router;