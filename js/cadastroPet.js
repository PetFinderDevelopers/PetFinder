window.addEventListener('load', () => {
    // After 2 seconds, hide the loading screen and show the content
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const content = document.getElementById('content');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        if (content) {
            content.style.display = 'block';
        }
    }, 2000);
});