// Configuración de la Landing Page - Método 3R
// Modifica estos valores según tus necesidades

const CONFIG = {
    // Información del Producto
    PRODUCT: {
        name: "Método 3R - Respira, Redacta, Reconecta",
        subtitle: "El protocolo anti-ansiedad funcional que puedes aplicar en solo 10 minutos al día",
        description: "Sin pastillas, sin citas médicas y sin dejar tu rutina",
        target: "Diseñado por y para mujeres que lo hacen todo… pero están agotadas por dentro"
    },

    // Precios
    PRICING: {
        originalPrice: "$97 USD",
        currentPrice: "$27 USD",
        currency: "USD"
    },

    // Información de Contacto
    CONTACT: {
        whatsapp: "57XXXXXXXXXX", // Reemplaza con tu número real
        whatsappMessage: "CALMA",
        email: "tu@email.com" // Reemplaza con tu email
    },

    // Links de Compra
    LINKS: {
        checkout: "https://www.mercadopago.com.co/checkout/v1/payment/redirect/6904ab6f-9d6e-47a3-a54b-fe17f1204c30/payment-option-form/?source=link&preference-id=174281746-e09ec324-ec99-404a-85dc-c1bf79c2091f&router-request-id=9064d3d9-e9cb-4770-9ba7-ff5e82bf4bb0&p=1d75231abe393859c937f20de75bbbfd", // Link de Mercado Pago - Verificar si funciona
        testForm: "https://forms.google.com/tu-formulario", // Opcional: link a formulario externo
        privacyPolicy: "https://tu-sitio.com/privacy", // Opcional: política de privacidad
        termsOfService: "https://tu-sitio.com/terms" // Opcional: términos de servicio
    },

    // Configuración del Pop-up
    POPUP: {
        enabled: true,
        maxShows: 1, // Número máximo de veces que se muestra
        delay: 500, // Delay en milisegundos antes de mostrar
        title: "🎁 ¡Espera! Tienes un regalo especial",
        message: "Te has hecho merecedora de poder aplicar a un test para saber qué tipo de ansiedad funcional tienes.",
        benefits: [
            "Identificar tu patrón específico de ansiedad",
            "Recibir recomendaciones personalizadas",
            "Entender mejor tu situación actual"
        ]
    },

    // Configuración del Test
    TEST: {
        enabled: true,
        title: "🧠 Test de Ansiedad Funcional",
        description: "Completa este breve test para identificar tu patrón específico de ansiedad:",
        questions: [
            {
                id: 1,
                question: "¿Con qué frecuencia te sientes abrumada por tus responsabilidades?",
                type: "select",
                options: ["Nunca", "Raramente", "A veces", "Frecuentemente", "Siempre"]
            },
            {
                id: 2,
                question: "¿Tienes dificultad para relajarte incluso cuando tienes tiempo libre?",
                type: "select",
                options: ["Nunca", "Raramente", "A veces", "Frecuentemente", "Siempre"]
            },
            {
                id: 3,
                question: "¿Te cuesta pedir ayuda cuando la necesitas?",
                type: "select",
                options: ["Nunca", "Raramente", "A veces", "Frecuentemente", "Siempre"]
            },
            {
                id: 4,
                question: "¿Sientes que tu mente está constantemente acelerada?",
                type: "select",
                options: ["Nunca", "Raramente", "A veces", "Frecuentemente", "Siempre"]
            },
            {
                id: 5,
                question: "¿Tienes problemas para dormir debido a preocupaciones?",
                type: "select",
                options: ["Nunca", "Raramente", "A veces", "Frecuentemente", "Siempre"]
            }
        ]
    },

    // Configuración de Tracking
    TRACKING: {
        googleAnalytics: {
            enabled: false,
            measurementId: "G-XXXXXXXXXX" // Reemplaza con tu ID de GA4
        },
        facebookPixel: {
            enabled: false,
            pixelId: "1619537798963946" // Reemplaza con tu Pixel ID
        },
        hotjar: {
            enabled: false,
            siteId: "XXXXXXXXXX" // Reemplaza con tu Site ID
        }
    },

    // Configuración de Email Marketing
    EMAIL_MARKETING: {
        provider: "mailchimp", // mailchimp, convertkit, activecampaign, etc.
        apiKey: "tu-api-key", // Reemplaza con tu API key
        listId: "tu-list-id", // Reemplaza con tu List ID
        endpoint: "https://api.mailchimp.com/3.0/lists/tu-list-id/members"
    },

    // Configuración de Urgencia
    URGENCY: {
        enabled: true,
        maxCustomers: 100,
        message: "Solo disponible para las primeras 100 mujeres que compren esta semana.",
        countdown: {
            enabled: false,
            endDate: "2024-12-31T23:59:59" // Fecha límite para la oferta
        }
    },

    // Configuración de Garantía
    GUARANTEE: {
        enabled: true,
        days: 30,
        message: "Garantía 100% de satisfacción"
    },

    // Configuración de Bonos
    BONUSES: [
        {
            icon: "🎧",
            title: "Audios guiados de respiración y visualización",
            description: "Sesiones de audio para practicar las técnicas del método"
        },
        {
            icon: "📓",
            title: "Plantillas de journaling (digitales e imprimibles)",
            description: "Guías estructuradas para tu práctica de escritura emocional"
        },
        {
            icon: "📅",
            title: "Calendario de 21 días para formar el hábito",
            description: "Plan paso a paso para crear tu rutina de 10 minutos"
        },
        {
            icon: "👩‍💻",
            title: "Acceso preferencial al grupo privado de mujeres 3R",
            description: "Comunidad de apoyo con otras mujeres en el mismo camino"
        }
    ],

    // Testimonios
    TESTIMONIALS: [
        {
            quote: "La primera vez que escribí, lloré sin parar… y dormí profundo por primera vez en semanas.",
            author: "Ana M.",
            details: "32 años, mamá y diseñadora"
        },
        {
            quote: "No tuve que cambiar toda mi vida. Solo darme 10 minutos… y eso lo cambió todo.",
            author: "Mariana G.",
            details: "39 años, abogada"
        },
        {
            quote: "Me sentía rota. Hoy sé que solo estaba saturada. Este método me devolvió a mí.",
            author: "Laura P.",
            details: "27 años, estudiante de posgrado"
        }
    ],

    // Configuración de Colores (opcional)
    COLORS: {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#ffd700",
        success: "#27ae60",
        warning: "#f39c12",
        danger: "#e74c3c"
    },

    // Configuración de Fuentes
    FONTS: {
        primary: "Inter",
        weights: [300, 400, 500, 600, 700]
    }
};

// Función para obtener configuración
function getConfig(key) {
    return key.split('.').reduce((obj, k) => obj && obj[k], CONFIG);
}

// Función para actualizar configuración dinámicamente
function updateConfig(key, value) {
    const keys = key.split('.');
    const lastKey = keys.pop();
    const obj = keys.reduce((o, k) => o[k] = o[k] || {}, CONFIG);
    obj[lastKey] = value;
}

// Exportar configuración para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
    window.getConfig = getConfig;
    window.updateConfig = updateConfig;
} 