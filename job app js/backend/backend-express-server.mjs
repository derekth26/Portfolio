import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

// create a new prisma orm client
const prisma = new PrismaClient();

// create the backend webserver
const app = express();

// enable cors
app.use(cors());

// read json body in response
app.use(express.json());

// Define routes and middleware here...

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// GET endpoint to list jobs and search for jobs
app.get('/jobs', async (req, res) => {
  try {

    const { q } = req.query;
    
    if (!q) {
    
      const jobs = await prisma.job.findMany();
      res.json(jobs);
      return
    }

    // Construct the query based on the provided parameters
    const jobs = await prisma.job.findMany({
      where:{
        OR: [
          { title: { contains: q } },
          { description: { contains: q } },
        ]
      }
    });

    res.json(jobs);
  } catch (error) {
    console.error('Error searching for jobs:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

// GET endpoint to fetch a single job by id
app.get('/jobs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const job = await prisma.job.findUnique({
      where: {
        id: parseInt(id)
      }
    });

    if (!job) {
      res.status(404).json({ error: 'Job not found' });
      return;
    }

    res.json(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
})

// POST endpoint to save a job
app.post('/saved-jobs', async (req, res) => {
  try {
    // parse the body of the request
    const { jobId } = req.body;

    // Create a new saved job record in the database
    const savedJob = await prisma.savedJob.create({
      data: {
        jobId: parseInt(jobId),
      },
    });

    res.status(201).json(savedJob);
  } catch (error) {
    console.error('Error saving job:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});

// GET endpoint to retrieve all saved jobs
app.get('/saved-jobs', async (req, res) => {
  try {
    // Fetch all saved job records from the database
    const savedJobs = await prisma.savedJob.findMany();

    res.json(savedJobs);
  } catch (error) {
    console.error('Error fetching saved jobs:', error);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});
