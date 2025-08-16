// Smooth scrolling navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});

// Project modal functionality
const projectData = {
    project1: {
        title: "Creative Branding Project",
        image: "images/manishaBussinessCard.png",
        description: "A comprehensive branding project that includes logo design, color palette, and brand guidelines. This project showcases modern design principles with a focus on clean aesthetics and brand identity.",
        technologies: "Adobe Illustrator, Photoshop",
        category: "Branding"
    },
    project2: {
        title: "Digital Illustration",
        image: "images/pj-1.png",
        description: "Custom digital illustration created for a client's marketing campaign. Features vibrant colors and engaging visual storytelling elements.",
        technologies: "Adobe Illustrator, Digital Art",
        category: "Illustration"
    },
    project3: {
        title: "Marketing Design",
        image: "images/ms2.png",
        description: "Marketing materials design including flyers, brochures, and digital assets. Focus on clear communication and visual hierarchy.",
        technologies: "Adobe Creative Suite",
        category: "Marketing"
    },
    project4: {
        title: "User Persona Design",
        image: "images/user Personna.png",
        description: "User persona development for UX/UI projects. Comprehensive research-based character profiles to guide design decisions.",
        technologies: "Research, Adobe Illustrator",
        category: "UX Design"
    },
    project5: {
        title: "Portrait Design",
        image: "images/mani_jpg.jpg",
        description: "Professional portrait design with artistic flair. Combines photography with digital enhancement techniques.",
        technologies: "Photoshop, Digital Art",
        category: "Portrait"
    },
    project6: {
        title: "Brand Identity System",
        image: "images/Project1.png",
        description: "Complete brand identity system including logo variations, typography, and application guidelines.",
        technologies: "Adobe Creative Suite",
        category: "Branding"
    },
    project7: {
        title: "Creative Portrait",
        image: "images/home.png",
        description: "Artistic portrait design showcasing creative photography and digital enhancement techniques. Features professional styling with modern aesthetic elements.",
        technologies: "Photoshop, Digital Art, Photography",
        category: "Portrait"
    },
    project8: {
        title: "Design Screenshot",
        image: "images/Screenshot 2025-08-16 150937.png",
        description: "Design process documentation and workflow screenshot. Demonstrates professional design methodology and creative process behind project development.",
        technologies: "Design Process, Documentation",
        category: "Process"
    }
};

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];
    
    if (project) {
        modalBody.innerHTML = `
            <div class="project-details">
                <img src="${project.image}" alt="${project.title}" class="modal-image" onclick="toggleFullSizeImage(this)">
                <div class="project-info">
                    <h2>${project.title}</h2>
                    <p class="project-category">${project.category}</p>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        <strong>Technologies:</strong> ${project.technologies}
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Full-size image functionality
function toggleFullSizeImage(img) {
    if (img.classList.contains('fullsize')) {
        // Exit full-size mode
        img.classList.remove('fullsize');
        document.body.style.overflow = 'hidden'; // Keep modal scroll disabled
    } else {
        // Enter full-size mode
        img.classList.add('fullsize');
        document.body.style.overflow = 'hidden';
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simple validation
            if (name && email && message) {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});
