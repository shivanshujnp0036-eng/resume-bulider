 // =====================================
// RESUME BUILDER JAVASCRIPT
// =====================================


// ---------- PERSONAL DETAILS ----------

const personalForm = document.querySelector("#name")?.closest("form");

if (personalForm) {

    personalForm.addEventListener("submit", function (event) {

        event.preventDefault();

        localStorage.setItem(
            "name",
            document.getElementById("name").value
        );

        localStorage.setItem(
            "email",
            document.getElementById("email").value
        );

        localStorage.setItem(
            "phone",
            document.getElementById("phone").value
        );

        localStorage.setItem(
            "address",
            document.getElementById("address").value
        );

        localStorage.setItem(
            "career",
            document.getElementById("career").value
        );

        window.location.href = "education.html";
    });
}


// ---------- EDUCATION ----------

const educationForm = document.querySelector("#degree")?.closest("form");

if (educationForm) {

    educationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const education = `
Degree: ${document.getElementById("degree").value}
College: ${document.getElementById("college").value}
Passing Year: ${document.getElementById("year").value}
Percentage/CGPA: ${document.getElementById("percentage").value}

12th School: ${document.getElementById("school12").value}
12th Board: ${document.getElementById("board12").value}
12th Percentage: ${document.getElementById("percentage12").value}

10th School: ${document.getElementById("school10").value}
10th Board: ${document.getElementById("board10").value}
10th Percentage: ${document.getElementById("percentage10").value}
        `;

        localStorage.setItem("education", education);

        window.location.href = "skills.html";
    });
}


// ---------- SKILLS ----------

const skillsForm = document.querySelector("#skill1")?.closest("form");

if (skillsForm) {

    skillsForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const skills = [
            document.getElementById("skill1").value,
            document.getElementById("skill2").value,
            document.getElementById("skill3").value,
            document.getElementById("skill4").value,
            document.getElementById("skill5").value,
            document.getElementById("otherSkills").value
        ];

        localStorage.setItem(
            "skills",
            JSON.stringify(skills)
        );

        window.location.href = "experience.html";
    });
}


// ---------- EXPERIENCE ----------

const experienceForm =
    document.querySelector("#company")?.closest("form");

if (experienceForm) {

    experienceForm.addEventListener("submit", function (event) {

        event.preventDefault();

        localStorage.setItem(
            "company",
            document.getElementById("company").value
        );

        localStorage.setItem(
            "job",
            document.getElementById("job").value
        );

        localStorage.setItem(
            "startDate",
            document.getElementById("startDate").value
        );

        localStorage.setItem(
            "endDate",
            document.getElementById("endDate").value
        );

        localStorage.setItem(
            "description",
            document.getElementById("description").value
        );

        window.location.href = "projects.html";
    });
}


// ---------- PROJECTS ----------

const projectForm =
    document.querySelector("#projectName")?.closest("form");

if (projectForm) {

    projectForm.addEventListener("submit", function (event) {

        event.preventDefault();

        localStorage.setItem(
            "projectName",
            document.getElementById("projectName").value
        );

        localStorage.setItem(
            "technology",
            document.getElementById("technology").value
        );

        localStorage.setItem(
            "projectDescription",
            document.getElementById("projectDescription").value
        );

        localStorage.setItem(
            "projectLink",
            document.getElementById("projectLink").value
        );

        window.location.href = "preview.html";
    });
}


// ---------- RESUME PREVIEW ----------

if (document.getElementById("previewName")) {

    document.getElementById("previewName").innerText =
        localStorage.getItem("name") || "Your Name";

    document.getElementById("previewEmail").innerText =
        "Email: " + (localStorage.getItem("email") || "");

    document.getElementById("previewPhone").innerText =
        "Phone: " + (localStorage.getItem("phone") || "");

    document.getElementById("previewAddress").innerText =
        "Address: " + (localStorage.getItem("address") || "");


    // Career Objective

    document.getElementById("previewCareer").innerText =
        localStorage.getItem("career") ||
        "Your career objective will appear here.";


    // Education

    document.getElementById("previewEducation").innerText =
        localStorage.getItem("education") ||
        "Your education details will appear here.";


    // Skills

    const skillsList =
        document.getElementById("previewSkills");

    const savedSkills =
        JSON.parse(localStorage.getItem("skills")) || [];

    skillsList.innerHTML = "";

    savedSkills.forEach(function (skill) {

        if (skill.trim() !== "") {

            const li = document.createElement("li");

            li.innerText = skill;

            skillsList.appendChild(li);
        }
    });


    // Experience

    document.getElementById("previewJob").innerText =
        localStorage.getItem("job") || "Job Position";

    document.getElementById("previewCompany").innerText =
        localStorage.getItem("company") || "Company Name";

    document.getElementById("previewDescription").innerText =
        localStorage.getItem("description") ||
        "Work experience details will appear here.";


    // Project

    document.getElementById("previewProjectName").innerText =
        localStorage.getItem("projectName") ||
        "Project Name";

    document.getElementById("previewTechnology").innerText =
        "Technology: " +
        (localStorage.getItem("technology") || "");

    document.getElementById("previewProjectDescription").innerText =
        localStorage.getItem("projectDescription") ||
        "Project description will appear here.";
}


// ---------- CLEAR RESUME DATA ----------

function clearResume() {

    localStorage.clear();

    alert("Resume data has been cleared!");

    window.location.href = "index.html";
}


// ---------- DOWNLOAD / PRINT ----------

function downloadResume() {

    window.print();
}