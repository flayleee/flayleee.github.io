// Mobile menu toggle for navbar
document.addEventListener('DOMContentLoaded', function(){
    const btn = document.querySelector('.menu-toggle');
    const dropdown = document.querySelector('.mobile-dropdown');
    const writeBtn = document.querySelector('.mobile-write-btn');

    if(!btn || !dropdown) return;

    btn.addEventListener('click', function(e){
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if(expanded){
            dropdown.hidden = true;
            if(writeBtn) writeBtn.hidden = true;
            btn.textContent = 'Меню';
        } else {
            dropdown.hidden = false;
            if(writeBtn) writeBtn.hidden = false;
            btn.textContent = 'Закрыть';
        }
    });

    // Close when clicking outside
    document.addEventListener('click', function(e){
        if(!dropdown.hidden && !dropdown.contains(e.target) && !btn.contains(e.target) && (!writeBtn || !writeBtn.contains(e.target))){
            dropdown.hidden = true;
            if(writeBtn) writeBtn.hidden = true;
            btn.setAttribute('aria-expanded', 'false');
            btn.textContent = 'Меню';
        }
    });

    // Gallery scroll buttons
    const galleryContainer = document.querySelector('.gallery-container');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    const nextBtn = document.querySelector('.gallery-btn.next');

    if(galleryContainer && prevBtn && nextBtn){
        function updateButtons() {
            const atStart = galleryContainer.scrollLeft <= 0;
            const atEnd = galleryContainer.scrollLeft >= galleryContainer.scrollWidth - galleryContainer.clientWidth - 1; // small tolerance
            prevBtn.classList.toggle('disabled', atStart);
            nextBtn.classList.toggle('disabled', atEnd);
        }

        prevBtn.addEventListener('click', () => {
            galleryContainer.scrollBy({left: -300, behavior: 'smooth'});
        });
        nextBtn.addEventListener('click', () => {
            galleryContainer.scrollBy({left: 300, behavior: 'smooth'});
        });

        galleryContainer.addEventListener('scroll', updateButtons);
        updateButtons(); // initial state
    }
});
