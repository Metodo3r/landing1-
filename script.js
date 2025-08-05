// Variables globales
let popupShown = false;
let mouseLeaveCount = 0;
const maxPopupShows = 1; // Solo mostrar el popup una vez por sesión

// Función para mostrar el popup
function showPopup() {
    if (!popupShown && mouseLeaveCount <= maxPopupShows) {
        const popup = document.getElementById('exitPopup');
        popup.style.display = 'flex';
        popupShown = true;
        mouseLeaveCount++;
        
        // Tracking del evento
        trackEvent('exit_intent_popup_shown');
        
        // Agregar clase para animación
        setTimeout(() => {
            popup.querySelector('.popup-content').style.opacity = '1';
        }, 10);
    }
}

// Función para detectar si el usuario está en un dispositivo móvil
function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}
// Funcion para activar el pop up tras 30 segundo en móviles
// Solo se activa si el usuario está en un dispositivo móvil
// y no ha cerrado el popup previamente

document.addEventListener('DOMContentLoaded', function() {
    if (isMobile()) {
        setTimeout(function() {
            openPopup();
        }, 30000); // 30 segundos
    }
});

function openPopup() {
    document.getElementById('exitPopup').style.display = 'flex';
}
function closePopup() {
    document.getElementById('exitPopup').style.display = 'none';
}
function takeTest() {
    // Oculta el contenido inicial del popup
    document.querySelector('#exitPopup .popup-header').style.display = 'none';
    document.querySelector('#exitPopup .popup-body').style.display = 'none';
    document.querySelector('#exitPopup .popup-actions').style.display = 'none';
    // Muestra el test
    document.getElementById('testContainer').style.display = 'block';
}

// Función para cerrar el popup
function closePopup() {
    const popup = document.getElementById('exitPopup');
    popup.style.display = 'none';
}

// Función para tomar el test (puedes personalizar esta función)
function takeTest() {
    // Redirigir a la página del test
    window.location.href = 'test.html';
    
    closePopup();
}

// Función para mostrar un formulario de test personalizado
function showTestForm() {
    const testForm = `
        <div class="popup-overlay" id="testFormPopup" style="display: flex;">
            <div class="popup-content">
                <button class="popup-close" onclick="closeTestForm()">&times;</button>
                <div class="popup-header">
                    <h2>🧠 Test de Ansiedad Funcional</h2>
                </div>
                <div class="popup-body">
                    <p><strong>Completa este breve test para identificar tu patrón específico de ansiedad:</strong></p>
                    
                    <form id="anxietyTestForm">
                        <div class="form-group">
                            <label>1. ¿Con qué frecuencia te sientes abrumada por tus responsabilidades?</label>
                            <select required>
                                <option value="">Selecciona una opción</option>
                                <option value="nunca">Nunca</option>
                                <option value="raramente">Raramente</option>
                                <option value="a veces">A veces</option>
                                <option value="frecuentemente">Frecuentemente</option>
                                <option value="siempre">Siempre</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>2. ¿Tienes dificultad para relajarte incluso cuando tienes tiempo libre?</label>
                            <select required>
                                <option value="">Selecciona una opción</option>
                                <option value="nunca">Nunca</option>
                                <option value="raramente">Raramente</option>
                                <option value="a veces">A veces</option>
                                <option value="frecuentemente">Frecuentemente</option>
                                <option value="siempre">Siempre</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>3. ¿Te cuesta pedir ayuda cuando la necesitas?</label>
                            <select required>
                                <option value="">Selecciona una opción</option>
                                <option value="nunca">Nunca</option>
                                <option value="raramente">Raramente</option>
                                <option value="a veces">A veces</option>
                                <option value="frecuentemente">Frecuentemente</option>
                                <option value="siempre">Siempre</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>4. ¿Sientes que tu mente está constantemente acelerada?</label>
                            <select required>
                                <option value="">Selecciona una opción</option>
                                <option value="nunca">Nunca</option>
                                <option value="raramente">Raramente</option>
                                <option value="a veces">A veces</option>
                                <option value="frecuentemente">Frecuentemente</option>
                                <option value="siempre">Siempre</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>5. ¿Tienes problemas para dormir debido a preocupaciones?</label>
                            <select required>
                                <option value="">Selecciona una opción</option>
                                <option value="nunca">Nunca</option>
                                <option value="raramente">Raramente</option>
                                <option value="a veces">A veces</option>
                                <option value="frecuentemente">Frecuentemente</option>
                                <option value="siempre">Siempre</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Tu nombre:</label>
                            <input type="text" required placeholder="Tu nombre">
                        </div>
                        
                        <div class="form-group">
                            <label>Tu email:</label>
                            <input type="email" required placeholder="tu@email.com">
                        </div>
                    </form>
                </div>
                <div class="popup-actions">
                    <button class="popup-button primary" onclick="submitTest()">
                        📊 ENVIAR TEST Y VER RESULTADOS
                    </button>
                    <button class="popup-button secondary" onclick="closeTestForm()">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', testForm);
}

// Función para cerrar el formulario de test
function closeTestForm() {
    const testForm = document.getElementById('testFormPopup');
    if (testForm) {
        testForm.remove();
    }
}

// Función para enviar el test
function submitTest() {
    const form = document.getElementById('anxietyTestForm');
    if (form.checkValidity()) {
        // Aquí puedes procesar el formulario
        alert('¡Gracias por completar el test! Te enviaremos tus resultados personalizados por email.');
        closeTestForm();
        
        // Opcional: redirigir a la página de compra
        setTimeout(() => {
            scrollToCheckout();
        }, 1000);
    } else {
        alert('Por favor, completa todos los campos del test.');
    }
}

// Función para scroll al checkout
function scrollToCheckout() {
    // Redirigir al link de pago configurado
    if (typeof CONFIG !== 'undefined' && CONFIG.LINKS && CONFIG.LINKS.checkout) {
        console.log('Redirigiendo a:', CONFIG.LINKS.checkout); // Para debugging
        window.open(CONFIG.LINKS.checkout, '_blank');
    } else {
        console.log('CONFIG no encontrado, usando fallback'); // Para debugging
        // Fallback: hacer scroll a la sección CTA
        const ctaSection = document.querySelector('.cta');
        if (ctaSection) {
            ctaSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Detectar cuando el mouse sale de la ventana (exit intent)
document.addEventListener('mouseleave', function(e) {
    if (e.clientY <= 0 && !popupShown) {
        // Pequeño delay para que no se active inmediatamente
        setTimeout(() => {
            showPopup();
        }, 500);
    }
});

// Detectar cuando el usuario intenta cerrar la pestaña
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden' && !popupShown) {
        showPopup();
    }
});

// Detectar cuando el usuario presiona Alt+F4 o Ctrl+W
document.addEventListener('keydown', function(e) {
    if ((e.altKey && e.key === 'F4') || (e.ctrlKey && e.key === 'w')) {
        if (!popupShown) {
            e.preventDefault();
            showPopup();
        }
    }
});

// Cerrar popup al hacer clic fuera de él
document.addEventListener('click', function(e) {
    const popup = document.getElementById('exitPopup');
    if (e.target === popup) {
        closePopup();
    }
});

// Cerrar popup con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
        closeTestForm();
    }
});

// Animaciones de scroll para elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.problem-item, .solution-item, .method-item, .bonus-item, .testimonial-item, .benefit-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Agregar estilos CSS para animaciones
const style = document.createElement('style');
style.textContent = `
    .problem-item, .solution-item, .method-item, .bonus-item, .testimonial-item, .benefit-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .problem-item.animate, .solution-item.animate, .method-item.animate, 
    .bonus-item.animate, .testimonial-item.animate, .benefit-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #333;
    }
    
    .form-group select, .form-group input {
        width: 100%;
        padding: 0.8rem;
        border: 2px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }
    
    .form-group select:focus, .form-group input:focus {
        outline: none;
        border-color: #667eea;
    }
    
    .form-group select {
        background: white;
    }
`;
document.head.appendChild(style);

// Ejecutar animaciones al hacer scroll
window.addEventListener('scroll', animateOnScroll);

// Ejecutar una vez al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
    
    // Agregar efecto de hover a los botones
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Función para tracking de eventos (opcional)
function trackEvent(eventName, eventData = {}) {
    // Aquí puedes integrar Google Analytics, Facebook Pixel, etc.
    console.log('Event tracked:', eventName, eventData);
    
    // Ejemplo para Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Ejemplo para Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
}

// Tracking de eventos importantes
document.addEventListener('DOMContentLoaded', function() {
    trackEvent('page_view', {
        page_title: 'Método 3R Landing Page',
        page_location: window.location.href
    });
});

// Tracking cuando se hace clic en el botón CTA principal
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            trackEvent('cta_button_clicked', {
                button_text: this.textContent.trim()
            });
        });
    }
});

// Cuando se muestran los resultados desde test-script.js:
function showResults() {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const result = getResult(yesCount);
    const resultContent = createResultContent(result, yesCount);

    document.getElementById('testContainer').style.display = 'none';
    document.getElementById('resultPopupTest').style.display = 'block';
    document.getElementById('resultContent').innerHTML = resultContent;

    document.getElementById('payBtn').onclick = function() {
        window.open('https://mpago.li/11jaEUR', '_blank');
    };
    document.getElementById('backBtn').onclick = function() {
        document.getElementById('resultPopupTest').style.display = 'none';
        // Vuelve al contenido inicial del popup
        document.querySelector('#exitPopup .popup-header').style.display = '';
        document.querySelector('#exitPopup .popup-body').style.display = '';
        document.querySelector('#exitPopup .popup-actions').style.display = '';
    };
}