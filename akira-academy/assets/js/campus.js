// Logic for Campus Page

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('campus-locations')) {
        renderLocations();
    }
});

function renderLocations() {
    const container = document.getElementById('campus-locations');
    container.innerHTML = ''; // Clear loading state
    
    academyData.campusLocations.forEach(loc => {
        const card = document.createElement('div');
        card.className = 'cybr-card';
        
        let statusColor = 'text-blue';
        if (loc.status === 'Restricted') statusColor = 'text-pink';
        if (loc.status === 'Maintenance') statusColor = 'text-purple';
        
        card.innerHTML = `
            <h3 class="glow-text">${loc.name}</h3>
            <span class="cybr-badge" style="margin-bottom: 1rem;">ID: ${loc.id}</span>
            <p style="margin-bottom: 1rem;">${loc.description}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem;">
                <span class="${statusColor}" style="font-weight: bold;">[${loc.status}]</span>
                <span style="font-family: var(--font-display); font-size: 0.9rem;">${loc.coordinates}</span>
            </div>
            <button class="cybr-btn" style="margin-top: 1.5rem; width: 100%; height: 40px; line-height: 40px; font-size: 1rem;">Access Sector</button>
        `;
        
        container.appendChild(card);
    });
}
