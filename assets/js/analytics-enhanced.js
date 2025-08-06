// Enhanced Conversion Tracking & Analytics
// Builds on existing Google Analytics (GTM-57CDVXRW) with detailed funnel tracking

// Enhanced Analytics Configuration
const ANALYTICS_CONFIG = {
    // Funnel stages for tracking user progression
    FUNNEL_STAGES: {
        LANDING_VIEW: 'landing_page_view',
        EMAIL_CAPTURE: 'email_captured',
        WORKSHEET_START: 'worksheet_started',
        WORKSHEET_PROGRESS: 'worksheet_progress',
        WORKSHEET_COMPLETE: 'worksheet_completed',
        OMVP_VIEW: 'omvp_page_view',
        OMVP_SUBMIT: 'omvp_submitted',
        SUCCESS_VIEW: 'success_page_view'
    },
    
    // Event categories
    CATEGORIES: {
        ENGAGEMENT: 'engagement',
        CONVERSION: 'conversion',
        LEAD_GENERATION: 'lead_generation',
        HIGH_INTENT: 'high_intent',
        FUNNEL_PROGRESSION: 'funnel_progression'
    },
    
    // Value assignments for different actions
    EVENT_VALUES: {
        EMAIL_CAPTURE: 50,        // $50 value for email lead
        WORKSHEET_COMPLETE: 200,   // $200 value for completed worksheet
        OMVP_SUBMISSION: 5000,     // $5000 value for OMVP submission
        TIMER_URGENCY: 25         // $25 value for urgency engagement
    }
};

// Enhanced tracking functions
function trackFunnelProgression(stage, customData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', stage, {
            event_category: ANALYTICS_CONFIG.CATEGORIES.FUNNEL_PROGRESSION,
            event_label: stage,
            custom_parameter_1: customData.source || 'direct',
            custom_parameter_2: customData.userType || 'new',
            ...customData
        });
    }
    
    console.log(`Funnel progression: ${stage}`, customData);
}

function trackConversion(eventName, value, customData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            event_category: ANALYTICS_CONFIG.CATEGORIES.CONVERSION,
            event_label: eventName,
            value: value,
            currency: 'USD',
            ...customData
        });
    }
    
    console.log(`Conversion tracked: ${eventName} - $${value}`, customData);
}

function trackEngagement(action, element, duration = null) {
    const eventData = {
        event_category: ANALYTICS_CONFIG.CATEGORIES.ENGAGEMENT,
        event_label: element,
        action: action
    };
    
    if (duration) {
        eventData.engagement_time_msec = duration;
    }
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'engagement', eventData);
    }
    
    console.log('Engagement tracked:', eventData);
}

// Timer-specific tracking
function trackTimerEngagement(timeRemaining, urgencyLevel) {
    const eventData = {
        event_category: ANALYTICS_CONFIG.CATEGORIES.ENGAGEMENT,
        event_label: 'timer_interaction',
        time_remaining_hours: Math.floor(timeRemaining / (1000 * 60 * 60)),
        urgency_level: urgencyLevel, // low, medium, high, critical
        value: ANALYTICS_CONFIG.EVENT_VALUES.TIMER_URGENCY
    };
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'timer_urgency', eventData);
    }
    
    console.log('Timer engagement tracked:', eventData);
}

// Worksheet progress tracking
function trackWorksheetProgress(phase, fieldsCompleted, totalFields) {
    const progressPercent = Math.round((fieldsCompleted / totalFields) * 100);
    
    trackFunnelProgression(ANALYTICS_CONFIG.FUNNEL_STAGES.WORKSHEET_PROGRESS, {
        worksheet_phase: phase,
        completion_percent: progressPercent,
        fields_completed: fieldsCompleted,
        total_fields: totalFields
    });
    
    // Track milestone completions
    if (progressPercent >= 25 && !localStorage.getItem('milestone_25')) {
        trackEngagement('milestone_reached', 'worksheet_25_percent');
        localStorage.setItem('milestone_25', 'true');
    }
    if (progressPercent >= 50 && !localStorage.getItem('milestone_50')) {
        trackEngagement('milestone_reached', 'worksheet_50_percent');
        localStorage.setItem('milestone_50', 'true');
    }
    if (progressPercent >= 75 && !localStorage.getItem('milestone_75')) {
        trackEngagement('milestone_reached', 'worksheet_75_percent');
        localStorage.setItem('milestone_75', 'true');
    }
}

// Form interaction tracking
function trackFormInteraction(formType, action, fieldName = null) {
    const eventData = {
        event_category: ANALYTICS_CONFIG.CATEGORIES.ENGAGEMENT,
        event_label: `${formType}_${action}`,
        form_type: formType,
        action: action
    };
    
    if (fieldName) {
        eventData.field_name = fieldName;
    }
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_interaction', eventData);
    }
}

// Page timing and engagement
function trackPageEngagement(pageName) {
    const startTime = Date.now();
    
    // Track when user leaves page
    window.addEventListener('beforeunload', () => {
        const timeSpent = Date.now() - startTime;
        trackEngagement('time_on_page', pageName, timeSpent);
    });
    
    // Track scroll depth
    let maxScrollPercent = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round(
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScrollPercent) {
            maxScrollPercent = scrollPercent;
            
            // Track scroll milestones
            if (scrollPercent >= 25 && scrollPercent < 50 && !localStorage.getItem(`scroll_25_${pageName}`)) {
                trackEngagement('scroll_depth', `${pageName}_25_percent`);
                localStorage.setItem(`scroll_25_${pageName}`, 'true');
            } else if (scrollPercent >= 50 && scrollPercent < 75 && !localStorage.getItem(`scroll_50_${pageName}`)) {
                trackEngagement('scroll_depth', `${pageName}_50_percent`);
                localStorage.setItem(`scroll_50_${pageName}`, 'true');
            } else if (scrollPercent >= 75 && !localStorage.getItem(`scroll_75_${pageName}`)) {
                trackEngagement('scroll_depth', `${pageName}_75_percent`);
                localStorage.setItem(`scroll_75_${pageName}`, 'true');
            }
        }
    });
}

// Error tracking
function trackError(errorType, errorMessage, context = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            description: errorMessage,
            fatal: errorType === 'critical',
            custom_parameter_1: context.source || 'unknown',
            custom_parameter_2: context.action || 'unknown'
        });
    }
    
    console.error(`Error tracked: ${errorType} - ${errorMessage}`, context);
}

// User journey tracking
function trackUserJourney() {
    const journey = JSON.parse(localStorage.getItem('userJourney') || '[]');
    const currentPage = window.location.pathname;
    const timestamp = Date.now();
    
    // Add current page to journey
    journey.push({
        page: currentPage,
        timestamp: timestamp,
        referrer: document.referrer
    });
    
    // Keep only last 10 pages to avoid storage bloat
    if (journey.length > 10) {
        journey.shift();
    }
    
    localStorage.setItem('userJourney', JSON.stringify(journey));
    
    // Send journey data on key conversions
    if (currentPage.includes('success') || currentPage.includes('submit')) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'user_journey', {
                event_category: ANALYTICS_CONFIG.CATEGORIES.CONVERSION,
                journey_length: journey.length,
                pages_visited: journey.map(j => j.page).join(','),
                session_duration: timestamp - journey[0].timestamp
            });
        }
    }
}

// Conversion attribution tracking
function trackAttribution() {
    // Track UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const attribution = {
        source: urlParams.get('utm_source') || 'direct',
        medium: urlParams.get('utm_medium') || 'none',
        campaign: urlParams.get('utm_campaign') || 'none',
        term: urlParams.get('utm_term') || 'none',
        content: urlParams.get('utm_content') || 'none',
        referrer: document.referrer || 'direct'
    };
    
    // Store attribution for conversion tracking
    localStorage.setItem('attribution', JSON.stringify(attribution));
    
    if (typeof gtag !== 'undefined') {
        gtag('event', 'attribution_captured', {
            event_category: ANALYTICS_CONFIG.CATEGORIES.LEAD_GENERATION,
            source: attribution.source,
            medium: attribution.medium,
            campaign: attribution.campaign
        });
    }
}

// Initialize tracking on page load
document.addEventListener('DOMContentLoaded', function() {
    // Track page view with enhanced data
    const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    
    trackFunnelProgression(ANALYTICS_CONFIG.FUNNEL_STAGES.LANDING_VIEW, {
        page: pageName,
        timestamp: new Date().toISOString()
    });
    
    // Start page engagement tracking
    trackPageEngagement(pageName);
    
    // Track user journey
    trackUserJourney();
    
    // Track attribution
    trackAttribution();
    
    console.log('Enhanced analytics initialized for page:', pageName);
});

// Make functions available globally
window.trackFunnelProgression = trackFunnelProgression;
window.trackConversion = trackConversion;
window.trackEngagement = trackEngagement;
window.trackTimerEngagement = trackTimerEngagement;
window.trackWorksheetProgress = trackWorksheetProgress;
window.trackFormInteraction = trackFormInteraction;
window.trackError = trackError;
window.ANALYTICS_CONFIG = ANALYTICS_CONFIG;