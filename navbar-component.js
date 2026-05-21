/**
 * Premium Reusable Navbar Component
 * TopGradeSoftware - 2026
 */
const NavbarComponent = {
    render() {
        const currentPath = window.location.pathname;
        const pageName = currentPath.split('/').pop() || 'index.html';
        
        // Helper to check active state
        const isActive = (path) => pageName === path ? 'active' : '';
        
        // Determine Solutions link
        const solutionsLink = pageName === 'index.html' || pageName === '' ? '#services' : 'index.html#services';

        const navbarHTML = `
            <nav class="navbar" id="navbar">
                <div class="container navbar-content">
                    <div class="logo">
                        <a href="index.html" class="logo-text">TopGrade<span>Software</span></a>
                    </div>
                    <ul class="nav-links" id="navLinks">
                        <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
                        <li class="dropdown solutions-dropdown">
                            <a href="${solutionsLink}">Solutions <i class="fas fa-chevron-down"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="https://topgradepos.com"><i class="fas fa-cash-register"></i> POS Software</a></li>
                                <li><a href="https://whattnexus.com"><i class="fab fa-whatsapp"></i> WhatsApp Marketing</a></li>
                                <li><a href="https://topgradehms.com"><i class="fas fa-hospital"></i> Hospital & Clinic</a></li>
                                <li><a href="restaurant-management.html"><i class="fas fa-utensils"></i> Restaurant System</a></li>
                                <li><a href="real-estate-management.html"><i class="fas fa-building"></i> Real Estate</a></li>
                                <li><a href="hotel-management.html"><i class="fas fa-bed"></i> Hotel Management</a></li>
                                <li><a href="https://topgradesoftware.com"><i class="fas fa-graduation-cap"></i> College System</a></li>
                                <li><a href="print-marketing.html"><i class="fas fa-print"></i> Print Marketing</a></li>
                                <li><a href="boutique-management.html"><i class="fas fa-tshirt"></i> Boutique Management</a></li>
                                <li><a href="leather-management.html"><i class="fas fa-suitcase"></i> Leather Sale</a></li>
                                <li><a href="online-shopping.html"><i class="fas fa-shopping-cart"></i> Online Shopping</a></li>
                                <li><a href="pharmacy-management.html"><i class="fas fa-pills"></i> Pharmacy Bill</a></li>
                                <li><a href="enterprise-club.html"><i class="fas fa-building-columns"></i> Enterprise Club</a></li>
                                <li><a href="https://topgradeaccount.com/"><i class="fas fa-calculator"></i> Accounting</a></li>
                                <li><a href="showroom.html"><i class="fas fa-car"></i> Showroom</a></li>
                                <li><a href="sgst.html"><i class="fas fa-file-invoice"></i> SGST</a></li>
                                <li class="mega-footer-link"><a href="${solutionsLink}">View All Solutions <i class="fas fa-arrow-right"></i></a></li>
                            </ul>
                        </li>

                        <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
                        <li><a href="sale.html" class="${isActive('sale.html')}">Sale</a></li>
                        <li class="dropdown">
                            <a href="#">Themes <i class="fas fa-palette"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='premium-white')); localStorage.setItem('activeThemeId','premium-white'); return false;"><span class="theme-dot" style="background: #ffffff; border: 1px solid #e2e8f0;"></span> Premium White</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='cyber-nova')); localStorage.setItem('activeThemeId','cyber-nova'); return false;"><span class="theme-dot" style="background: linear-gradient(135deg, #00f5ff, #7c3aed);"></span> Cybernova</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='dark-blue')); localStorage.setItem('activeThemeId','dark-blue'); return false;"><span class="theme-dot" style="background: #1a237e;"></span> Professional Navy</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='dark-emerald')); localStorage.setItem('activeThemeId','dark-emerald'); return false;"><span class="theme-dot" style="background: #004d40;"></span> Dark Emerald</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='dark-purple')); localStorage.setItem('activeThemeId','dark-purple'); return false;"><span class="theme-dot" style="background: #4a148c;"></span> Purple Tech</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='dark-cyan')); localStorage.setItem('activeThemeId','dark-cyan'); return false;"><span class="theme-dot" style="background: #006064;"></span> Cyan Modern</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='light-blue')); localStorage.setItem('activeThemeId','light-blue'); return false;"><span class="theme-dot" style="background: #1565c0;"></span> Corporate Blue</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='light-green')); localStorage.setItem('activeThemeId','light-green'); return false;"><span class="theme-dot" style="background: #2e7d32;"></span> Green Clean</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='midnight-black')); localStorage.setItem('activeThemeId','midnight-black'); return false;"><span class="theme-dot" style="background: #121212;"></span> Midnight Minimal</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='high-contrast')); localStorage.setItem('activeThemeId','high-contrast'); return false;"><span class="theme-dot" style="background: linear-gradient(135deg, #fff 50%, #000 50%);"></span> High Contrast</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='sunset-glow')); localStorage.setItem('activeThemeId','sunset-glow'); return false;"><span class="theme-dot" style="background: linear-gradient(135deg, #ff6f00, #d50000);"></span> Sunset Glow</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='ocean-breeze')); localStorage.setItem('activeThemeId','ocean-breeze'); return false;"><span class="theme-dot" style="background: linear-gradient(135deg, #0277bd, #00acc1);"></span> Ocean Breeze</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='cyberpunk')); localStorage.setItem('activeThemeId','cyberpunk'); return false;"><span class="theme-dot" style="background: linear-gradient(135deg, #e040fb, #00e5ff);"></span> Cyberpunk</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='nordic-frost')); localStorage.setItem('activeThemeId','nordic-frost'); return false;"><span class="theme-dot" style="background: #b0bec5;"></span> Nordic Frost</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='luxury-gold')); localStorage.setItem('activeThemeId','luxury-gold'); return false;"><span class="theme-dot" style="background: linear-gradient(135deg, #ffd600, #ff6f00);"></span> Luxury Gold</a></li>
                                <li><a href="#" onclick="ThemeManager.applyTheme(ThemeManager.defaultThemes.find(t=>t.id==='minimalist')); localStorage.setItem('activeThemeId','minimalist'); return false;"><span class="theme-dot" style="background: #e0e0e0;"></span> Minimalist</a></li>
                                <li><hr></li>
                                <li><a href="dashboard.html"><i class="fas fa-cog"></i> Theme Manager</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html" class="${isActive('contact.html')}">Contact</a></li>
                        <!-- Mobile Only CTA -->
                        <li class="mobile-only"><a href="login.html" class="btn btn-primary" style="margin-top: 1rem; width: 100%; text-align: center;">Login</a></li>
                    </ul>
                    <a href="login.html" class="btn btn-primary nav-cta">Login</a>
                    <div class="mobile-menu-btn" id="mobileMenuBtn">
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        `;

        const navbarPlaceholder = document.getElementById('site-navbar');
        if (navbarPlaceholder) {
            navbarPlaceholder.innerHTML = navbarHTML;
        } else {
            // Fallback for pages that might not have the placeholder yet
            console.warn('site-navbar placeholder not found. Checking if <nav> already exists.');
        }
    }
};

// Initialize navbar before main.js runs its logic on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    NavbarComponent.render();
});
