/* Link to this JavaScript file in your HTML to enable About Us page functionality */
<link rel="stylesheet" href="css_assets/styles.css"></link>

/* About Us Page JavaScript */
console.log("About Us Assetes JavaScript Loaded");
const aboutSection = document.querySelector('.about-section');
const aboutHeading = aboutSection.querySelector('h1');
const aboutParagraph = aboutSection.querySelector('p');
aboutHeading.textContent = "About Be My Muse";
aboutParagraph.textContent = "Be My Muse is dedicated to inspiring creativity and innovation. Our mission is to provide a platform where ideas can flourish and individuals can find their muse.";

/* Team Section JS */
const teamSection = document.querySelector('.team-section');
const teamMembers = teamSection.querySelectorAll('.team-member');
teamMembers.forEach((member, index) => {
    member.querySelector('h2').textContent = `Team Member ${index + 1}`;
    member.querySelector('p').textContent = `This is a brief bio for team member ${index + 1}. They bring unique skills and perspectives to our team.`;
});

/* History Section JS */
const historySection = document.querySelector('.history-section');
const historyHeading = historySection.querySelector('h2');
const historyParagraph = historySection.querySelector('p');
historyHeading.textContent = "Our Journey";
historyParagraph.textContent = "Since our inception, Be My Muse has been on a journey to empower individuals through creativity. Our milestones include launching innovative projects and building a vibrant community.";

/* End of JS */

