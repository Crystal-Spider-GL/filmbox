document.addEventListener('DOMContentLoaded', () => {

    // 1. Мобильное меню (Бургер)
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burgerMenu && mobileMenu) {
        burgerMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const isOpen = mobileMenu.classList.contains('active');
            burgerMenu.setAttribute('aria-expanded', String(isOpen));
        });

        // Закрыть меню при клике на ссылку
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                burgerMenu.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 2. Плавный скролл к секции CTA
    const scrollToPricing = () => {
        const pricingSection = document.querySelector('.cta-section');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Кнопка в hero
    const heroCtaBtn = document.getElementById('heroCtaBtn');
    if (heroCtaBtn) {
        heroCtaBtn.addEventListener('click', scrollToPricing);
    }

    // Кнопка "Выбрать тариф" в CTA-секции
    const pricingBtn = document.getElementById('pricingBtn');
    if (pricingBtn) {
        pricingBtn.addEventListener('click', () => {
            // Здесь можно открыть модалку выбора тарифа
            console.log('Открытие выбора тарифа');
        });
    }
});