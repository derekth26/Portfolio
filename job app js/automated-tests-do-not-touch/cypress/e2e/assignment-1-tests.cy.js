
const BACKEND_BASE_URL= 'http://localhost:3000'
beforeEach(() => {
  cy.log("intercepting requests to the backend.")

  cy.intercept('GET', `${BACKEND_BASE_URL}/jobs*`, { fixture: 'all_jobs_response.json' })
  cy.intercept('GET', `${BACKEND_BASE_URL}/jobs`, { fixture: 'all_jobs_response.json' })

  cy.intercept('GET', `${BACKEND_BASE_URL}/jobs/1`, { fixture: 'job_1.json' })
  cy.intercept('GET', `${BACKEND_BASE_URL}/jobs/2`, { fixture: 'job_2.json' })


  cy.intercept('GET', `${BACKEND_BASE_URL}/jobs?q=machine*`, { fixture: 'machine_jobs_response.json' })
  cy.intercept('GET', `${BACKEND_BASE_URL}/jobs?q=machine`, { fixture: 'machine_jobs_response.json' })
  
  cy.intercept('GET', `${BACKEND_BASE_URL}/jobs?q=software*`, { fixture: 'software_response.json' })
  cy.intercept('GET', `${BACKEND_BASE_URL}/jobs?q=software`, { fixture: 'software_response.json' })
  // // bonus tests.
  cy.intercept('GET', `${BACKEND_BASE_URL}/saved-jobs*`, { body: [] })
  cy.intercept('GET', `${BACKEND_BASE_URL}/saved-jobs`, { body: [] })
  cy.intercept('POST', `${BACKEND_BASE_URL}/saved-jobs*`, { body: {} })
  cy.intercept('POST', `${BACKEND_BASE_URL}/saved-jobs`, { body: {} })
  cy.intercept('DELETE', `${BACKEND_BASE_URL}/saved-jobs*`, { body: {} })
  cy.intercept('DELETE', `${BACKEND_BASE_URL}/saved-jobs`, { body: {} })
})

describe('index is loaded correctly (debugging)', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
  })
})

describe('Job Page no search functionality', ()=> {
  it("Jobs should be populated on the page.", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')

    cy.log("check if jobs loaded successfully")
    cy.get('#searched-jobs').children().should('have.length.greaterThan', 19)
  })

  it("Clicking on the first job should show the job details", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')
  
    cy.log("click on the first job")
    cy.get('#searched-jobs').children().first().find('button').click()

    cy.log("check if the job details are shown")
    cy.get('#job-details-card').should('not.be.empty')

    cy.log("check if the job details are correct")

    cy.get('#job-details-card').should('contain', 'Database Administrator')
    cy.get('#job-details-card').should('contain', 'DataTech Enterprises')
    cy.get('#job-details-card').should('contain', 'Seattle, WA')
    cy.get('#job-details-card').should('contain', "We're seeking a skilled Database Administrator to manage and optimize our organization's databases for performance and reliability.")
    cy.get('#job-details-card').should('contain', "Strong problem-solving and troubleshooting skills")
    
  })

  it("Clicking on the second job should show the job details", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')
  
    cy.log("click on the first job")
    cy.get('#searched-jobs').children().eq(1).find('button').click()

    cy.log("check if the job details are shown")
    cy.get('#job-details-card').should('not.be.empty')

    cy.get('#job-details-card').should('contain', 'AI Product Manager')
    cy.get('#job-details-card').should('contain', 'AI Innovations Ltd.')
    cy.get('#job-details-card').should('contain', 'San Francisco, CA')
    cy.get('#job-details-card').should('contain', "We're looking for an experienced AI Product Manager")
    cy.get('#job-details-card').should('contain', "Excellent communication and leadership skills")
  })

})

describe('Page uses job backend searching correctly', ()=> {
  it("searches for jobs by typing 'machine' correctly", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')

    cy.log("get the search input, and type in the machine.")
    cy.get('input[name="query"]').type("machine")

    cy.log("submit the form")
    cy.get('#search-jobs-form').submit()

    cy.log("check that the jobs are loaded, there should be 3.")
    cy.get('#searched-jobs').children().should('have.length', 3)
  })

  it("searches for jobs by typing 'software' correctly", ()=> {
    cy.log("open the page.")
    cy.visit('http://localhost:8080')

    cy.log("get the search input, and type in the machine.")
    cy.get('input[name="query"]').type("software")

    cy.log("submit the form")
    cy.get('#search-jobs-form').submit()

    cy.log("check that the jobs are loaded, there should be 6.")
    cy.get('#searched-jobs').children().should('have.length', 6)
  })
})
