# The Resume Project

For installation clone the git repository: https://github.com/tlbchoudhury/P3-ResumeProject

Open the P3-ResumeProject application by right clicking on the index.html file & open with your preferred browser after downloading the code repository from: https://github.com/tlbchoudhury/P3-ResumeProject

The resume includes an image of me, my education, work experience, projects, and an interactive map which shows where I have lived and worked. There is a GitHub and LinkedIn icon in the footer of the page which opens up to new tabs.  

-index.html: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
-js/helper.js: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. 
-js/resumeBuilder.js: resumeBuilder.js contains my code.
-js/jQuery.js: The jQuery library.
-css/style.css: Contains all of the CSS needed to style the page.

There are four JSONs, each one representing a different resume section.
-work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.
-projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.
-bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.
-education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.

-Each JSON has been iterated through and the information was appended to index.html in the sections.
