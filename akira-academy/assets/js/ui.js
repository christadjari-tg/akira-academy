// UI Interactions

document.addEventListener('componentsLoaded', () => {
    initMobileMenu();
});

function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Function to handle tab switching on profile
function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const btns = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(t => t.style.display = 'none');
    btns.forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}
