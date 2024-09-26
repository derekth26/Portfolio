// your code goes here.
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchJobs} from '../js/api/jobs.js'; 

const searchForm = document.querySelector('#search-jobs-form');
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault(); //prevent refresh
  const query = document.querySelector('#query-input').value;
  

  try {
    const jobs = await fetchJobs(query);
    displayJobs(jobs, query);
  } catch (error) {
    console.error("Error fetching jobs");
  }
});


const displayJobs = (jobs, query) => {
    const searchedJobs = document.querySelector('#searched-jobs');
    searchedJobs.innerHTML = ''; // Clear previous results

    const filterJobs =jobs.filter(job =>
      job.title.toLowerCase().includes(query) 
    );
 
    if (filterJobs.length === 0) {
      searchedJobs.innerHTML = '<div class="text-dark">No Results Found</div>';
      return;
    }
 
    filterJobs.forEach(job => {
      const jobCard = `
        <li class="job-card card my-1" style="width: 18rem;">
          <div class="card-header">${job.company}</div>
          <div class="card-body">
            <h5 class="card-title">${job.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${job.location}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary">${job.date_posted}</h6>
            <button class="btn btn-primary view-job-button" job-data-id="${job.id}">View Job</button>
          </div>
        </li>`; 
      searchedJobs.innerHTML += jobCard; //append multiple job results and throw the value of jobCard into the searchedJobs html
    });
 
    
  };
  
