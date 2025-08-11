// Enhanced Conversion Tracking & Analytics
// Streamlined tracking for DOJJJO brutal consultant funnel

// Analytics Configuration - Simplified
const ANALYTICS_CONFIG = {
    // Core conversion events only
    EVENTS: {
        EMAIL_CAPTURE: 'email_captured',
        WORKSHEET_COMPLETE: 'worksheet_completed', 
        OMVP_SUBMIT: 'omvp_submitted'
    },
    
    // Conversion values (legacy alias)
    VALUES: {
        EMAIL_CAPTURE: 50,
        WORKSHEET_COMPLETE: 200,
        OMVP_SUBMISSION: 5000
    },
    
    // Event values (new naming)
    EVENT_VALUES: {
        EMAIL_CAPTURE: 50,
        WORKSHEET_COMPLETE: 200,
        OMVP_SUBMISSION: 5000
    },
    
    // Funnel stages
    FUNNEL_STAGES: {
        EMAIL_CAPTURE: 'email_captured',
        WORKSHEET_START: 'worksheet_started',
        WORKSHEET_COMPLETE: 'worksheet_completed',
        OMVP_SUBMISSION: 'omvp_submitted'
    }
};

// Core tracking functions - Simplified
function trackEmailCapture(email, source = 'direct') {
    if (typeof gtag !== 'undefined') {
        gtag('event', ANALYTICS_CONFIG.EVENTS.EMAIL_CAPTURE, {
            event_category: 'conversion',
            value: ANALYTICS_CONFIG.VALUES.EMAIL_CAPTURE,
            currency: 'USD',
            email_domain: email.split('@')[1] || 'unknown',
            traffic_source: source
        });
    }
    console.log('Email capture tracked:', email, 'Value: $50');
}

function trackWorksheetComplete(customData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', ANALYTICS_CONFIG.EVENTS.WORKSHEET_COMPLETE, {
            event_category: 'conversion',
            value: ANALYTICS_CONFIG.VALUES.WORKSHEET_COMPLETE,
            currency: 'USD',
            ...customData
        });
    }
    console.log('Worksheet completion tracked - Value: $200');
}

function trackOMVPSubmission(submissionData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', ANALYTICS_CONFIG.EVENTS.OMVP_SUBMIT, {
            event_category: 'conversion',
            value: ANALYTICS_CONFIG.VALUES.OMVP_SUBMISSION,
            currency: 'USD',
            service_tier: submissionData.tier || '5k_complete',
            timeline: submissionData.timeline || 'unknown',
            ...submissionData
        });
    }
    console.log('OMVP submission tracked - Value: $5000', submissionData);
}

// Page tracking on load
function trackPageView() {
    const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_name: pageName
        });
    }
    
    console.log('Page view tracked:', pageName);
}

// Initialize tracking on page load
document.addEventListener('DOMContentLoaded', function() {
    trackPageView();
    console.log('Analytics initialized - streamlined tracking ready');
});

// Additional tracking functions for comprehensive analytics
function trackEngagement(action, source = 'unknown', customData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'engagement', {
            event_category: 'User Interaction',
            engagement_action: action,
            engagement_source: source,
            ...customData
        });
    }
    console.log('Engagement tracked:', action, 'from:', source);
}

function trackConversion(eventName, value = 0, customData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            event_category: 'conversion',
            value: value,
            currency: 'USD',
            ...customData
        });
    }
    console.log('Conversion tracked:', eventName, 'Value: $' + value);
}

function trackFunnelProgression(stage, customData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'funnel_progression', {
            event_category: 'Funnel',
            funnel_stage: stage,
            ...customData
        });
    }
    console.log('Funnel progression tracked:', stage);
}

// Make core functions available globally
window.trackEmailCapture = trackEmailCapture;
window.trackWorksheetComplete = trackWorksheetComplete;
window.trackOMVPSubmission = trackOMVPSubmission;
window.trackPageView = trackPageView;
window.trackEngagement = trackEngagement;
window.trackConversion = trackConversion;
window.trackFunnelProgression = trackFunnelProgression;
window.ANALYTICS_CONFIG = ANALYTICS_CONFIG;