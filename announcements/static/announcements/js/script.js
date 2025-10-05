document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-content');
    
    if (toggleButton) {
        const preview = document.getElementById('content-preview');
        const full = document.getElementById('content-full');
        
        toggleButton.addEventListener('click', function() {
            if (full.classList.contains('hidden')) {
                // Show full content
                preview.classList.add('hidden');
                full.classList.remove('hidden');
                toggleButton.textContent = 'Show less';
            } else {
                // Show preview
                preview.classList.remove('hidden');
                full.classList.add('hidden');
                toggleButton.textContent = 'Read more';
            }
        });
    }
});