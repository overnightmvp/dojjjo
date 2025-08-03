/**
 * DOJJJO Core JavaScript Library
 * Brutal functionality for multi-brand ecosystem, theme management, and analytics
 */

// Global configuration (will be imported from brand-config.js)
let CONFIG = {};

// Application state
let currentLanguage = localStorage.getItem('preferred-language') || 'global';
let currentTheme = localStorage.getItem('preferred-theme') || 'light';

/**
 * ====================================
 * INITIALIZATION
 * ====================================
 */

/**
 * Initialize the DOJJJO ecosystem with brutal configuration
 * @param {Object} config - Multi-brand configuration object
 */
function initializeDOJJJO(config) {
    CONFIG = config;
    
    // Set initial theme and language
    document.documentElement.setAttribute('data-language', currentLanguage);
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Initialize components
    switchLanguage(currentLanguage);
    
    // Add event listeners
    addEventListeners();
    
    console.log('🎯 The Pitch Office initialized successfully');
}

/**
 * ====================================
 * LANGUAGE MANAGEMENT
 * ====================================
 */

/**
 * Switch between French and English
 * @param {string} lang - Language code ('fr' or 'en')
 */
function switchLanguage(lang) {
    try {
        currentLanguage = lang;
        document.documentElement.setAttribute('data-language', lang);
        
        // Update all elements with data-lang attributes
        document.querySelectorAll('[data-lang]').forEach(element => {
            if (element.getAttribute('data-lang') === lang) {
                element.style.display = getElementDisplayType(element);
            } else {
                element.style.display = 'none';
            }
        });
        
        // Update language buttons
        updateLanguageButtons(lang);
        
        // Update meta tags if they exist
        updateMetaTags(lang);
        
        // Store preference
        localStorage.setItem('preferred-language', lang);
        
        // Track language change
        trackEvent('language_switch', {
            'event_category': 'User Interface',
            'event_label': `Language switched to ${lang}`
        });
        
    } catch (error) {
        console.error('Error switching language:', error);
    }
}

/**
 * Get the appropriate display type for an element
 * @param {Element} element - DOM element
 * @returns {string} - Display type
 */
function getElementDisplayType(element) {
    const tagName = element.tagName.toLowerCase();
    const isInline = ['span', 'a', 'strong', 'em', 'code'].includes(tagName);
    return isInline ? 'inline' : '';
}

/**
 * Update language button states
 * @param {string} lang - Current language
 */
function updateLanguageButtons(lang) {
    const frButton = document.getElementById('langFr');
    const enButton = document.getElementById('langEn');
    
    if (frButton && enButton) {
        // Reset both buttons
        frButton.classList.remove('active');
        enButton.classList.remove('active');
        
        // Set active button
        if (lang === 'fr') {
            frButton.classList.add('active');
        } else {
            enButton.classList.add('active');
        }
    }
}

/**
 * Update meta tags based on language
 * @param {string} lang - Current language
 */
function updateMetaTags(lang) {
    const titleElement = document.querySelector('title');
    const descriptionElement = document.querySelector('meta[name="description"]');
    
    if (titleElement && titleElement.hasAttribute(`data-${lang}`)) {
        titleElement.textContent = titleElement.getAttribute(`data-${lang}`);
    }
    
    if (descriptionElement && descriptionElement.hasAttribute(`data-${lang}`)) {
        descriptionElement.setAttribute('content', descriptionElement.getAttribute(`data-${lang}`));
    }
}

/**
 * ====================================
 * THEME MANAGEMENT
 * ====================================
 */

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    try {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('preferred-theme', currentTheme);
        
        // Track theme change
        trackEvent('theme_switch', {
            'event_category': 'User Interface',
            'event_label': `Theme switched to ${currentTheme}`
        });
        
    } catch (error) {
        console.error('Error switching theme:', error);
    }
}

/**
 * ====================================
 * FORM HANDLING
 * ====================================
 */

/**
 * Reveal email form when button is clicked
 */
function revealEmailForm() {
    try {
        const buttonId = currentLanguage === 'en' ? 'bookAuditBtnEn' : 'bookAuditBtn';
        const formId = currentLanguage === 'en' ? 'emailRevealFormEn' : 'emailRevealForm';
        
        const button = document.getElementById(buttonId);
        const form = document.getElementById(formId);
        
        if (button && form) {
            button.style.display = 'none';
            form.style.display = 'block';
            
            // Focus on email input for accessibility
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput) {
                emailInput.focus();
            }
        }
        
        // Track form reveal
        trackEvent('email_form_reveal', {
            'event_category': 'Lead Generation',
            'event_label': 'Book Audit Button'
        });
        
    } catch (error) {
        console.error('Error revealing email form:', error);
    }
}

/**
 * Handle email form submission
 * @param {Event} event - Form submission event
 */
async function handleEmailReveal(event) {
    event.preventDefault();
    
    try {
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const source = formData.get('source');
        const submitButton = event.target.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Validate email
        if (!isValidEmail(email)) {
            showError(currentLanguage === 'en' ? 
                'Please enter a valid email address.' :
                'Veuillez entrer une adresse email valide.');
            return;
        }
        
        // Show loading state
        submitButton.disabled = true;
        const loadingText = currentLanguage === 'en' ? 'Booking in progress...' : 'Réservation en cours...';
        submitButton.textContent = loadingText;
        submitButton.style.opacity = '0.7';
        
        // Track email signup
        trackEvent('framework_request', {
            'event_category': 'DOJJJO',
            'event_label': 'Framework Request',
            'email_source': source
        });
        
        // Show success state briefly
        const successText = currentLanguage === 'en' ? '✅ Framework Sent!' : '✅ Framework Envoyé!';
        submitButton.textContent = successText;
        submitButton.style.backgroundColor = 'var(--success-green)';
        
        setTimeout(() => {
            // Redirect to success page with email parameter
            window.location.href = `./success.html?email=${encodeURIComponent(email)}&source=${encodeURIComponent(source || 'main_landing')}&enrolled=true`;
        }, 1000);
        
    } catch (error) {
        console.error('Error processing audit booking:', error);
        handleFormError(error, event.target);
    }
}

/**
 * Handle form submission errors
 * @param {Error} error - The error that occurred
 * @param {HTMLFormElement} form - The form element
 */
function handleFormError(error, form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.getAttribute('data-original-text') || 'Submit';
    
    // Track error for debugging
    trackEvent('audit_booking_error', {
        'event_category': 'Error',
        'event_label': 'Audit Booking Failure',
        'error_message': error.message
    });
    
    // Restore button state
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
    submitButton.style.opacity = '1';
    submitButton.style.backgroundColor = '';
    
    // Show user-friendly error
    const errorText = currentLanguage === 'en' ? 
        'Oops! There was a problem with the booking. Please try again or refresh the page.' :
        'Oops ! Il y a eu un problème lors de la réservation. Veuillez réessayer ou actualiser la page.';
    showError(errorText);
}

/**
 * ====================================
 * UTILITY FUNCTIONS
 * ====================================
 */

/**
 * Validate email address
 * @param {string} email - Email address to validate
 * @returns {boolean} - Whether email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show error message to user
 * @param {string} message - Error message
 */
function showError(message) {
    // Simple alert for now - can be enhanced with custom modal
    alert(message);
}

/**
 * ====================================
 * ANALYTICS & TRACKING
 * ====================================
 */

/**
 * Track events with Google Analytics
 * @param {string} eventName - Name of the event
 * @param {Object} parameters - Event parameters
 */
function trackEvent(eventName, parameters = {}) {
    try {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        } else {
            console.log('Analytics not available, event:', eventName, parameters);
        }
    } catch (error) {
        console.error('Error tracking event:', error);
    }
}

/**
 * Track scroll depth for engagement analytics
 */
function initializeScrollTracking() {
    let maxScroll = 0;
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
                maxScroll = scrollPercent;
                trackEvent('scroll', {
                    'event_category': 'Engagement',
                    'event_label': `${maxScroll}% Scroll Depth`
                });
            }
        }, 100);
    });
}

/**
 * Track time spent on page
 */
function initializeTimeTracking() {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackEvent('timing_complete', {
            name: 'page_time',
            value: timeSpent
        });
    });
}

/**
 * ====================================
 * EVENT LISTENERS
 * ====================================
 */

/**
 * Add all event listeners
 */
function addEventListeners() {
    // Smooth scrolling for anchor links
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
    
    // Track CTA clicks
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('cta_click', {
                'event_category': 'Conversion',
                'event_label': this.textContent.trim()
            });
        });
    });
    
    // Initialize tracking
    initializeScrollTracking();
    initializeTimeTracking();
}

/**
 * ====================================
 * DOM READY INITIALIZATION
 * ====================================
 */

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for config to be loaded
    if (typeof BRAND_CONFIG !== 'undefined') {
        initializePitchOffice(BRAND_CONFIG);
    } else {
        console.warn('BRAND_CONFIG not found, using defaults');
        initializePitchOffice({});
    }
});

/**
 * ====================================
 * GLOBAL EXPORTS
 * ====================================
 */

// Make functions available globally for HTML onclick handlers
window.switchLanguage = switchLanguage;
window.toggleTheme = toggleTheme;
window.revealEmailForm = revealEmailForm;
window.handleEmailReveal = handleEmailReveal;