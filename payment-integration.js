// Integración con Sistemas de Pago - Método 3R
// Ejemplos de cómo integrar con diferentes plataformas de pago

// 1. INTEGRACIÓN CON STRIPE
function integrateStripe() {
    // Cargar Stripe.js
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    document.head.appendChild(script);
    
    script.onload = function() {
        const stripe = Stripe('tu-publishable-key');
        
        // Crear botón de pago
        const button = document.querySelector('.cta-button');
        button.addEventListener('click', function() {
            // Crear sesión de checkout
            fetch('/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId: 'price_metodo3r',
                    successUrl: window.location.origin + '/success',
                    cancelUrl: window.location.origin + '/cancel'
                })
            })
            .then(response => response.json())
            .then(session => {
                stripe.redirectToCheckout({ sessionId: session.id });
            });
        });
    };
}

// 2. INTEGRACIÓN CON PAYPAL
function integratePayPal() {
    // Cargar PayPal SDK
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=tu-client-id&currency=USD';
    document.head.appendChild(script);
    
    script.onload = function() {
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: '27.00',
                            currency_code: 'USD'
                        },
                        description: 'Método 3R - Respira, Redacta, Reconecta'
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    // Pago exitoso
                    window.location.href = '/success?order_id=' + data.orderID;
                });
            }
        }).render('.cta-button');
    };
}

// 3. INTEGRACIÓN CON MERCADO PAGO
function integrateMercadoPago() {
    // Cargar MercadoPago SDK
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    document.head.appendChild(script);
    
    script.onload = function() {
        const mp = new MercadoPago('tu-public-key');
        
        const button = document.querySelector('.cta-button');
        button.addEventListener('click', function() {
            // Crear preferencia de pago
            fetch('/create-preference', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: 'Método 3R - Respira, Redacta, Reconecta',
                    price: 27.00,
                    currency: 'USD'
                })
            })
            .then(response => response.json())
            .then(preference => {
                mp.checkout({
                    preference: {
                        id: preference.id
                    },
                    render: {
                        container: '.cta-button',
                        label: 'Comprar ahora'
                    }
                });
            });
        });
    };
}

// 4. INTEGRACIÓN CON HOTMART
function integrateHotmart() {
    // Hotmart usa un iframe o redirección directa
    const button = document.querySelector('.cta-button');
    button.addEventListener('click', function() {
        // Redirigir a la página de Hotmart
        window.open('https://pay.hotmart.com/tu-producto', '_blank');
        
        // O usar el widget de Hotmart
        // Hotmart.showOverlay('tu-product-id');
    });
}

// 5. INTEGRACIÓN CON MONETIZZE
function integrateMonetizze() {
    const button = document.querySelector('.cta-button');
    button.addEventListener('click', function() {
        // Redirigir a la página de Monetizze
        window.open('https://pay.monetizze.com.br/tu-producto', '_blank');
    });
}

// 6. INTEGRACIÓN CON KAJABI
function integrateKajabi() {
    const button = document.querySelector('.cta-button');
    button.addEventListener('click', function() {
        // Redirigir a la página de Kajabi
        window.open('https://tu-sitio.kajabi.com/offers/tu-producto', '_blank');
    });
}

// 7. INTEGRACIÓN CON CONVERTKIT (EMAIL MARKETING + PAGOS)
function integrateConvertKit() {
    const button = document.querySelector('.cta-button');
    button.addEventListener('click', function() {
        // ConvertKit Commerce
        window.open('https://tu-sitio.convertkit.com/offers/tu-producto', '_blank');
    });
}

// 8. INTEGRACIÓN CON ACTIVE CAMPAIGN
function integrateActiveCampaign() {
    const button = document.querySelector('.cta-button');
    button.addEventListener('click', function() {
        // ActiveCampaign Commerce
        window.open('https://tu-sitio.activehosted.com/offers/tu-producto', '_blank');
    });
}

// 9. INTEGRACIÓN CON THRIVECART
function integrateThriveCart() {
    const button = document.querySelector('.cta-button');
    button.addEventListener('click', function() {
        // ThriveCart checkout
        window.open('https://tu-sitio.thrivecart.com/tu-producto', '_blank');
    });
}

// 10. INTEGRACIÓN CON CLICKFUNNELS
function integrateClickFunnels() {
    const button = document.querySelector('.cta-button');
    button.addEventListener('click', function() {
        // ClickFunnels checkout
        window.open('https://tu-sitio.clickfunnels.com/tu-producto', '_blank');
    });
}

// FUNCIÓN PRINCIPAL PARA SELECCIONAR LA INTEGRACIÓN
function initializePaymentIntegration(provider) {
    switch(provider.toLowerCase()) {
        case 'stripe':
            integrateStripe();
            break;
        case 'paypal':
            integratePayPal();
            break;
        case 'mercadopago':
            integrateMercadoPago();
            break;
        case 'hotmart':
            integrateHotmart();
            break;
        case 'monetizze':
            integrateMonetizze();
            break;
        case 'kajabi':
            integrateKajabi();
            break;
        case 'convertkit':
            integrateConvertKit();
            break;
        case 'activecampaign':
            integrateActiveCampaign();
            break;
        case 'thrivecart':
            integrateThriveCart();
            break;
        case 'clickfunnels':
            integrateClickFunnels();
            break;
        default:
            // Integración simple con link directo
            const button = document.querySelector('.cta-button');
            button.addEventListener('click', function() {
                window.open(CONFIG.LINKS.checkout, '_blank');
            });
    }
}

// FUNCIÓN PARA PROCESAR PAGOS EXITOSOS
function handlePaymentSuccess(orderData) {
    // Enviar datos a tu sistema de email marketing
    if (CONFIG.EMAIL_MARKETING.enabled) {
        sendToEmailMarketing(orderData);
    }
    
    // Tracking de conversión
    trackEvent('purchase_completed', {
        value: 27.00,
        currency: 'USD',
        order_id: orderData.orderId
    });
    
    // Redirigir a página de agradecimiento
    window.location.href = '/thank-you';
}

// FUNCIÓN PARA ENVIAR A EMAIL MARKETING
function sendToEmailMarketing(customerData) {
    const provider = CONFIG.EMAIL_MARKETING.provider;
    
    switch(provider) {
        case 'mailchimp':
            sendToMailchimp(customerData);
            break;
        case 'convertkit':
            sendToConvertKit(customerData);
            break;
        case 'activecampaign':
            sendToActiveCampaign(customerData);
            break;
        case 'klaviyo':
            sendToKlaviyo(customerData);
            break;
        default:
            console.log('Email marketing provider not configured');
    }
}

// EJEMPLO: ENVIAR A MAILCHIMP
function sendToMailchimp(customerData) {
    fetch(CONFIG.EMAIL_MARKETING.endpoint, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + CONFIG.EMAIL_MARKETING.apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email_address: customerData.email,
            status: 'subscribed',
            merge_fields: {
                FNAME: customerData.firstName,
                LNAME: customerData.lastName,
                PRODUCT: 'Método 3R'
            },
            tags: ['comprador', 'metodo-3r']
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Customer added to Mailchimp:', data);
    })
    .catch(error => {
        console.error('Error adding customer to Mailchimp:', error);
    });
}

// FUNCIÓN PARA VERIFICAR EL ESTADO DEL PAGO
function checkPaymentStatus(orderId) {
    // Implementar según tu proveedor de pago
    fetch('/check-payment-status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId: orderId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'paid') {
            handlePaymentSuccess(data);
        }
    });
}

// INICIALIZAR INTEGRACIÓN AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', function() {
    // Usar el proveedor configurado o un link directo
    const paymentProvider = CONFIG.LINKS.checkout.includes('stripe') ? 'stripe' :
                           CONFIG.LINKS.checkout.includes('paypal') ? 'paypal' :
                           CONFIG.LINKS.checkout.includes('mercadopago') ? 'mercadopago' :
                           'direct';
    
    initializePaymentIntegration(paymentProvider);
});

// Exportar funciones para uso externo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializePaymentIntegration,
        handlePaymentSuccess,
        sendToEmailMarketing,
        checkPaymentStatus
    };
} else {
    window.PaymentIntegration = {
        initializePaymentIntegration,
        handlePaymentSuccess,
        sendToEmailMarketing,
        checkPaymentStatus
    };
} 