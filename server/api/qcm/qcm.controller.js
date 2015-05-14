'use strict';

var _ = require('lodash');
var Qcm = require('./qcm.model');

// Get list of qcms
exports.index = function(req, res) {
  Qcm.find(function (err, qcms) {
    if(err) { return handleError(res, err); }
    return res.json(200, qcms);
  });
};

// Get a single qcm
exports.show = function(req, res) {
  Qcm.findById(req.params.id, function (err, qcm) {
    if(err) { return handleError(res, err); }
    if(!qcm) { return res.send(404); }
    return res.json(qcm);
  });
};

// Creates a new qcm in the DB.
exports.create = function(req, res) {
  Qcm.create(req.body, function(err, qcm) {
    if(err) { return handleError(res, err); }
    return res.json(201, qcm);
  });
};

// Updates an existing qcm in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Qcm.findById(req.params.id, function (err, qcm) {
    if (err) { return handleError(res, err); }
    if(!qcm) { return res.send(404); }
    var updated = _.merge(qcm, req.body);
    if(req.body && Array.isArray(req.body.questions)){
      updated.questions = req.body.questions;
    }
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, qcm);
    });
  });
};

// Deletes a qcm from the DB.
exports.destroy = function(req, res) {
  Qcm.findById(req.params.id, function (err, qcm) {
    if(err) { return handleError(res, err); }
    if(!qcm) { return res.send(404); }
    qcm.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}