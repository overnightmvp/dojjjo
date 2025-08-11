// Brevo Email Integration Configuration
// Replace these values with your actual Brevo settings

const BREVO_CONFIG = {
    // Your Brevo API key (get from https://app.brevo.com/settings/keys/api)
    API_KEY: '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',
    
    // API endpoints
    CONTACTS_URL: 'https://api.brevo.com/v3/contacts',
    TRANSACTIONAL_URL: 'https://api.brevo.com/v3/smtp/email',
    
    // List IDs for different funnels (LIVE PRODUCTION VALUES)
    LISTS: {
        WORKSHEET_SUBSCRIBERS: 8,    // 48-hour worksheet subscribers
        OMVP_HIGH_INTENT: 9,         // High-value OMVP submissions  
        GENERAL_LEADS: 10            // General newsletter/updates
    },
    
    // Email template IDs for transactional emails (LIVE PRODUCTION VALUES)
    TEMPLATES: {
        WORKSHEET_DELIVERY: 42,      // Email with worksheet download/access
        OMVP_SUBMISSION_CONFIRM: 43, // OMVP submission confirmation
        HANDOFF_CALL_SCHEDULED: 37   // Using existing template for now
    },
    
    // Default contact attributes
    DEFAULT_ATTRIBUTES: {
        emailBlacklisted: false,
        smsBlacklisted: true,
        updateEnabled: true
    }
};

// Helper function to send contact to Brevo
async function sendToBrevo(email, attributes = {}, listIds = []) {
    // Check if API key is configured
    if (!BREVO_CONFIG.API_KEY || BREVO_CONFIG.API_KEY === 'YOUR_BREVO_API_KEY') {
        console.warn('Brevo API key not configured. Skipping email integration.');
        // Store locally for development/testing
        localStorage.setItem('brevo_contact_' + Date.now(), JSON.stringify({
            email,
            attributes,
            listIds,
            timestamp: new Date().toISOString()
        }));
        return { success: true, status: 'local_storage', development: true };
    }

    const contactData = {
        email: email,
        attributes: {
            FIRSTNAME: email.split('@')[0],
            TIMESTAMP: new Date().toISOString(),
            ...attributes
        },
        listIds: listIds,
        ...BREVO_CONFIG.DEFAULT_ATTRIBUTES
    };
    
    try {
        const response = await fetch(BREVO_CONFIG.CONTACTS_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': BREVO_CONFIG.API_KEY
            },
            body: JSON.stringify(contactData)
        });
        
        if (response.ok || response.status === 400) { // 400 = contact already exists
            console.log('Contact sent to Brevo successfully');
            return { success: true, status: response.status };
        } else {
            throw new Error(`Brevo API error: ${response.status}`);
        }
    } catch (error) {
        console.error('Brevo contact error:', error);
        return { success: false, error: error.message };
    }
}

// Helper function to send transactional email
async function sendBrevoEmail(email, templateId, params = {}) {
    // Check if API key is configured
    if (!BREVO_CONFIG.API_KEY || BREVO_CONFIG.API_KEY === 'YOUR_BREVO_API_KEY') {
        console.warn('Brevo API key not configured. Skipping transactional email.');
        // Store locally for development/testing
        localStorage.setItem('brevo_email_' + Date.now(), JSON.stringify({
            email,
            templateId,
            params,
            timestamp: new Date().toISOString()
        }));
        return { success: true, status: 'local_storage', development: true };
    }

    const emailData = {
        to: [{ email: email }],
        templateId: templateId,
        params: params
    };
    
    try {
        const response = await fetch(BREVO_CONFIG.TRANSACTIONAL_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': BREVO_CONFIG.API_KEY
            },
            body: JSON.stringify(emailData)
        });
        
        if (response.ok) {
            console.log('Transactional email sent successfully');
            return { success: true };
        } else {
            throw new Error(`Email API error: ${response.status}`);
        }
    } catch (error) {
        console.error('Brevo email error:', error);
        return { success: false, error: error.message };
    }
}

// Make functions available globally
window.BREVO_CONFIG = BREVO_CONFIG;
window.sendToBrevo = sendToBrevo;
window.sendBrevoEmail = sendBrevoEmail;