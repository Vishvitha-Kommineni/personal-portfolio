
// =====================================
// DISPLAY TECHNICAL SKILLS
// =====================================

const skillsContainer =
    document.getElementById("skills-container");

skillCategories.forEach(function(category) {

    const categoryCard = document.createElement("div");

    categoryCard.className = "skill-category";

    const heading = document.createElement("h3");
    heading.textContent = category.title;

    const skillList = document.createElement("div");
    skillList.className = "skill-list";

    category.skills.forEach(function(skill) {

        const skillItem = document.createElement("span");

        skillItem.className = "skill-item";
        skillItem.textContent = skill;

        skillList.appendChild(skillItem);
    });

    categoryCard.appendChild(heading);
    categoryCard.appendChild(skillList);

    skillsContainer.appendChild(categoryCard);
});


// =====================================
// DISPLAY PROJECTS
// =====================================

const projectsContainer =
    document.getElementById("projects-container");

projects.forEach(function(project) {

    const projectCard = document.createElement("div");

    projectCard.className = "project-card";

    const projectName = document.createElement("h3");
    projectName.textContent = project.name;

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;

    const projectTechnologies = document.createElement("div");
    projectTechnologies.className = "project-tech";
    projectTechnologies.textContent =
        "Technologies: " + project.technologies;

    projectCard.appendChild(projectName);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectTechnologies);

    projectsContainer.appendChild(projectCard);
});


// =====================================
// DISPLAY CERTIFICATIONS
// =====================================

const certificationsContainer =
    document.getElementById("certifications-container");

certifications.forEach(function(certification) {

    const certificationCard = document.createElement("div");

    certificationCard.className = "certification-card";

    const certificationName = document.createElement("h3");
    certificationName.textContent = certification.name;

    const organization = document.createElement("p");
    organization.textContent = certification.organization;

    certificationCard.appendChild(certificationName);
    certificationCard.appendChild(organization);

    certificationsContainer.appendChild(certificationCard);
});


// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);
});


// Close navigation after clicking a link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// =====================================
// AUTOMATIC FOOTER YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();
