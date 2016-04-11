

//$("#main").append(["Talbia Choudhury"]);

// var awesomeThoughts= "My name is Talbia and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts= awesomeThoughts.replace("AWESOME!", "FUN");
// $("#main").append(funThoughts);

var formattedName= HTMLheaderName.replace("%data%", "Talbia Choudhury");
$("#header").append(formattedName);
var formattedRole= HTMLheaderRole.replace("%data%", "Front End Web Developer");
$("#header").append(formattedRole);

var bio= {
	"name": "Talbia Choudhury",
	"role": "Front End Web Developer",
	"contacts": 
		{
		"phone": "919-904-1744",
		"email": "tlbchoudhury@gmail.com",
		"github": "https://github.com/tlbchoudhury",
		"location": "Dallas"
	},
	"welcomeMessage": "I am interested in becoming a Front End Web Developer.",
	"skills": ["Java Script", " JQuery", " CSS", " HTML", "Bootstrap"],
	"bioPic": "./images/IMG_Me.jpg"
}
 

// var formattedContact= HTMLcontactGeneric.replace("%data%", bio.contacts);
// $("#header").append(HTMLcontactGeneric);
var formattedMobile= HTMLmobile.replace("%data%", bio.contacts.phone);
$("#header").append(formattedMobile);
var formattedEmail= HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);
var formattedGithub= HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedGithub);
var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedLocation);


var formattedBioPic= HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

//$("#main").append(bio);

var education={
	"schools": [
		{
			"name": "NC State University",
			"city": "Raleigh",
			"degree": "BS",
			"major": ["BioChemistry"],
			"dates": 2012
		}],
	"onlineDegree": [
		{
			"title": "Nanodegree",
			"school": "Udacity",
			"dates": 1016,
			"url": "http://www.udacity.com"
		}]
	}

var work={
	"jobs": [
		{
			"employer": "At-ForeFront",
			"title": "Front End Web Developer",
			"dates": "3/2016- Present",
			"location": "Irving",
			"description": "Develop responsive websites using HTML, CSS, and Bootstrap. Also use PhotoShop to enhance images.",
			"url": "http://atforefront.com/"
		},
		{
			"employer": "BASF Chemical Company",
			"title": "Biologist",
			"dates": "9/2012- 4/2014",
			"location": "Durham",
			"description": "Conduct experiments & make changes to the experiments as needed, collect data, & deliver presentations.",	
			"url": "https://www.basf.com/us/en.html"
		}
	]
}


function displayWork() {
	for (index in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
		formattedEmployer= formattedEmployer.replace("#", work.jobs[index].url);
		var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
		var formattedworklocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);


		var formattedEmployerTitleDatesLocationDescription = formattedEmployer + " " + formattedworkTitle + " " + formattedworkDates + " " + formattedworklocation + " " + formattedworkDescription;
		$(".work-entry:last").append(formattedEmployerTitleDatesLocationDescription);	
	}
};

displayWork();



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
}
		
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
} 

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

projects.display();


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



