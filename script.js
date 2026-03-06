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
});
