(r(((( Bvar express = require('express');
var Job = require('../models/schemas/job');
var User = require('../models/user');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Job.find(function(err, jobs) {
      if (err) return res.status(500).send(err);

      return res.send(jobs);
    });
  })
  .post(function(req, res) {
    console.log('we are in the post');
    Job.create(req.body, function(err, job) {
      console.log('we are in the callback');
      if (err) return res.status(500).send(err);

      return res.send(job);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Job.findById(req.params.id, function(err, job) {
      if (err) return res.status(500).send(err);

      return res.send(job);
    });
  })
  .put(function(req, res) {
    Job.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'success' });
    });
  })
  .delete(function(req, res) {
    Job.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'success' });
    });
  });

module.exports = router;
