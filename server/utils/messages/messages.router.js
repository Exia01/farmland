/**
 * Required External Modules and Interfaces
 */
const express = require('express');
const { verifyToken } = require('../auth');
const { getPublicMessage, getProtectedMessage } = require('./messages.service');

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

messagesRouter.get('/protected-message', verifyToken, async (req, res) => {
  try {
    const message = getProtectedMessage();
    res.status(200).send(message);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = messagesRouter;
