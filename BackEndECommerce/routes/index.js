const router = require('express').Router();
const apiRoutes = require('./api');

//this line sets a middleware using the use method of the router. any request to the /api path should be handled
//by the apiRoutes 
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;