document.addEventListener('DOMContentLoaded', () => {
    fetchContent('academics', '#academic-content');
    fetchContent('digital-skills', '#digital-skills-content');
    fetchContent('profile', '#profile-content');
    fetchContent('settings', '#settings-content');
    fetchContent('security', '#security-content');
    document.getElementById('toggle-mode').addEventListener('click', toggleMode);
});

async function fetchContent(section, selector) {
    try {
        // Placeholder for Gemini API call
        const dummyContent = {
            'academics': '<p>Here is some academic content loaded from the Gemini API.</p>',
            'digital-skills': '<p>Here is some digital skills content loaded from the Gemini API.</p>',
            'profile': '<p>Here is profile content loaded from the Gemini API.</p>',
            'settings': '<p>Here is settings content loaded from the Gemini API.</p>',
            'security': '<p>Here is security content loaded from the Gemini API.</p>',
        };

        document.querySelector(selector).innerHTML = dummyContent[section];
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}