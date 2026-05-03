// Main application logic

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponents();
    
    // Dispatch event after components are loaded to initialize UI scripts
    document.dispatchEvent(new Event('componentsLoaded'));
});

async function loadComponents() {
    try {
        const [navbarRes, footerRes] = await Promise.all([
            fetch('components/navbar.html'),
            fetch('components/footer.html')
        ]);
        
        const navbarHtml = await navbarRes.text();
        const footerHtml = await footerRes.text();
        
        const headerPlaceholder = document.getElementById('navbar-placeholder');
        const footerPlaceholder = document.getElementById('footer-placeholder');
        
        if (headerPlaceholder) headerPlaceholder.innerHTML = navbarHtml;
        if (footerPlaceholder) footerPlaceholder.innerHTML = footerHtml;
        
        // Set active link based on current page
        const path = window.location.pathname;
        const page = path.split("/").pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === page) {
                link.classList.add('active');
            }
        });
        
    } catch (error) {
        console.error('Error loading components:', error);
    }
}
