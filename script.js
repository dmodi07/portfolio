document.addEventListener('DOMContentLoaded', function() {
    // Project cards functionality
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Staggered animation on load
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
        
        card.addEventListener('click', function() {
            const projectId = this.dataset.project;
            
            // Add click animation with particles effect
            this.classList.add('clicked');
            createParticles(this);
            
            setTimeout(() => {
                this.classList.remove('clicked');
                
                // Redirect to supply chain project for first card
                if (projectId === '1') {
                    window.open('https://dmodi07.github.io/Supply-Chain/', '_blank');
                }
            }, 150);
        });
        

    });
    
    // Particle effect function
    function createParticles(element) {
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #667eea;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
            `;
            
            const rect = element.getBoundingClientRect();
            particle.style.left = (rect.left + rect.width/2) + 'px';
            particle.style.top = (rect.top + rect.height/2) + 'px';
            
            document.body.appendChild(particle);
            
            const angle = (i / 6) * Math.PI * 2;
            const velocity = 100;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { 
                    transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => particle.remove();
        }
    }
    

    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    

});