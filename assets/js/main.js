function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerText = profileData.name;
    
    const job = document.getElementById('profile.job');
    job.innerText = profileData.job;
    
    const location = document.getElementById('profile.location');
    location.innerText = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerText = profileData.phone;

    const email = document.getElementById('profile.email');
    email.innerText = profileData.email;
    email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
    const softSkillsList = document.getElementById('profile.skills.softSkills');

    softSkillsList.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkillsList = document.getElementById('profile.skills.hardSkills');

    hardSkillsList.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

function updateLanguages(profileData) {
    const languagesList = document.getElementById('profile.languages');

    languagesList.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

function updatePortfolio(profileData) {
    const portfolioList = document.getElementById('profile.portfolio');

    portfolioList.innerHTML = profileData.portfolio.map(project => {
        return `<li>
                    <h3 class="title ${project.git ? "github" : ""}">${project.name}</h3>
                    <a href="${project.url}" target="_blank">${project.url}</a>
                </li>`
    }).join('');
}

function updateProfessionalExperience(profileData) {
    const professionalExperienceList = document.getElementById('profile.professionalExperience');

    professionalExperienceList.innerHTML = profileData.professionalExperience.map(job => {
        return `<li>
                    <h3 class="title">${job.name}</h3>
                    <span class="period">${job.period}</span>
                    <p>${job.description}</p>
                </li>`
    }).join('');
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
})();