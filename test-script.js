// Test de Ansiedad Funcional - Método 3R
// Funcionalidad para el test de ansiedad

// Variables globales
let answers = {};
let currentQuestion = 1;
const totalQuestions = 8;

// Resultados del test
const testResults = {
    low: {
        range: "0 a 2 SÍ",
        title: "Ansiedad ocasional",
        description: "Estás enfrentando momentos de tensión, pero aún manejables. Este test puede ayudarte a prevenir un desgaste mayor.",
        color: "#27ae60",
        urgency: "baja",
        recommendation: "El Método 3R te ayudará a mantener tu equilibrio y prevenir que la ansiedad aumente."
    },
    moderate: {
        range: "3 a 5 SÍ",
        title: "Ansiedad funcional moderada",
        description: "Tu cuerpo y mente están pidiendo una pausa. Has aprendido a funcionar… pero también mereces sentirte en paz.",
        color: "#f39c12",
        urgency: "moderada",
        recommendation: "El Método 3R es perfecto para ti. Te ayudará a reconectar con tu calma interior y crear espacios de paz."
    },
    high: {
        range: "6 a 8 SÍ",
        title: "Ansiedad funcional avanzada",
        description: "Estás sobreviviendo, no viviendo. No estás sola: muchas mujeres fuertes están en este punto. Este es el momento perfecto para comenzar a reconectar contigo.",
        color: "#e74c3c",
        urgency: "alta",
        recommendation: "El Método 3R puede ser tu punto de inflexión. Te dará las herramientas para volver a sentirte tú misma."
    }
};

// Inicializar el test
document.addEventListener('DOMContentLoaded', function() {
    initializeTest();
    updateProgress();
});

// Función para inicializar el test
function initializeTest() {
    // Agregar event listeners a todos los botones de respuesta
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            const answer = this.getAttribute('data-answer');
            
            // Guardar la respuesta
            answers[question] = answer;
            
            // Deseleccionar otros botones de la misma pregunta
            const questionButtons = document.querySelectorAll(`[data-question="${question}"]`);
            questionButtons.forEach(btn => btn.classList.remove('selected'));
            
            // Seleccionar el botón actual
            this.classList.add('selected');
            
            // Verificar si todas las preguntas están respondidas
            checkCompletion();
        });
    });
    
    // Event listener para el formulario
    const form = document.getElementById('anxietyTest');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showResults();
    });
}

// Función para verificar si el test está completo
function checkCompletion() {
    const answeredQuestions = Object.keys(answers).length;
    const submitBtn = document.getElementById('submitBtn');
    
    if (answeredQuestions === totalQuestions) {
        submitBtn.disabled = false;
        submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
    }
    
    updateProgress();
}

// Función para actualizar la barra de progreso
function updateProgress() {
    const answeredQuestions = Object.keys(answers).length;
    const progressPercentage = (answeredQuestions / totalQuestions) * 100;
    const progressFill = document.getElementById('progressFill');
    
    progressFill.style.width = progressPercentage + '%';
}

// Función para mostrar los resultados
function showResults() {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    const result = getResult(yesCount);
    
    // Crear el contenido del resultado
    const resultContent = createResultContent(result, yesCount);
    
    // Mostrar el popup
    document.getElementById('resultContent').innerHTML = resultContent;
    document.getElementById('resultPopup').style.display = 'flex';
    
    // Tracking del evento
    trackEvent('test_completed', {
        result_type: result.type,
        yes_count: yesCount,
        urgency_level: result.urgency
    });
}

// Función para obtener el resultado basado en el número de respuestas "Sí"
function getResult(yesCount) {
    if (yesCount <= 2) {
        return { ...testResults.low, type: 'low', yesCount };
    } else if (yesCount <= 5) {
        return { ...testResults.moderate, type: 'moderate', yesCount };
    } else {
        return { ...testResults.high, type: 'high', yesCount };
    }
}

// Función para crear el contenido del resultado
function createResultContent(result, yesCount) {
    const urgencyEmoji = {
        baja: "🟢",
        moderada: "🟡", 
        alta: "🔴"
    };
    
    return `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">${urgencyEmoji[result.urgency]}</div>
            <h3 style="color: ${result.color}; font-size: 1.5rem; margin-bottom: 1rem;">${result.title}</h3>
            <p style="font-size: 1.1rem; color: #666; margin-bottom: 1.5rem;">
                <strong>${result.range}</strong> respuestas "Sí"
            </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 2rem;">
            <p style="font-size: 1.1rem; line-height: 1.6; color: #333; margin-bottom: 1rem;">
                ${result.description}
            </p>
            <p style="font-size: 1rem; color: #667eea; font-weight: 600;">
                ${result.recommendation}
            </p>
        </div>
        
        <div style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
            <h4 style="margin-bottom: 1rem; font-size: 1.2rem;">💡 ¿Por qué el Método 3R es perfecto para ti?</h4>
            <ul style="text-align: left; line-height: 1.6;">
                <li>✅ Técnicas validadas por la neurociencia</li>
                <li>✅ Solo 10 minutos al día</li>
                <li>✅ Sin medicamentos ni citas médicas</li>
                <li>✅ Diseñado específicamente para mujeres como tú</li>
            </ul>
        </div>
        
        <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <p style="color: #856404; font-weight: 600; margin: 0;">
                🎁 <strong>Oferta especial:</strong> Solo $49.000 COP (antes $180.000 COP)
            </p>
        </div>
        
        <div style="background: linear-gradient(135deg, #27ae60, #2ecc71); padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem; text-align: center;">
            <a href="https://mpago.li/11jaEUR" target="_blank" 
               style="display: inline-block; background: linear-gradient(135deg,rgb(74, 231, 60),rgb(43, 192, 142)); color: #fff; font-weight: 700; font-size: 1.1rem; padding: 1rem 2rem; border-radius: 50px; text-decoration: none; box-shadow: 0 10px 30px rgba(231,76,60,0.15); transition: background 0.3s;">
                💳 ¡COMPRAR AHORA Y OBTENER ACCESO INMEDIATO!
            </a>
        </div>
    `;
}

// Función para cerrar el popup de resultados
function closeResultPopup() {
    document.getElementById('resultPopup').style.display = 'none';
}

// Función para ir a la landing page
function goToLanding() {
    // Tracking del evento
    trackEvent('test_to_landing_click', {
        result_type: getCurrentResultType(),
        action: 'go_to_landing'
    });
    
    // Redirigir a la landing page
    window.location.href = 'index.html';
}

// Función para comprar ahora
function buyNow() {
    // Tracking del evento
    trackEvent('test_buy_now_click', {
        result_type: getCurrentResultType(),
        action: 'buy_now'
    });
    
    // Redirigir directamente al link de compra
    if (typeof CONFIG !== 'undefined' && CONFIG.LINKS && CONFIG.LINKS.checkout) {
        window.open(CONFIG.LINKS.checkout, '_blank');
    } else {
        // Fallback: ir a la landing page
        window.location.href = 'index.html';
    }
    
    // Cerrar el popup
    closeResultPopup();
}

// Función para obtener el tipo de resultado actual
function getCurrentResultType() {
    const yesCount = Object.values(answers).filter(answer => answer === 'yes').length;
    if (yesCount <= 2) return 'low';
    if (yesCount <= 5) return 'moderate';
    return 'high';
}

// Función para tracking de eventos
function trackEvent(eventName, eventData = {}) {
    // Aquí puedes integrar Google Analytics, Facebook Pixel, etc.
    console.log('Test Event tracked:', eventName, eventData);
    
    // Ejemplo para Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Ejemplo para Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
}

// Función para guardar resultados en localStorage (opcional)
function saveTestResults(result) {
    const testData = {
        timestamp: new Date().toISOString(),
        answers: answers,
        result: result,
        yesCount: Object.values(answers).filter(answer => answer === 'yes').length
    };
    
    localStorage.setItem('metodo3r_test_results', JSON.stringify(testData));
}

// Función para cargar resultados guardados (opcional)
function loadTestResults() {
    const savedResults = localStorage.getItem('metodo3r_test_results');
    if (savedResults) {
        return JSON.parse(savedResults);
    }
    return null;
}

// Función para enviar resultados por email (opcional)
function sendTestResults(result) {
    // Aquí puedes integrar con tu sistema de email marketing
    const emailData = {
        result_type: result.type,
        yes_count: result.yesCount,
        urgency_level: result.urgency,
        timestamp: new Date().toISOString()
    };
    
    // Ejemplo con Fetch API
    fetch('/api/save-test-results', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Test results saved:', data);
    })
    .catch(error => {
        console.error('Error saving test results:', error);
    });
}

// Función para compartir resultados en redes sociales
function shareResults(result) {
    const text = `Acabo de descubrir que tengo ${result.title.toLowerCase()} con el test del Método 3R. ¡Muy recomendado! 🌿`;
    const url = window.location.href;
    
    // Compartir en WhatsApp
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`;
    window.open(whatsappUrl, '_blank');
}

// Función para reiniciar el test
function resetTest() {
    answers = {};
    currentQuestion = 1;
    
    // Limpiar selecciones
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(button => button.classList.remove('selected'));
    
    // Deshabilitar botón de envío
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.style.background = '#ccc';
    
    // Actualizar progreso
    updateProgress();
    
    // Cerrar popup si está abierto
    closeResultPopup();
}

// Event listeners adicionales
document.addEventListener('keydown', function(e) {
    // Cerrar popup con Escape
    if (e.key === 'Escape') {
        closeResultPopup();
    }
});

// Cerrar popup al hacer clic fuera de él
document.addEventListener('click', function(e) {
    const popup = document.getElementById('resultPopup');
    if (e.target === popup) {
        closeResultPopup();
    }
});

// Función para animar elementos al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.question-container');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Agregar estilos CSS para animaciones
const testStyle = document.createElement('style');
testStyle.textContent = `
    .question-container {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .question-container.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .popup-button.buy-now {
        background: linear-gradient(135deg, #e74c3c, #c0392b);
        color: white;
        font-weight: 700;
        font-size: 1.2rem;
    }
    
    .popup-button.buy-now:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(231, 76, 60, 0.3);
    }

    /* --- Agrega esto para el popup scrolleable --- */
    #resultPopup {
        align-items: center;
        justify-content: center;
        display: flex;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: 9999;
        background: rgba(0,0,0,0.4);
    }
    #resultPopup .popup-content, #resultContent.popup-content {
        max-height: 90vh;
        overflow-y: auto;
        width: 100%;
        max-width: 500px;
        background: #fff;
        border-radius: 12px;
        padding: 2rem;
        box-sizing: border-box;
    }
`;
document.head.appendChild(testStyle);

// Ejecutar animaciones al hacer scroll
window.addEventListener('scroll', animateOnScroll);

// Ejecutar una vez al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
});

// Exportar funciones para uso externo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showResults,
        closeResultPopup,
        goToLanding,
        buyNow,
        resetTest,
        trackEvent
    };
} else {
    window.TestFunctions = {
        showResults,
        closeResultPopup,
        goToLanding,
        buyNow,
        resetTest,
        trackEvent
    };
}