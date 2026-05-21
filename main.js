// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Prevent duplicate initialization
    if (window.mainJSInitialized) return;
    window.mainJSInitialized = true;

    // --- Utility: Throttle Function for Performance ---
    const throttle = (func, limit) => {
        let lastFunc;
        let lastRan;
        return function () {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function () {
                    if ((Date.now() - lastRan) >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        }
    }

    // --- 1. Intersection Observer for Scroll Animations ---
    const initAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        let staggerDelay = 0;
        let lastEntryTime = 0;

        const scrollObserver = new IntersectionObserver((entries) => {
            const currentTime = Date.now();
            if (currentTime - lastEntryTime > 100) {
                staggerDelay = 0; // Reset stagger if significant time has passed
            }
            lastEntryTime = currentTime;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('appear');
                        entry.target.classList.add('active'); // For .reveal classes
                    }, staggerDelay);
                    staggerDelay += 80; // 80ms stagger
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.animate-on-scroll, .reveal');
        if (animatedElements.length > 0) {
            animatedElements.forEach(el => scrollObserver.observe(el));
        }
    };

    // --- 2. Navbar Scroll Effect ---
    const initNavbar = () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const handleScroll = () => {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                // Only remove scrolled if it's the homepage (transparent hero)
                if (document.body.classList.contains('home-page') || !navbar.classList.contains('force-scrolled')) {
                    navbar.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', throttle(handleScroll, 100));
        // Initial check
        handleScroll();
    };

    // --- 3. Smooth Anchor Scrolling ---
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (!targetId || targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const navbarElement = document.querySelector('.navbar');
                    const navbarHeight = navbarElement ? navbarElement.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // --- 4. Form Submission Handling ---
    const initForms = () => {
        // Contact Form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitBtn = contactForm.querySelector('button');
                if (!submitBtn) return;

                submitBtn.disabled = true;
                const originalText = submitBtn.innerHTML;
                submitBtn.textContent = 'Processing...';

                setTimeout(() => {
                    contactForm.innerHTML = `
                        <div style="text-align: center; padding: 4rem 2rem;">
                            <div style="font-size: 5rem; margin-bottom: 2rem; color: var(--primary);">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 2.5rem;">Request Received</h2>
                            <p style="color: var(--muted-foreground); font-size: 1.2rem;">Thank you for your interest. A Top Grade specialist will reach out to your business within 24 hours.</p>
                            <button onclick="location.reload()" class="btn btn-secondary" style="margin-top: 2.5rem;">Send Another Inquiry</button>
                        </div>
                    `;
                }, 1500);
            });
        }

        // Demo Booking Form
        const demoForm = document.getElementById('demoBookingForm');
        if (demoForm) {
            demoForm.addEventListener('submit', (e) => {
                e.preventDefault();

                try {
                    const fullNameEl = document.getElementById('fullName');
                    const businessNameEl = document.getElementById('businessName');
                    const businessTypeEl = document.getElementById('businessType');
                    const phoneEl = document.getElementById('phone');
                    const emailEl = document.getElementById('email');
                    const preferredDateEl = document.getElementById('preferredDate');
                    const preferredTimeEl = document.getElementById('preferredTime');

                    if (!fullNameEl || !businessNameEl || !businessTypeEl || !phoneEl || !emailEl || !preferredDateEl || !preferredTimeEl) {
                        throw new Error('Demo form elements missing');
                    }

                    const formData = {
                        fullName: fullNameEl.value,
                        businessName: businessNameEl.value,
                        businessType: businessTypeEl.value,
                        phone: phoneEl.value,
                        email: emailEl.value,
                        preferredDate: preferredDateEl.value,
                        preferredTime: preferredTimeEl.value
                    };

                    const submitBtn = demoForm.querySelector('button[type="submit"]');
                    if (submitBtn) {
                        submitBtn.disabled = true;
                        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scheduling...';
                    }

                    setTimeout(() => {
                        demoForm.style.display = 'none';
                        const successMessage = document.getElementById('demoSuccessMessage');
                        if (successMessage) successMessage.style.display = 'block';

                        // Optional: WhatsApp Redirect logic preserved
                    }, 1500);
                } catch (err) {
                    console.error('Demo Form Error:', err);
                }
            });
        }
    };

    // --- 5. Mobile Menu & Dropdown Toggle ---
    const initMobileMenu = () => {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const navOverlay = document.getElementById('navOverlay');
        const dropdowns = document.querySelectorAll('.dropdown');

        if (!mobileMenuBtn || !navLinks) return;

        const openMobileMenu = () => {
            navLinks.classList.add('active');
            if (navOverlay) navOverlay.classList.add('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
            document.body.style.overflow = 'hidden';
        }

        const closeMobileMenu = () => {
            navLinks.classList.remove('active');
            if (navOverlay) navOverlay.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
            document.body.style.overflow = 'auto';
            dropdowns.forEach(d => d.classList.remove('active'));
        }

        mobileMenuBtn.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        if (navOverlay) {
            navOverlay.addEventListener('click', closeMobileMenu);
        }

        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector(':scope > a');
            if (link) {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                        dropdowns.forEach(other => {
                            if (other !== dropdown) other.classList.remove('active');
                        });
                    } else {
                        // Desktop toggle on click
                        e.preventDefault();
                        e.stopPropagation();
                        dropdown.classList.toggle('active');
                        dropdowns.forEach(other => {
                            if (other !== dropdown) other.classList.remove('active');
                        });
                    }
                });
            }
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth > 768) {
                if (!e.target.closest('.dropdown')) {
                    dropdowns.forEach(d => d.classList.remove('active'));
                }
            }
        });

        navLinks.querySelectorAll('a:not(.dropdown > a)').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    };

    // --- 6. Futuristic Particle System ---
    const initParticles = () => {
        const container = document.querySelector('.particles-container');
        if (!container) return;

        // Clear existing particles to prevent duplicates
        container.innerHTML = '';

        const particleCount = 20;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 4 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = Math.random() * 15 + 10;

            Object.assign(particle.style, {
                position: 'absolute',
                width: `${size}px`,
                height: `${size}px`,
                background: 'var(--accent)',
                borderRadius: '50%',
                left: `${posX}%`,
                top: `${posY}%`,
                opacity: Math.random() * 0.5,
                boxShadow: '0 0 10px var(--accent)',
                animation: `particle-float ${duration}s linear infinite`,
                animationDelay: `-${delay}s`
            });

            fragment.appendChild(particle);
        }
        container.appendChild(fragment);

        if (!document.getElementById('particle-style')) {
            const style = document.createElement('style');
            style.id = 'particle-style';
            style.textContent = `
                @keyframes particle-float {
                    0% { transform: translateY(0) translateX(0) scale(1); }
                    33% { transform: translateY(-100px) translateX(50px) scale(1.2); }
                    66% { transform: translateY(-200px) translateX(-50px) scale(0.8); }
                    100% { transform: translateY(-300px) translateX(0) scale(1); }
                }
            `;
            document.head.appendChild(style);
        }
    };

    // --- 7. Dynamic Hover Glow Effects ---
    const initHoverGlow = () => {
        const elements = document.querySelectorAll('.glass-panel, .stat-card, .btn-primary, .service-card, .software-card');
        elements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                el.style.setProperty('--mouse-x', `${x}px`);
                el.style.setProperty('--mouse-y', `${y}px`);

                let glow = el.querySelector('.hover-glow');
                if (!glow) {
                    glow = document.createElement('div');
                    glow.className = 'hover-glow';
                    Object.assign(glow.style, {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.03), transparent 80%)`,
                        pointerEvents: 'none',
                        zIndex: 0,
                        transition: 'opacity 0.4s ease',
                        opacity: 1,
                        borderRadius: 'inherit'
                    });
                    el.style.position = 'relative';
                    el.prepend(glow);
                }
            });
        });
    };

    // Initialize components
    initAnimations();
    initNavbar();
    initSmoothScroll();
    initForms();
    initMobileMenu();
    initParticles();
    initHoverGlow();
});
