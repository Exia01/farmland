/**
 * Required External Modules and Interfaces
 */

const express = require('express');
const { getPublicMessage, getProtectedMessage } = require('./messages.service');
const { checkJwt } = require('../auth/check-jwt');

/**
 * Router Definition
 */

const messagesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET messages/

messagesRouter.get('/public-message', async (req, res) => {
  const message = getPublicMessage();
  res.status(200).send(message);
});

messagesRouter.get('/protected-message', checkJwt, async (req, res) => {
  try {
    const message = getProtectedMessage();
    res.status(200).send(message);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = messagesRouter;
