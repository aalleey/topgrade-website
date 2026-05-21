/**
 * Premium Reusable Footer Component
 * TopGradeSoftware - 2026
 */
const FooterComponent = {
    render() {
        const footerHTML = `
        <footer class="footer">
            <div class="container container-footer">
                <div class="footer-grid">
                    <!-- Column 1: Brand & Social -->
                    <div class="footer-column footer-brand">
                        <div class="footer-logo">
                            <a href="index.html" class="logo-text">TopGrade<span>Software</span></a>
                        </div>
                        <p class="footer-description">
                            Empowering modern businesses with intelligent, scalable management systems. Premium software solutions built for performance and growth.
                        </p>
                        <div class="social-links">
                            <a href="#" class="social-link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" class="social-link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <!-- Column 2: Solutions -->
                    <div class="footer-column">
                        <h4 class="footer-title">Our Solutions</h4>
                        <ul class="footer-links">
                            <li><a href="https://topgradepos.com">POS Software</a></li>
                            <li><a href="https://topgradehms.com">Hospital & Clinic</a></li>
                            <li><a href="pharmacy-management.html">Pharmacy Billing</a></li>
                            <li><a href="restaurant-management.html">Restaurant System</a></li>
                            <li><a href="real-estate-management.html">Real Estate CRM</a></li>
                            <li><a href="online-shopping.html">E-Commerce System</a></li>
                        </ul>
                    </div>

                    <!-- Column 3: Support -->
                    <div class="footer-column">
                        <h4 class="footer-title">Support & Resources</h4>
                        <ul class="footer-links">
                            <li><a href="contact.html?demo=true">Request a Demo</a></li>
                            <li><a href="contact.html?pricing=true">Pricing Plans</a></li>
                            <li><a href="contact.html?support=true">Technical Support</a></li>
                            <li><a href="contact.html?custom=true">Custom Development</a></li>
                            <li><a href="privacy.html">Privacy Policy</a></li>
                            <li><a href="terms.html">Terms of Service</a></li>
                        </ul>
                    </div>

                    <!-- Column 4: Contact -->
                    <div class="footer-column">
                        <h4 class="footer-title">Contact & Location</h4>
                        <div class="footer-contact-info">
                            <div class="footer-contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <a href="https://maps.google.com/?q=Johar+Town+Lahore+Pakistan" target="_blank">
                                    Johar Town, Lahore, Pakistan
                                </a>
                            </div>
                            <div class="footer-contact-item">
                                <i class="fas fa-phone-alt"></i>
                                <a href="tel:03006616622">0300-6616622</a>
                            </div>
                            <div class="footer-contact-item">
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:Info@TopGradeSoftware.com">Info@TopGradeSoftware.com</a>
                            </div>
                            <div class="footer-contact-item whatsapp-cta">
                                <i class="fab fa-whatsapp"></i>
                                <a href="https://wa.me/923006616622" target="_blank">Chat on WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer Bottom -->
                <div class="footer-bottom">
                    <div class="footer-copyright">
                        <p>&copy; ${new Date().getFullYear()} TopGradeSoftware. All rights reserved.</p>
                    </div>
                    <div class="footer-bottom-links">
                        <a href="privacy.html">Privacy Policy</a>
                        <span class="divider"></span>
                        <a href="terms.html">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
        `;

        const footerPlaceholder = document.getElementById('site-footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
        }
    }
};

// Initialize footer when the script loads
document.addEventListener('DOMContentLoaded', () => {
    FooterComponent.render();
});
