document.addEventListener('DOMContentLoaded', () => {
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');

    const getSettings = () => {
        return {
            visibility: document.querySelector('input[name="visibility"]:checked').value,
            accessPermissions: document.getElementById('accessList').value,
            startDate: document.getElementById('startDate').value,
            endDate: document.getElementById('endDate').value,
            attempts: document.getElementById('attempts').value,
            feedbackTiming: document.querySelector('input[name="feedbackTiming"]:checked').value,
            gradeDisplay: document.querySelector('input[name="gradeDisplay"]:checked').value,
            notifications: {
                start: document.getElementById('startNotification').checked,
                completion: document.getElementById('completionNotification').checked,
                grading: document.getElementById('gradingNotification').checked
            }
        };
    };

    const saveSettings = () => {
        const settings = getSettings();
        console.log('Settings saved:', settings);
        // Here you would typically send the settings to a server or save them locally
        alert('Settings have been saved.');
    };

    saveSettingsBtn.addEventListener('click', saveSettings);
});
