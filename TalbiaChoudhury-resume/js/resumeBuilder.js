
var model = {
	bio: {
		"name": "Talbia Choudhury",
		"role": "Front End Web Developer",
		"contacts": 
		{
			"mobile": "000-000-0000",
			"email": "tlbchoudhury@gmail.com",
			"github": "tlbchoudhury",
			"location": "Dallas"
		},
		"welcomeMessage": "I am interested in a challenging role as a Front End Web Developer.",
		"skills": ["Java Script", " JQuery", " CSS", " HTML", "Bootstrap"],
		"biopic": "./images/IMG_Me.jpg"
	},

	education:{
		"schools": [
		{
			"name": "NC State University",
			"degree": "BS",
			"dates": "2012",
			"location": "Raleigh",
			"majors": ["BioChemistry"],
			"url": "https://www.ncsu.edu/"
		}
		],
		"onlineCourses": [
		{
		"title": "Front End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": "2016",
		"url": "http://www.udacity.com"
		} 
		]
	},

	work: {
		"jobs": [
		{
		"employer": "At-ForeFront",
		"title": "Front End Web Developer",
		"dates": "03/2016- Present",
		"location": "Irving",
		"description": "Develop responsive websites using HTML, CSS, and Bootstrap. Also use PhotoShop to enhance images.",
		"url": "http://atforefront.com/"
		},
		{
		"employer": "BASF Chemical Company",
		"title": "Research Assistant",
		"dates": "09/2012- 04/2014",
		"location": "Durham",
		"description": "Conduct experiments & make changes to the experiments as needed, collect data, & deliver presentations.",	
		"url": "https://www.basf.com/us/en.html"
		}
		]
	},

	projects: {
		"projects": [
		{
		"title": "Aaron's Auto Repair Website",
		"dates": "03/2016",
		"description": "Built a website for an Auto repair shop.",
		"url": "http://aaronsautorepair.com/",
		"images": ["./images/AaronsAutoRepair.JPG"]
		}
		]
	},

	social: {
		"socialMedia":
		{
		"gitHub": "https://github.com/tlbchoudhury", 
		"linkedIn": "https://www.linkedin.com/in/talbia-choudhury-0b927943?trk=nav_responsive_tab_profile"
		}	
	}
};

var view = {

	bioDisplay: function() {

		var formattedRole= HTMLheaderRole.replace("%data%", model.bio.role);
		$("#header").prepend(formattedRole);

		var formattedName= HTMLheaderName.replace("%data%", model.bio.name);
		$("#header").prepend(formattedName);

		 
		addContactInfo('#topContacts');

		var formattedBioPic= HTMLbioPic.replace("%data%", model.bio.biopic);
		$("#header").append(formattedBioPic);

		var formattedWelcomeMsg= HTMLWelcomeMsg.replace("%data%", model.bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		
		if (model.bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for (skill in model.bio.skills) {
				var formattedSkill = HTMLskills.replace("%data%", model.bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		} 
		function addContactInfo(idName) {
			var formattedMobile= HTMLmobile.replace("%data%", model.bio.contacts.mobile);
			$(idName).append(formattedMobile);

			var formattedEmail= HTMLemail.replace("%data%", model.bio.contacts.email);
			$(idName).append(formattedEmail);

			var formattedGithub= HTMLgithub.replace("%data%", model.bio.contacts.github);
			$(idName).append(formattedGithub);

			var formattedLocation= HTMLlocation.replace("%data%", model.bio.contacts.location);
			$(idName).append(formattedLocation);
		}
		addContactInfo('#footerContacts');
	},

	educationDisplay: function() {
		for (index in model.education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", model.education.schools[index].name);
			formattedSchoolName = formattedSchoolName.replace("#", model.education.schools[index].url);

			var formattedDegree = HTMLschoolDegree.replace("%data%", model.education.schools[index].degree);

			formattedSchoolName = formattedSchoolName + formattedDegree;
			$(".education-entry:last").append(formattedSchoolName);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", model.education.schools[index].dates);
			$(".education-entry:last").append(formattedSchoolDates); 

			var formattedLocation = HTMLschoolLocation.replace("%data%", model.education.schools[index].location);
			$(".education-entry:last").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%", model.education.schools[index].majors);
			$(".education-entry:last").append(formattedMajor);
		}

		if(model.education.onlineCourses.length > 0) {
			$(".education-entry:last").append(HTMLonlineClasses);

			for (index in model.education.onlineCourses) {

				var formattedTitle = HTMLonlineTitle.replace("%data%", model.education.onlineCourses[index].title);
				
				var formattedSchool = HTMLonlineSchool.replace("%data%", model.education.onlineCourses[index].school);
				formattedTitle = formattedTitle + formattedSchool;
				$(".education-entry:last").append(formattedTitle);


				var formattedDates = HTMLonlineDates.replace("%data%", model.education.onlineCourses[index].dates);
				$(".education-entry:last").append(formattedDates);

				var formattedUrl = HTMLonlineURL.replace("%data%", model.education.onlineCourses[index].url);
				$(".education-entry:last").append(formattedUrl);
			}
		}
	},	

	workDisplay: function() {
		for (index in model.work.jobs) {
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", model.work.jobs[index].employer);
			formattedEmployer= formattedEmployer.replace("#", model.work.jobs[index].url);
			var formattedworkTitle = HTMLworkTitle.replace("%data%", model.work.jobs[index].title);
			formattedEmployer= formattedEmployer + formattedworkTitle; 
			$(".work-entry:last").append(formattedEmployer);

			var formattedworkDates = HTMLworkDates.replace("%data%", model.work.jobs[index].dates);
			$(".work-entry:last").append(formattedworkDates);

			var formattedworklocation = HTMLworkLocation.replace("%data%", model.work.jobs[index].location);
			$(".work-entry:last").append(formattedworklocation);

			var formattedworkDescription = HTMLworkDescription.replace("%data%", model.work.jobs[index].description);
			$(".work-entry:last").append(formattedworkDescription);

		}
	},

	projectsDisplay: function() {
	  for (project in model.projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", model.projects.projects[project].title);
		formattedTitle= formattedTitle.replace("#", model.projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDate = HTMLprojectDates.replace("%data%", model.projects.projects[project].dates);
		$(".project-entry:last").append(formattedDate);

		var formattedDescription = HTMLprojectDescription.replace("%data%", model.projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (model.projects.projects[project].images.length > 0) {
			for (image in model.projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", model.projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	  }
	},

	socialDisplay: function() {
		
		var formattedGitHub = HTMLSocialGit.replace("#", model.social.socialMedia.gitHub);
		$("#footerSocial").append(formattedGitHub);

		var formattedLinkedIn = HTMLSocialLinkedIn.replace("#", model.social.socialMedia.linkedIn);
		$("#footerSocial").append(formattedLinkedIn);
	}

};

var Octopus= {
	init: function() {
		view.bioDisplay();
		view.educationDisplay();
		view.workDisplay();
		view.projectsDisplay();
		view.socialDisplay();
	},	
	render: function(){
		$(document).click(function(loc) {
			var x = loc.pageX;
			var y = loc.pageY;
			logClicks(x,y);
		})
	}	
};

Octopus.init();
Octopus.render();
//$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);



