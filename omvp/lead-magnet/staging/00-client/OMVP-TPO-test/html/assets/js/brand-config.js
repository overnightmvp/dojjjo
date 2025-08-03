/**
 * The Pitch Office Brand Configuration
 * Centralized configuration for easy project customization
 */

const BRAND_CONFIG = {
    // ====================================
    // BRAND IDENTITY
    // ====================================
    brand: {
        name: "The Pitch Office",
        tagline: {
            fr: "On ne répond pas aux appels d'offres. On les gagne. Systématiquement.",
            en: "We don't respond to tenders. We win them. Systematically."
        },
        expert: {
            name: "Audrey",
            experience: "15+",
            successRate: "85%"
        }
    },
    
    // ====================================
    // VISUAL IDENTITY
    // ====================================
    colors: {
        primary: "#F200FF",
        black: "#000000",
        white: "#FFFFFF",
        gold: "#B8860B",
        blue: "#1E3A8A",
        green: "#059669",
        gray: "#6B7280"
    },
    
    // ====================================
    // TYPOGRAPHY
    // ====================================
    typography: {
        primaryFont: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        weights: {
            normal: 500,
            bold: 700,
            black: 900
        }
    },
    
    // ====================================
    // BUSINESS MODEL
    // ====================================
    pricing: {
        audit: {
            price: "GRATUIT",
            priceEn: "FREE",
            duration: "30 minutes"
        },
        consultation: {
            tier1: "€2,500",
            tier2: "€7,500", 
            tier3: "€15,000"
        }
    },
    
    // ====================================
    // CONTACT INFORMATION
    // ====================================
    contact: {
        email: "audrey@thepitchoffice.fr",
        website: "https://thepitchoffice.fr",
        linkedin: "https://linkedin.com/in/audrey-pitchoffice"
    },
    
    // ====================================
    // ANALYTICS CONFIGURATION
    // ====================================
    analytics: {
        googleTagManager: "GTM-57CDVXRW",
        googleAnalytics: "G-L99CMW68TS",
        hotjarId: "6476354",
        hotjarVersion: "6"
    },
    
    // ====================================
    // SOCIAL PROOF & METRICS
    // ====================================
    metrics: {
        clientsHelped: "200+",
        successRate: "85%+",
        experience: "15+",
        contractsWon: "millions d'euros",
        contractsWonEn: "millions of euros"
    },
    
    // ====================================
    // CONTENT CONFIGURATION
    // ====================================
    content: {
        hero: {
            fr: {
                title: "🎯 On ne répond pas aux appels d'offres.<br>On les gagne. Systématiquement.",
                subtitle: "Méthodologie éprouvée • 15+ ans d'expertise d'Audrey • 85% de taux de réussite • Excellence garantie",
                cta: "Audit Stratégique Gratuit - 30 min"
            },
            en: {
                title: "🎯 We don't respond to tenders.<br>We win them. Systematically.",
                subtitle: "Proven methodology • 15+ years of Audrey's expertise • 85% success rate • Excellence guaranteed",
                cta: "Free Strategic Audit - 30 min"
            }
        },
        
        socialProof: {
            fr: {
                title: "EXPERTISE AVANCÉE :",
                description: "Cette méthodologie a généré des millions d'euros en contrats gagnés pour 200+ entreprises.<br>15 ans d'expérience = Résultats garantis. Méthodologie éprouvée = Succès systématique."
            },
            en: {
                title: "ADVANCED EXPERTISE:",
                description: "This methodology has generated millions of euros in won contracts for 200+ companies.<br>15 years of experience = Guaranteed results. Proven methodology = Systematic success."
            }
        },
        
        problemSection: {
            fr: {
                title: "🚨 Vos Appels d'Offres Échouent-ils Systématiquement ?",
                painPoints: [
                    {
                        icon: "🤯",
                        title: "Préparation Chaotique",
                        description: "VÉRITÉ BRUTALE : Vous passez des semaines à \"préparer\" sans méthodologie claire car vous craignez que votre approche soit insuffisante face à vos concurrents."
                    },
                    {
                        icon: "💸",
                        title: "Réponses Perdantes",
                        description: "VÉRITÉ BRUTALE : 70% des entreprises perdent 6+ mois sur des réponses génériques. Vos concurrents appliquent déjà des méthodologies prouvées pendant que vous \"perfectionnez\" votre présentation."
                    },
                    {
                        icon: "❓",
                        title: "Pas de Méthodologie Éprouvée",
                        description: "VÉRITÉ BRUTALE : Vous prenez des décisions basées sur des \"intuitions\" au lieu d'une méthodologie éprouvée avec 15+ ans de résultats. C'est du hasard, pas de l'expertise."
                    }
                ]
            },
            en: {
                title: "🚨 Are Your Tenders Failing Systematically?",
                painPoints: [
                    {
                        icon: "🤯",
                        title: "Chaotic Preparation",
                        description: "BRUTAL TRUTH: You spend weeks \"preparing\" without clear methodology because you fear your approach is insufficient against competitors."
                    },
                    {
                        icon: "💸",
                        title: "Losing Responses",
                        description: "BRUTAL TRUTH: 70% of companies waste 6+ months on generic responses. Your competitors already apply proven methodologies while you \"perfect\" your presentation."
                    },
                    {
                        icon: "❓",
                        title: "No Proven Methodology",
                        description: "BRUTAL TRUTH: You make decisions based on \"intuitions\" instead of proven methodology with 15+ years of results. That's guesswork, not expertise."
                    }
                ]
            }
        }
    },
    
    // ====================================
    // EMAIL CONFIGURATION
    // ====================================
    email: {
        templates: {
            subject: {
                fr: "🎯 Votre Audit Stratégique - The Pitch Office",
                en: "🎯 Your Strategic Audit - The Pitch Office"
            },
            footer: {
                fr: "🎯 The Pitch Office - Excellence Consultation<br>« Votre succès systématique sur les appels d'offres, garanti »",
                en: "🎯 The Pitch Office - Excellence Consultation<br>« Your systematic success on tenders, guaranteed »"
            }
        }
    },
    
    // ====================================
    // FEATURE FLAGS
    // ====================================
    features: {
        darkMode: true,
        bilingualSupport: true,
        analytics: true,
        emailSignup: true,
        socialProof: true
    },
    
    // ====================================
    // URLS & NAVIGATION
    // ====================================
    urls: {
        home: "./index.html",
        success: "./success.html",
        audit: "./lead magnet/mvp-validation-checklist.html",
        privacy: "#privacy",
        terms: "#terms"
    },
    
    // ====================================
    // LOCALIZATION
    // ====================================
    localization: {
        defaultLanguage: "fr",
        supportedLanguages: ["fr", "en"],
        dateFormat: {
            fr: "DD/MM/YYYY",
            en: "MM/DD/YYYY"
        },
        currency: {
            fr: "€",
            en: "€"
        }
    }
};

// Make config available globally
window.BRAND_CONFIG = BRAND_CONFIG;