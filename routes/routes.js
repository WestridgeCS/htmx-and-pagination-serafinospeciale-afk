import express from 'express';
import mongoose from 'mongoose';
import Person from '../models/Person.js';

const router = express.Router();

// TODO: write a helper function isHX(req) that returns true if request is from HTMX


async function getPagedPeople(page, limit) {
  // TODO:
  // 1) Make sure page is a number >= 1
  // 2) Make sure limit is <= 50
  // 3) Compute skip
  // 4) Query total count AND the people list
  // 5) Sort by last name, then first name
  // 6) Apply skip and limit
  // 7) Compute totalPages
  // 8) Return an object: { people, total, page, limit, totalPages }

  return {
    people: [],
    total: 0,
    page: 1,
    limit,
    totalPages: 1
  };
}

// GET /people (index shell OR table partial)
router.get('/', async (req, res, next) => {
  try {
    // TODO: call getPagedPeople using req.query.page and limit 10

    // TODO: if request is HTMX, render the table partial only

    // TODO: otherwise render the full index page and pass data

    res.send('TODO: build GET /people');
  } catch (err) {
    next(err);
  }
});

// POST /people/seed (fetch 20 from randomuser.me, store in Mongo)
router.post('/seed', async (req, res, next) => {
  try {
    // TODO:
    // 1) fetch from: https://randomuser.me/api/?results=20&nat=us
    // 2) parse JSON
    // 3) map results into Person docs { first, last, email, phone, city, state, avatar }
    // 4) clear the collection (deleteMany({}))
    // 5) insertMany(docs)
    // 6) get page 1 data (10 per page)
    // 7) if HTMX: render people/_table with page 1
    // 8) else redirect to /people

    res.redirect('/people');
  } catch (err) {
    next(err);
  }
});

// GET /people/:id (show partial only)
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    // if id is not a valid ObjectId, return 404
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('Not found');
    }

    // TODO: find the person by id

    // TODO: if not found, return 404

    // TODO: render the show partial and pass person

    res.send('TODO: build GET /people/:id');
  } catch (err) {
    next(err);
  }
});

export default router;
