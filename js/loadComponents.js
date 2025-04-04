// ---- File: loadComponents.js ----

document.addEventListener('DOMContentLoaded', () => {
    const componentsToLoad = [
        // Sidebar Components
        { id: 'header-placeholder', path: 'components/header.html' },
        { id: 'contact-placeholder', path: 'components/contact.html' },
        { id: 'languages-placeholder', path: 'components/languages.html' },
        // { id: 'skills-quick-placeholder', path: 'components/skills-quick.html' }, // If you add this

        // Main Content Components
        { id: 'education-placeholder', path: 'components/education.html' },
        { id: 'experience-placeholder', path: 'components/experience.html' },
        { id: 'projects-placeholder', path: 'components/projects.html' },
        { id: 'publications-placeholder', path: 'components/publications.html' },
        { id: 'skills-placeholder', path: 'components/skills.html' },
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
            return; // Don't proceed if placeholder is missing
        }

        // Check if the placeholder is inside the 'main-content' area
        const isMainContent = placeholder.closest('.main-content');

        // Add the base section class ONLY if it's a main content section
        // Sidebar sections already have it applied in index.html
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
            contentWrapper.innerHTML = html.trim(); // Trim whitespace

            // Add AOS attribute to the direct child fetched (which is the outer div in the component file)
            const firstChild = contentWrapper.firstElementChild;
            if (firstChild) {
                 firstChild.setAttribute('data-aos', 'fade-up');
                 // You can keep the other AOS attributes here if needed, or rely on AOS.init defaults
                 firstChild.setAttribute('data-aos-duration', '600');
                 firstChild.setAttribute('data-aos-once', 'true');
            } else {
                 // Fallback if the fetched content is not wrapped in a single element (less ideal)
                 contentWrapper.setAttribute('data-aos', 'fade-up');
                 contentWrapper.setAttribute('data-aos-duration', '600');
                 contentWrapper.setAttribute('data-aos-once', 'true');
            }


            // Clear placeholder and append new content
            placeholder.innerHTML = '';
            // Append the children of the wrapper, not the wrapper itself,
            // to avoid nested divs if the component already has one.
            while (contentWrapper.firstChild) {
                placeholder.appendChild(contentWrapper.firstChild);
            }

        } catch (error) {
            console.error(`Failed to load component ${component.path}:`, error);
            placeholder.innerHTML = `<div class="text-red-400 p-4 bg-red-900/30 rounded-lg border border-red-500/50">Error loading: ${component.path}. ${error.message}</div>`;
            // Ensure error box gets styling if the cv-section wasn't added before error
            if (isMainContent && !placeholder.classList.contains('cv-section')) {
                placeholder.classList.add('cv-section');
            }
        }
    };

    // Load all components concurrently
    Promise.all(componentsToLoad.map(loadComponent))
        .then(() => {
            console.log('All components loaded successfully.');
            if (loadingStatus) {
                loadingStatus.style.display = 'none'; // Hide loading indicator
            }

            // Initialize AOS after all content is potentially loaded and placeholders populated
            AOS.init({
                offset: 100, // trigger animations sooner/later
                duration: 600, // default duration
                easing: 'ease-in-out-quad', // default easing
                once: true, // whether animation should happen only once - while scrolling down
                // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
            });

             // Optional: Re-refresh AOS slightly after initialization in case of layout shifts
            setTimeout(() => {
                AOS.refresh();
                console.log('AOS refreshed.');
            }, 100); // Small delay

        })
        .catch(error => {
             console.error('Error loading one or more components:', error);
             if (loadingStatus) {
                 loadingStatus.textContent = 'Error loading some CV sections.';
                 loadingStatus.classList.remove('text-cyan-400');
                 loadingStatus.classList.add('text-red-400', 'font-semibold');
             }
             // Consider initializing AOS even if some sections fail,
             // but be aware animations might not apply to error placeholders.
             // AOS.init({ once: true });
        });
});