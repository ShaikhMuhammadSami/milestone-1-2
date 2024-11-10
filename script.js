
document.addEventListener('DOMContentLoaded', function () {
    const skillsFieldset = document.getElementById('skills');
    const toggleSkillsButton = document.getElementById('toggleSkillsButton');
    const skillsVisible = true;

    toggleSkillsButton.addEventListener('click', function () {
        skillsVisible = !skillsVisible; 
        if (skillsVisible) {
            skillsFieldset.style.display = 'block'; 
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsFieldset.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});
