
var bio= {
	"name": "Talbia Choudhury",
	"role": "Front End Web Developer",
	"contacts": 
		{
		"mobile": "214-904-0000",
		"email": "tlbchoudhury@ymail.com",
		"github": "tlbchoudhury",
		"location": "Dallas"
	},
	"welcomeMessage": "I am interested in a challenging role as a Front End Web Developer.",
	"skills": ["Java Script", " JQuery", " CSS", " HTML", "Bootstrap"],
	"biopic": "./images/IMG_Me.jpg"
};


bio.display = function() {

	var formattedRole= HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName= HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	 
	addContactInfo('#topContacts');

	var formattedBioPic= HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg= HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	} 
	function addContactInfo(idName) {
		var formattedMobile= HTMLmobile.replace("%data%", bio.contacts.mobile);
		$(idName).append(formattedMobile);

		var formattedEmail= HTMLemail.replace("%data%", bio.contacts.email);
		$(idName).append(formattedEmail);

		var formattedGithub= HTMLgithub.replace("%data%", bio.contacts.github);
		$(idName).append(formattedGithub);

		var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
		$(idName).append(formattedLocation);
	}
	addContactInfo('#footerContacts');

};




var education={
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
			"title": "Nanodegree",
			"school": "Udacity",
			"dates": "2016",
			"url": "http://www.udacity.com"
		} 
	]
};

education.display = function() {
  for (index in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
		formattedSchoolName = formattedSchoolName.replace("#", education.schools[index].url);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
		$(".education-entry:last").append(formattedSchoolDates); 

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].majors);
		$(".education-entry:last").append(formattedMajor);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
		$(".education-entry:last").append(formattedDegree);
	}

	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);

		for (index in education.onlineCourses) {

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
			$(".education-entry:last").append(formattedTitle);

			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
			$(".education-entry:last").append(formattedSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[index].url);
			$(".education-entry:last").append(formattedUrl);
		}
	}
};	


var work= {
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
			"title": "Biologist",
			"dates": "09/2012- 04/2014",
			"location": "Durham",
			"description": "Conduct experiments & make changes to the experiments as needed, collect data, & deliver presentations.",	
			"url": "https://www.basf.com/us/en.html"
		}
	]
};


work.display = function() {
	for (index in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		formattedEmployer= formattedEmployer.replace("#", work.jobs[index].url);
		$(".work-entry:last").append(formattedEmployer);

		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		$(".work-entry:last").append(formattedworkTitle);

		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		$(".work-entry:last").append(formattedworkDates);

		var formattedworklocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		$(".work-entry:last").append(formattedworklocation);

		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
		$(".work-entry:last").append(formattedworkDescription);

	}
};



var projects = {
	"projects": [
		{
			"title": "Aaron's Auto Repair Website",
			"dates": "03/2016",
			"description": "Built a website for an Auto repair shop.",
			"url": "http://aaronsautorepair.com/",
			"images": ["./images/AaronsAutoRepair.JPG"]

		}
	]
};
		

projects.display = function() {
  for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	formattedTitle= formattedTitle.replace("#", projects.projects[project].url);
	$(".project-entry:last").append(formattedTitle);

	var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDate);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
  }
};

var social = {
	"socialMedia":
		{
		"gitHub": "https://github.com/tlbchoudhury", 
		"linkedIn": "https://www.linkedin.com/in/talbia-choudhury-0b927943?trk=nav_responsive_tab_profile"
		}	
};

social.display = function() {
	
	var formattedGitHub = HTMLSocialGit.replace("#", social.socialMedia.gitHub);
	$("#footerSocial").append(formattedGitHub);

	var formattedLinkedIn = HTMLSocialLinkedIn.replace("#", social.socialMedia.linkedIn);
	$("#footerSocial").append(formattedLinkedIn);
};

bio.display();
education.display();
work.display();
projects.display();
social.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});
		

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

//$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);



