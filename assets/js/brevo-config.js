// Brevo Email Integration Configuration
// Replace these values with your actual Brevo settings

const BREVO_CONFIG = {
    // Your Brevo API key (get from https://app.brevo.com/settings/keys/api)
    API_KEY: 'YOUR_BREVO_API_KEY',
    
    // API endpoints
    CONTACTS_URL: 'https://api.brevo.com/v3/contacts',
    TRANSACTIONAL_URL: 'https://api.brevo.com/v3/smtp/email',
    
    // List IDs for different funnels
    LISTS: {
        WORKSHEET_SUBSCRIBERS: 1,    // 48-hour worksheet subscribers
        OMVP_HIGH_INTENT: 2,        // High-value OMVP submissions
        GENERAL_LEADS: 3             // General newsletter/updates
    },
    
    // Email template IDs for transactional emails
    TEMPLATES: {
        WORKSHEET_DELIVERY: 1,       // Email with worksheet download/access
        OMVP_SUBMISSION_CONFIRM: 2,  // OMVP submission confirmation
        HANDOFF_CALL_SCHEDULED: 3    // Handoff call scheduling confirmation
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