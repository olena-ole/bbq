'use strict';

const emailCollectorForm = document.getElementById('email-collector');

emailCollectorForm.addEventListener('submit', e => {
    e.preventDefault();

    const ourFormData = new FormData(e.target);
    const userName = ourFormData.get('userName');
    const userEmail = ourFormData.get('userEmail');

    const updatedHTMLContent = `
        <h2 class="main-title">Congratulations, ${userName}!</h2>
        <p class="main-cta">You're on your way to becoming a BBQ Master!</p>
        <p class="small">You will get weekly BBQ tips sent to: ${userEmail}</p>
    `;

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = updatedHTMLContent;
});
