import express from 'express';
import { connection } from '../conf';

const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

// afficher tous les artistes
router.get('/artist', (req, response) => {
  const theartist = req.query.playlist_id;
  connection.query('SELECT * FROM artist', theartist, (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.json(200, results);
    }
  });
});

// afficher tous les events
router.get('/event', (req, response) => {
  const theevent = req.query.playlist_id;
  connection.query('SELECT * FROM event', theevent, (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.json(200, results);
    }
  });
});

// créer un nouvel artiste
router.post('/newartist', (req, response) => {
  const formData = req.body;
  connection.query('INSERT INTO artist SET ?', formData, (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200, results);
    }
  });
});

// créer un nouvel event
router.post('/newevent', (req, response) => {
  const formData = req.body;
  connection.query('INSERT INTO artist SET ?', formData, (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200, results);
    }
  });
});

// suppression d'un artiste
router.delete('/artist/off/:id', (req, res) => {
  const idartist = req.params.artist_id;
  connection.query('DELETE FROM artist WHERE id = ?', [idartist], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// suppression d'un event
router.delete('/event/off/:id', (req, res) => {
  const idevent = req.params.event_id;
  connection.query('DELETE FROM artist WHERE id = ?', [idevent], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modif d'un artist id
router.put('/artist/:id', (req, res) => {
  const idartist = req.params.id;
  const formData = req.body;
  connection.query('UPDATE artist SET ? WHERE id = ?', [formData, idartist], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modif d'un event id
router.put('/event/:id', (req, res) => {
  const idevent = req.params.id;
  const formData = req.body;
  connection.query('UPDATE event SET ? WHERE id = ?', [formData, idevent], (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
