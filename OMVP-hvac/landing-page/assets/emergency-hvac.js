/**
 * Emergency HVAC Landing Page JavaScript
 * Handles form submission, tracking, and user experience
 */

// Configuration
const CONFIG = {
    PHONE_NUMBER: '(602) 555-COOL',
    EMAIL_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID', // Replace with actual endpoint
    TEMPERATURE_API: 'https://api.openweathermap.org/data/2.5/weather?q=Phoenix,AZ&appid=YOUR_API_KEY&units=imperial'
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    updateTemperature();
    trackPageView();
    setupPhoneCallTracking();
});

/**
 * Form handling and submission
 */
function initializeForm() {
    const form = document.getElementById('leadForm');
    if (!form) return;

    form.addEventListener('submit', handleFormSubmission);
    
    // Add real-time validation
    const requiredFields = form.querySelectorAll('input[required], select[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', validateField);
        field.addEventListener('input', clearErrors);
    });

    // Auto-format phone number
    const phoneField = document.getElementById('phone');
    if (phoneField) {
        phoneField.addEventListener('input', formatPhoneNumber);
    }
}

/**
 * Handle form submission
 */
async function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = '⏳ Submitting...';
    submitBtn.disabled = true;
    
    try {
        // Collect form data
        const formData = collectFormData(form);
        
        // Validate all fields
        if (!validateFormData(formData)) {
            throw new Error('Please fill in all required fields correctly');
        }
        
        // Track conversion event
        trackFormSubmission(formData);
        
        // Submit to backend (replace with your actual endpoint)
        await submitLead(formData);
        
        // Show success message
        showSuccessMessage();
        
        // Optional: Redirect to thank you page
        // window.location.href = '/thank-you.html';
        
    } catch (error) {
        console.error('Form submission error:', error);
        showErrorMessage(error.message);
        
        // Restore button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

/**
 * Collect form data into object
 */
function collectFormData(form) {
    const data = {};
    const formData = new FormData(form);
    
    for (let [key, value] of formData.entries()) {
        data[key] = value.trim();
    }
    
    // Add timestamp and source
    data.timestamp = new Date().toISOString();
    data.source = 'emergency-hvac-landing';
    data.user_agent = navigator.userAgent;
    data.referrer = document.referrer;
    
    return data;
}

/**
 * Validate form data
 */
function validateFormData(data) {
    const required = ['name', 'phone', 'address', 'issue', 'urgency'];
    
    // Check required fields
    for (let field of required) {
        if (!data[field] || data[field].length < 2) {
            highlightError(field, 'This field is required');
            return false;
        }
    }
    
    // Validate phone number
    if (!isValidPhone(data.phone)) {
        highlightError('phone', 'Please enter a valid phone number');
        return false;
    }
    
    // Validate Phoenix address
    if (!data.address.toLowerCase().includes('phoenix') && 
        !data.address.toLowerCase().includes('scottsdale') &&
        !data.address.toLowerCase().includes('tempe') &&
        !data.address.toLowerCase().includes('chandler')) {
        highlightError('address', 'We only serve the Phoenix metro area');
        return false;
    }
    
    return true;
}

/**
 * Submit lead to backend
 */
async function submitLead(data) {
    // For now, simulate API call
    // Replace with your actual backend endpoint
    
    const response = await fetch(CONFIG.EMAIL_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Network error - please try calling instead');
    }
    
    return response.json();
}

/**
 * Update Phoenix temperature display
 */
async function updateTemperature() {
    try {
        // For demo, use static high temperature
        // In production, replace with actual weather API
        const temps = [107, 109, 111, 113, 115, 108, 110];
        const currentTemp = temps[Math.floor(Math.random() * temps.length)];
        
        const tempElement = document.getElementById('current-temp');
        if (tempElement) {
            tempElement.textContent = `${currentTemp}°F`;
            
            // Add visual emphasis for extreme heat
            if (currentTemp >= 110) {
                tempElement.parentElement.style.animation = 'pulse 1s infinite';
            }
        }
    } catch (error) {
        console.log('Temperature update failed:', error);
    }
}

/**
 * Smooth scroll to form
 */
function scrollToForm() {
    const formSection = document.getElementById('emergency-form');
    if (formSection) {
        formSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Track form view
        trackEvent('form_viewed', {
            event_category: 'engagement',
            event_label: 'scroll_to_form'
        });
    }
}

/**
 * Phone number formatting
 */
function formatPhoneNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{1,3})/, '($1) $2');
    }
    
    e.target.value = value;
}

/**
 * Phone validation
 */
function isValidPhone(phone) {
    const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone);
}

/**
 * Field validation with visual feedback
 */
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Clear previous errors
    clearFieldError(field);
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'This field is required');
    } else if (field.type === 'tel' && value && !isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number');
    }
}

/**
 * Visual error handling
 */
function showFieldError(field, message) {
    field.style.borderColor = 'var(--emergency-red)';
    field.style.backgroundColor = '#fef2f2';
    
    // Show error message
    let errorDiv = field.parentNode.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'var(--emergency-red)';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '4px';
        field.parentNode.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
}

function clearFieldError(field) {
    field.style.borderColor = '#e5e7eb';
    field.style.backgroundColor = 'white';
    
    const errorDiv = field.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function clearErrors(e) {
    clearFieldError(e.target);
}

function highlightError(fieldName, message) {
    const field = document.getElementById(fieldName);
    if (field) {
        showFieldError(field, message);
        field.focus();
    }
}

/**
 * Success/Error messages
 */
function showSuccessMessage() {
    const form = document.getElementById('leadForm');
    if (!form) return;
    
    const successHTML = `
        <div class="success-message" style="text-align: center; padding: 40px; background: var(--trust-green); color: white; border-radius: 8px;">
            <h3 style="margin-bottom: 15px;">🎉 Request Received!</h3>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">
                We'll call you within 10 minutes with pricing and availability.
            </p>
            <p style="margin-bottom: 20px;">
                <strong>Need immediate help?</strong><br>
                Call us right now: <a href="tel:+16025554266" style="color: white; font-weight: bold;">${CONFIG.PHONE_NUMBER}</a>
            </p>
            <p style="font-size: 0.9rem; opacity: 0.9;">
                Our licensed technicians are standing by for same-day service.
            </p>
        </div>
    `;
    
    form.innerHTML = successHTML;
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-banner';
    errorDiv.style.cssText = `
        background: var(--emergency-red);
        color: white;
        padding: 15px;
        text-align: center;
        margin-bottom: 20px;
        border-radius: 6px;
        font-weight: 600;
    `;
    errorDiv.innerHTML = `
        ⚠️ ${message}<br>
        <small>Having trouble? Call us directly: <a href="tel:+16025554266" style="color: white;">${CONFIG.PHONE_NUMBER}</a></small>
    `;
    
    const form = document.getElementById('leadForm');
    if (form) {
        form.insertBefore(errorDiv, form.firstChild);
        
        // Remove error after 5 seconds
        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
}

/**
 * Analytics tracking
 */
function trackPageView() {
    trackEvent('page_view', {
        event_category: 'emergency_hvac',
        event_label: 'landing_page'
    });
}

function trackFormSubmission(data) {
    trackEvent('form_submit', {
        event_category: 'lead_generation',
        event_label: 'emergency_hvac',
        value: 75, // Your lead value
        custom_parameters: {
            urgency: data.urgency,
            issue: data.issue,
            city: 'phoenix'
        }
    });
}

function setupPhoneCallTracking() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('phone_call', {
                event_category: 'conversion',
                event_label: 'emergency_call',
                value: 75
            });
        });
    });
}

function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Console log for debugging
    console.log('Event tracked:', eventName, parameters);
}

// Global functions for HTML onclick handlers
window.scrollToForm = scrollToForm;