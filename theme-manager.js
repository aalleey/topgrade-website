// theme-manager.js
const ThemeManager = {
    initialized: false,
    defaultThemes: [
        {
            id: 'premium-white',
            name: 'Premium White',
            base: 'light',
            colors: {
                primary: '#FFFFFF',
                secondary: '#F9FAFB',
                accent: '#1E3A8A',
                accent2: '#2563EB',
                accentHover: '#1C357A',
                bgCard: '#FFFFFF',
                textMain: '#111827',
                textMuted: '#6B7280',
                textMutedAlt: '#9CA3AF',
                btnSecondaryBg: '#F3F4F6',
                btnSecondaryText: '#111827',
                btnSecondaryBorder: '#D1D5DB',
                borderLight: '#E5E7EB',
                footerBg: '#F9FAFB',
                footerText: '#111827',
                glassBg: 'rgba(255, 255, 255, 0.8)'
            },
            styles: {
                radius: '20px',
                glow: '0 0 20px rgba(30, 58, 138, 0.05)'
            }
        },
        {
            id: 'cyber-nova',
            name: 'Cybernova (Futuristic)',
            base: 'dark',
            colors: {
                primary: '#090e17',
                secondary: '#111827',
                accent: '#06b6d4',
                accent2: '#8b5cf6',
                accentHover: '#22d3ee',
                bgCard: 'rgba(17, 24, 39, 0.7)',
                textMain: '#f8fafc',
                textMuted: '#94a3b8'
            },
            styles: {
                radius: '20px',
                glow: '0 0 20px rgba(6, 182, 212, 0.3)'
            }
        },
        {
            id: 'saas-pro',
            name: 'SaaS Pro (Dark)',
            base: 'dark',
            colors: {
                primary: '#0f172a',
                secondary: '#1e293b',
                accent: '#3b82f6',
                accentHover: '#60a5fa',
                bgCard: '#1e293b',
                textMain: '#ffffff',
                textMuted: '#cbd5e1'
            },
            styles: { radius: '16px' }
        },
        {
            id: 'dark-blue',
            name: 'Professional Navy',
            base: 'dark',
            colors: {
                primary: '#0A0F1C',
                secondary: '#111827',
                accent: '#2563EB',
                accentHover: '#3B82F6',
                bgCard: '#1E293B',
                textMain: '#F8FAFC',
                textMuted: '#cbd5e1'
            },
            styles: { radius: '16px' }
        },
        {
            id: 'dark-emerald',
            name: 'Dark Emerald',
            base: 'dark',
            colors: {
                primary: '#064E3B',
                secondary: '#065F46',
                accent: '#10B981',
                accentHover: '#34D399',
                bgCard: '#065F46',
                textMain: '#ECFDF5',
                textMuted: '#A7F3D0'
            },
            styles: { radius: '16px' }
        },
        {
            id: 'dark-purple',
            name: 'Purple Tech',
            base: 'dark',
            colors: {
                primary: '#0b0a10',
                secondary: '#13111c',
                accent: '#8B5CF6',
                accentHover: '#A78BFA',
                bgCard: '#13111c',
                textMain: '#F5F3FF',
                textMuted: '#a78bfa'
            },
            styles: { radius: '16px' }
        },
        {
            id: 'dark-cyan',
            name: 'Cyan Modern',
            base: 'dark',
            colors: {
                primary: '#083344',
                secondary: '#164E63',
                accent: '#06B6D4',
                accentHover: '#22D3EE',
                bgCard: '#164E63',
                textMain: '#ECFEFF',
                textMuted: '#A5F3FC'
            },
            styles: { radius: '16px' }
        },
        {
            id: 'light-blue',
            name: 'Corporate Blue',
            base: 'light',
            colors: {
                primary: '#F8FAFC',
                secondary: '#F1F5F9',
                accent: '#2563eb',
                accentHover: '#1d4ed8',
                bgCard: '#ffffff',
                textMain: '#0f172a',
                textMuted: '#475569'
            },
            styles: { radius: '12px' }
        },
        {
            id: 'light-green',
            name: 'Green Clean',
            base: 'light',
            colors: {
                primary: '#F0FDF4',
                secondary: '#DCFCE7',
                accent: '#22c55e',
                accentHover: '#16a34a',
                bgCard: '#ffffff',
                textMain: '#052e16',
                textMuted: '#166534'
            },
            styles: { radius: '12px' }
        },
        {
            id: 'midnight-black',
            name: 'Midnight Black',
            base: 'dark',
            colors: {
                primary: '#000000',
                secondary: '#111111',
                accent: '#FFFFFF',
                accentHover: '#CCCCCC',
                bgCard: '#111111',
                textMain: '#FFFFFF',
                textMuted: '#888888'
            },
            styles: { radius: '0px' }
        },
        {
            id: 'high-contrast',
            name: 'High Contrast',
            base: 'dark',
            colors: {
                primary: '#000000',
                secondary: '#000000',
                accent: '#FFFF00',
                accentHover: '#FFFFFF',
                bgCard: '#000000',
                textMain: '#FFFFFF',
                textMuted: '#FFFFFF'
            },
            styles: { radius: '0px' }
        },
        {
            id: 'sunset-glow',
            name: 'Sunset Glow',
            base: 'dark',
            colors: {
                primary: '#1E1B1B',
                secondary: '#2D1B1B',
                accent: '#F97316',
                accentHover: '#FB923C',
                bgCard: '#2D1B1B',
                textMain: '#FFF7ED',
                textMuted: '#FFedd5'
            },
            styles: { radius: '16px' }
        },
        {
            id: 'ocean-breeze',
            name: 'Ocean Breeze',
            base: 'light',
            colors: {
                primary: '#F0F9FF',
                secondary: '#E0F2FE',
                accent: '#0ea5e9',
                accentHover: '#0284c7',
                bgCard: '#ffffff',
                textMain: '#0C4A6E',
                textMuted: '#075985'
            },
            styles: { radius: '12px' }
        },
        {
            id: 'cyberpunk',
            name: 'Cyberpunk',
            base: 'dark',
            colors: {
                primary: '#050505',
                secondary: '#0F0F0F',
                accent: '#FF00FF',
                accentHover: '#00FFFF',
                bgCard: '#1A1A1A',
                textMain: '#FFFFFF',
                textMuted: '#FF00FF'
            },
            styles: { radius: '0px' }
        },
        {
            id: 'nordic-frost',
            name: 'Nordic Frost',
            base: 'dark',
            colors: {
                primary: '#0F172A',
                secondary: '#1E293B',
                accent: '#38BDF8',
                accentHover: '#7DD3FC',
                bgCard: '#1E293B',
                textMain: '#F1F5F9',
                textMuted: '#cbd5e1'
            },
            styles: { radius: '20px' }
        },
        {
            id: 'luxury-gold',
            name: 'Luxury Gold',
            base: 'dark',
            colors: {
                primary: '#1A1A1A',
                secondary: '#262626',
                accent: '#D4AF37',
                accentHover: '#FFD700',
                bgCard: '#262626',
                textMain: '#FFFFFF',
                textMuted: '#cbd5e1'
            },
            styles: { radius: '4px' }
        },
        {
            id: 'minimalist',
            name: 'Minimalist',
            base: 'light',
            colors: {
                primary: '#FFFFFF',
                secondary: '#F5F5F5',
                accent: '#171717',
                accentHover: '#404040',
                bgCard: '#ffffff',
                textMain: '#171717',
                textMuted: '#525252'
            },
            styles: { radius: '0px' }
        }
    ],

    init() {
        if (this.initialized) return;
        this.loadActiveTheme();
        this.initialized = true;
    },

    loadActiveTheme() {
        try {
            const activeThemeId = localStorage.getItem('activeThemeId') || 'premium-white';
            const customThemesRaw = localStorage.getItem('customThemes') || '[]';
            let customThemes = [];
            try {
                customThemes = JSON.parse(customThemesRaw);
            } catch (e) {
                console.error('Error parsing custom themes:', e);
                customThemes = [];
            }

            const allThemes = [...this.defaultThemes, ...customThemes];
            const theme = allThemes.find(t => t.id === activeThemeId) || this.defaultThemes[0];
            this.applyTheme(theme);
        } catch (error) {
            console.error('ThemeManager: loadActiveTheme failed', error);
            this.applyTheme(this.defaultThemes[0]);
        }
    },

    applyTheme(theme) {
        if (!theme || !theme.colors || !theme.styles) {
            console.error('ThemeManager: Invalid theme provided', theme);
            return;
        }

        const root = document.documentElement;

        // Defensive property application
        const setProp = (name, value) => {
            if (value !== undefined && value !== null) {
                root.style.setProperty(name, value);
            }
        };

        // Colors
        setProp('--primary', theme.colors.primary);
        setProp('--bg-body', theme.colors.primary);
        setProp('--primary-light', theme.colors.secondary);
        setProp('--bg-light', theme.colors.secondary);
        setProp('--accent', theme.colors.accent);
        setProp('--accent-hover', theme.colors.accentHover);
        setProp('--bg-card', theme.colors.bgCard);
        setProp('--text-main', theme.colors.textMain);
        setProp('--text-muted', theme.colors.textMuted);
        setProp('--text-muted-alt', theme.colors.textMutedAlt || theme.colors.textMuted);
        setProp('--border-light', theme.colors.borderLight || (theme.base === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.08)'));
        
        // Button Specifics
        setProp('--btn-secondary-bg', theme.colors.btnSecondaryBg || (theme.base === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#F3F4F6'));
        setProp('--btn-secondary-text', theme.colors.btnSecondaryText || theme.colors.textMain);
        setProp('--btn-secondary-border', theme.colors.btnSecondaryBorder || 'transparent');
        
        // Glass & Footer
        setProp('--glass-bg', theme.colors.glassBg || (theme.base === 'dark' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.7)'));
        setProp('--footer-bg', theme.colors.footerBg || (theme.base === 'dark' ? '#020617' : '#F8FAFC'));
        setProp('--footer-text', theme.colors.footerText || (theme.base === 'dark' ? '#cbd5e1' : '#475569'));

        // Extended Futuristic Variables
        setProp('--accent-secondary', theme.colors.accent2 || theme.colors.accent);
        setProp('--glow-color', theme.styles.glow || 'none');

        // Styles
        setProp('--radius-lg', theme.styles.radius);

        if (theme.base === 'dark') {
            setProp('--white', '#ffffff');
            setProp('--text-inverse', '#0A0F1C');

            // Navbar adaptive variables (dark)
            setProp('--nav-bg', 'rgba(10, 15, 28, 0.82)');
            setProp('--nav-bg-solid', (theme.colors.primary || '#0f172a') + 'f5');
            setProp('--nav-text', 'rgba(255, 255, 255, 0.88)');
            setProp('--nav-text-hover', '#ffffff');
            setProp('--nav-accent', theme.colors.accent);
            setProp('--nav-border', 'rgba(255, 255, 255, 0.05)');
            setProp('--nav-shadow', 'rgba(0, 0, 0, 0.35)');
            setProp('--nav-dropdown-bg', 'rgba(15, 23, 42, 0.95)');
            setProp('--text-ghost', 'rgba(255, 255, 255, 0.03)');
            setProp('--glass-bg-adaptive', 'rgba(255, 255, 255, 0.03)');
        } else {
            setProp('--white', '#ffffff');
            setProp('--text-inverse', '#ffffff');
            setProp('--text-ghost', 'rgba(0, 0, 0, 0.05)');
            setProp('--glass-bg-adaptive', 'rgba(0, 0, 0, 0.02)');

            // Navbar adaptive variables (light)
            setProp('--nav-bg', 'rgba(255, 255, 255, 0.85)');
            setProp('--nav-bg-solid', 'rgba(255, 255, 255, 0.98)');
            setProp('--nav-text', theme.colors.textMain);
            setProp('--nav-text-hover', theme.colors.accent);
            setProp('--nav-accent', theme.colors.accent);
            setProp('--nav-border', 'rgba(0, 0, 0, 0.08)');
            setProp('--nav-shadow', 'rgba(0, 0, 0, 0.1)');
            setProp('--nav-dropdown-bg', 'rgba(255, 255, 255, 0.98)');
            
            // Adjust shadows for light mode
            setProp('--shadow-premium', '0 20px 40px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)');
            setProp('--shadow-premium-hover', '0 30px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.08)');
        }

        if (theme.id === 'high-contrast') {
            setProp('--border-light', '#FFFF00');
            setProp('--nav-text', '#FFFFFF');
            setProp('--nav-text-hover', '#FFFF00');
            setProp('--nav-accent', '#FFFF00');
        }

        console.log(`Theme Applied: ${theme.name}`);
    }
};

// Safe initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
} else {
    ThemeManager.init();
}
