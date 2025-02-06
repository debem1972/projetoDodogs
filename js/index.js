document.addEventListener('DOMContentLoaded', function () {
    // ScrollSpy
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#sidebar',
        offset: 70
    });

    // Controle do submenu
    const servicosLink = document.getElementById('servicosLink');
    const servicosSubmenu = document.getElementById('servicosSubmenu');

    servicosLink.addEventListener('click', function (e) {
        servicosSubmenu.classList.toggle('show');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fecha submenu quando clicar em um item dele
    document.querySelectorAll('.submenu .nav-link').forEach(link => {
        link.addEventListener('click', function () {
            // Mantém o submenu aberto para melhor navegação
            // servicosSubmenu.classList.remove('show');
        });
    });

    // Atualiza submenu baseado na posição do scroll
    window.addEventListener('scroll', function () {
        const servicesSection = document.getElementById('servicos');
        if (servicesSection) {
            const rect = servicesSection.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                servicosSubmenu.classList.add('show');
            } else {
                servicosSubmenu.classList.remove('show');
            }
        }
    });
});
