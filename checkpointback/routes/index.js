import express from 'express';
import connection from '../conf';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

// afficher tous les artistes
router.get('/artists', (req, response) => {
  connection.query('SELECT * FROM artist', (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});
// afficher tous les events
router.get('/events', (req, response) => {
  connection.query('SELECT * FROM event', (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

// afficher tous les artistes par nom, discipline
router.get('/artists/name', (req, response) => {
  connection.query('SELECT a.id, a.name, a.discipline FROM artist a', (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});
// afficher tous les events par titre, article
router.get('/events/title', (req, response) => {
  connection.query('SELECT e.title, e.article FROM event e', (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.json(results);
    }
  });
});

// afficher un artiste par id
router.get('/artist/:id', (req, response) => {
  const idartist = req.params.id;
  connection.query('SELECT a.name, a.logo, a.presentation, a.discipline FROM artist a WHERE id = ?', idartist, (err, results) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.json(200, results);
    }
  });
});
// afficher un event par id
router.get('/event/:id', (req, response) => {
  const idevent = req.params.id;
  connection.query('SELECT e.title, e.picture, e.article FROM event e WHERE id = ?', idevent, (err, results) => {
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
  connection.query('INSERT INTO artist SET ?', formData, (err) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});
// créer un nouvel event
router.post('/newevent', (req, response) => {
  const formData = req.body;
  connection.query('INSERT INTO event SET ?', formData, (err) => {
    if (err) {
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});
// créer une réservation
router.post('/booking', (req, response) => {
  const formData = req.body;
  connection.query('INSERT INTO booking SET ?', formData, (err) => {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.sendStatus(200);
    }
  });
});

// suppression d'un artiste
router.delete('/artist/off/:id', (req, res) => {
  const idartist = req.params.id;
  connection.query('DELETE FROM artist WHERE id = ?', idartist, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});
// suppression d'un event
router.delete('/event/off/:id', (req, res) => {
  const idevent = req.params.id;
  connection.query('DELETE FROM event WHERE id = ?', idevent, (err) => {
    if (err) {
      console.log(err);
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
