// ---- File: loadComponents.js ----

document.addEventListener('DOMContentLoaded', () => {
    const componentsToLoad = [
        // Sidebar Components
        { id: 'header-placeholder', path: 'components/header.html' },
        { id: 'contact-placeholder', path: 'components/contact.html' },
        { id: 'languages-placeholder', path: 'components/languages.html' },

        // Main Content Components
        { id: 'education-placeholder', path: 'components/education.html' },
        { id: 'experience-placeholder', path: 'components/experience.html' },
        { id: 'projects-placeholder', path: 'components/projects.html' },
        { id: 'publications-placeholder', path: 'components/publications.html' },
        { id: 'skills-placeholder', path: 'components/skills.html' },
        { id: 'online-courses-placeholder', path: 'components/online_courses.html' },
        { id: 'international-placeholder', path: 'components/international.html' },
        { id: 'volunteering-placeholder', path: 'components/volunteering.html' },
        { id: 'conferences-placeholder', path: 'components/conferences.html' },
        { id: 'military-placeholder', path: 'components/military.html' },
    ];

    const loadingStatus = document.getElementById('loading-status');

    const loadComponent = async (component) => {
        const placeholder = document.getElementById(component.id);
        if (!placeholder) {
            console.error(`Placeholder element with ID "${component.id}" not found.`);
            return; 
        }

        const isMainContent = placeholder.closest('.main-content');

        if (isMainContent) {
            placeholder.classList.add('cv-section');
        }

        try {
            const response = await fetch(component.path);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} for ${component.path}`);
            }
            const html = await response.text();
            const contentWrapper = document.createElement('div');
            contentWrapper.innerHTML = html.trim(); 

            const firstChild = contentWrapper.firstElementChild;
            if (firstChild) {
                 firstChild.setAttribute('data-aos', 'fade-up');
                 firstChild.setAttribute('data-aos-duration', '600');
                 firstChild.setAttribute('data-aos-once', 'true');
            } else {
                 contentWrapper.setAttribute('data-aos', 'fade-up');
                 contentWrapper.setAttribute('data-aos-duration', '600');
                 contentWrapper.setAttribute('data-aos-once', 'true');
            }


            placeholder.innerHTML = '';
            while (contentWrapper.firstChild) {
                placeholder.appendChild(contentWrapper.firstChild);
            }

        } catch (error) {
            console.error(`Failed to load component ${component.path}:`, error);
            placeholder.innerHTML = `<div class="text-red-400 p-4 bg-red-900/30 rounded-lg border border-red-500/50">Error loading: ${component.path}. ${error.message}</div>`;
            if (isMainContent && !placeholder.classList.contains('cv-section')) {
                placeholder.classList.add('cv-section');
            }
        }
    };

    Promise.all(componentsToLoad.map(loadComponent))
        .then(() => {
            console.log('All components loaded successfully.');
            if (loadingStatus) {
                loadingStatus.style.display = 'none'; 
            }

            AOS.init({
                offset: 100, 
                duration: 600, 
                easing: 'ease-in-out-quad', 
                once: true, 
            });

            setTimeout(() => {
                AOS.refresh();
                console.log('AOS refreshed.');
            }, 100); 

        })
        .catch(error => {
             console.error('Error loading one or more components:', error);
             if (loadingStatus) {
                 loadingStatus.textContent = 'Error loading some CV sections.';
                 loadingStatus.classList.remove('text-cyan-400');
                 loadingStatus.classList.add('text-red-400', 'font-semibold');
             }
        });
});
