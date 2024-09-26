// your code goes here.

// Fetch Jobs

export async function fetchJobs() {
    const url = "http://localhost:3000/jobs"; 

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error");
        }

        const jobs = await response.json();
        return jobs;
    } catch (error) {
        console.error("Error fetching jobs");
    }
};

//View Details

  const detailCards = document.getElementById('job-details-card');

  document.addEventListener('click', async (e) => {
      if (e.target.classList.contains('view-job-button')) {
          e.preventDefault();

          
          const jobId = e.target.getAttribute('job-data-id');
          

          try {
              const jobs = await fetchJobs();
              

              // Find the job with matching ID
              const job = jobs.find(job => job.id == jobId);
              

              if (job) {
                  jobDetails(job);
              } else {
                  console.error("Job not found");
              }
          } catch (error) {
              console.error("Error fetching job details", error);
          }
      }
  });

  const jobDetails = (job) => {
      const jobInfo = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${job.title}</h3>
                <h4 class="card-subtitle mb-2 text-body-secondary pb-3">${job.company}</h4>
                <h6 class="card-subtitle mb-2 text-body-secondary ">${job.location}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary pb-3">${job.date_posted}</h6>
                <h5 class="card-subtitle mb-2">Description</h5>
                <p class="card-text">${job.description}</p>
                <h5 class="card-subtitle mb-2">Qualifications</h5>
                <p class="card-text">${job.qualifications}</p>
                <button class="btn btn-success save-job">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                    </svg>
                    Save Job
                </button>
            </div>
        </div>
      `;
      detailCards.innerHTML += jobInfo;
  };









