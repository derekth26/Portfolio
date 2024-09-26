import { PrismaClient } from '@prisma/client';
import fs from 'fs/promises';

const prisma = new PrismaClient();

async function seedData() {
  try {
    // Read the contents of the JSON file
    const data = await fs.readFile('jobs.json', 'utf-8');
    const jobs = JSON.parse(data);

    // Create job postings in the database
    for (const job of jobs.job_postings) {
      await prisma.job.create({
        data: {
          title: job.title,
          date_posted: job.date_posted,
          company: job.company,
          job_type: job.job_type,
          location: job.location,
          description: job.description,
          qualifications: job.qualifications
        }
      });
    }

    console.log('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the seedData function
seedData();