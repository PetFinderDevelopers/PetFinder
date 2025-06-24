document.addEventListener('DOMContentLoaded', () => {
    // Referências dos elementos
    const loadingScreen = document.getElementById('loading-screen');
    const introScreen = document.getElementById('introScreen');
    const btnEnterSite = document.getElementById('btnEnterSite');
    const loginBtn = document.querySelector('.login-btn');
    const loginModal = document.getElementById('loginModal');

    // Function to hide the loading screen and show the intro
    function hideLoadingScreen() {
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out'); // Add class for opacity transition
            loadingScreen.addEventListener('transitionend', () => {
                loadingScreen.classList.add('hidden'); // Hide completely after transition
                showIntroScreen();
            }, { once: true }); // Ensure event runs only once
        } else {
            // If loading screen is not present, just show intro
            showIntroScreen();
        }
    }

    // Function to show the intro screen
    function showIntroScreen() {
        if (introScreen) {
            introScreen.classList.remove('hidden'); // Make it visible
            // Force repaint to ensure transition
            void introScreen.offsetWidth;
            introScreen.classList.add('active'); // Add active class for opacity transition
        }
    }

    // Function to hide the intro screen (when "Entrar no site" is clicked)
    function hideIntroScreen() {
        if (introScreen) {
            introScreen.classList.remove('active'); // Remove active for fade out
            introScreen.addEventListener('transitionend', () => {
                introScreen.classList.add('hidden'); // Hide completely after transition
            }, { once: true });
        }
    }

    // Actions on page load
    window.addEventListener('load', () => {
        // Simulate a minimum loading time for the loading screen
        setTimeout(() => {
            hideLoadingScreen();
        }, 1500); // 1.5 seconds for the loading screen
    });

    // Event for the "Entrar no site" button on the intro
    if (btnEnterSite) {
        btnEnterSite.addEventListener('click', hideIntroScreen);
    }

    // Event for the Login Modal
    if (loginBtn && loginModal) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            loginModal.classList.add('active'); // Show modal
        });

        // Close modal when clicking outside of modal content
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) { // Check if the click was directly on the modal background
                loginModal.classList.remove('active');
            }
        });
    } else {
        console.warn('Login button or modal not found. Check IDs/classes.');
    }
});