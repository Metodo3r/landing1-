# 🧪 Personalización del Test de Ansiedad Funcional

## 📝 Cómo Personalizar el Test

### 1. Modificar las Preguntas

En el archivo `test.html`, puedes cambiar las preguntas editando las secciones:

```html
<div class="question-text">¿Sueles sentirte agotada incluso después de dormir?</div>
```

### 2. Ajustar los Resultados

En `test-script.js`, modifica el objeto `testResults`:

```javascript
const testResults = {
    low: {
        range: "0 a 2 SÍ",
        title: "Ansiedad ocasional",
        description: "Tu descripción personalizada aquí...",
        color: "#27ae60",
        urgency: "baja",
        recommendation: "Tu recomendación personalizada..."
    },
    // ... más resultados
};
```

### 3. Personalizar el Popup de Resultados

En la función `createResultContent()` de `test-script.js`:

```javascript
function createResultContent(result, yesCount) {
    return `
        <div style="text-align: center;">
            <h3>${result.title}</h3>
            <p>${result.description}</p>
            <!-- Tu contenido personalizado aquí -->
        </div>
    `;
}
```

## 🎨 Ejemplos de Personalización

### Ejemplo 1: Test para Estrés Laboral

**Preguntas:**
1. ¿Te sientes abrumada por las responsabilidades del trabajo?
2. ¿Tienes dificultad para desconectar después del horario laboral?
3. ¿Te preocupa constantemente el rendimiento en el trabajo?
4. ¿Sientes que no tienes tiempo para ti misma?
5. ¿Te irritas fácilmente con compañeros o clientes?
6. ¿Tienes problemas para dormir pensando en el trabajo?
7. ¿Te sientes culpable cuando tomas tiempo libre?
8. ¿Te gustaría aprender técnicas para manejar el estrés laboral?

### Ejemplo 2: Test para Madres

**Preguntas:**
1. ¿Te sientes agotada incluso después de dormir?
2. ¿Te cuesta encontrar tiempo para ti misma?
3. ¿Te sientes culpable cuando te tomas un descanso?
4. ¿Tienes dificultad para relajarte cuando tienes tiempo libre?
5. ¿Te preocupa constantemente el bienestar de tus hijos?
6. ¿Sientes que no eres suficiente como madre?
7. ¿Te irritas fácilmente con tus hijos?
8. ¿Te gustaría tener herramientas para manejar la maternidad con calma?

### Ejemplo 3: Test para Emprendedoras

**Preguntas:**
1. ¿Te sientes abrumada por las múltiples responsabilidades?
2. ¿Tienes dificultad para desconectar del trabajo?
3. ¿Te preocupa constantemente el futuro de tu negocio?
4. ¿Sientes que no tienes tiempo para cuidarte?
5. ¿Te irritas fácilmente con clientes o proveedores?
6. ¿Tienes problemas para dormir pensando en el negocio?
7. ¿Te sientes culpable cuando tomas tiempo libre?
8. ¿Te gustaría aprender técnicas para manejar el estrés empresarial?

## 🎯 Personalización de Resultados

### Resultado Bajo (0-2 SÍ)

```javascript
low: {
    range: "0 a 2 SÍ",
    title: "Estrés ocasional",
    description: "Estás manejando bien la mayoría de situaciones, pero podrías beneficiarte de herramientas preventivas.",
    color: "#27ae60",
    urgency: "baja",
    recommendation: "El Método 3R te ayudará a mantener tu equilibrio y prevenir que el estrés aumente."
}
```

### Resultado Moderado (3-5 SÍ)

```javascript
moderate: {
    range: "3 a 5 SÍ",
    title: "Estrés funcional moderado",
    description: "Tu cuerpo y mente están pidiendo una pausa. Has aprendido a funcionar, pero también mereces sentirte en paz.",
    color: "#f39c12",
    urgency: "moderada",
    recommendation: "El Método 3R es perfecto para ti. Te ayudará a reconectar con tu calma interior."
}
```

### Resultado Alto (6-8 SÍ)

```javascript
high: {
    range: "6 a 8 SÍ",
    title: "Estrés funcional avanzado",
    description: "Estás sobreviviendo, no viviendo. No estás sola: muchas personas fuertes están en este punto.",
    color: "#e74c3c",
    urgency: "alta",
    recommendation: "El Método 3R puede ser tu punto de inflexión. Te dará las herramientas para volver a sentirte tú misma."
}
```

## 🎨 Personalización Visual

### Cambiar Colores

```javascript
const urgencyColors = {
    baja: "#27ae60",      // Verde
    moderada: "#f39c12",  // Amarillo
    alta: "#e74c3c"       // Rojo
};
```

### Cambiar Emojis

```javascript
const urgencyEmoji = {
    baja: "🟢",
    moderada: "🟡", 
    alta: "🔴"
};
```

### Cambiar Mensajes de Urgencia

```javascript
const urgencyMessages = {
    baja: "Perfecto para prevención",
    moderada: "Momento ideal para actuar",
    alta: "Necesitas herramientas ahora"
};
```

## 📊 Integración con Analytics

### Tracking de Eventos

```javascript
// En test-script.js
function trackTestEvent(result) {
    gtag('event', 'test_completed', {
        result_type: result.type,
        yes_count: result.yesCount,
        urgency_level: result.urgency
    });
}
```

### Envío a Email Marketing

```javascript
function sendTestToEmailMarketing(result) {
    const data = {
        email: userEmail,
        test_result: result.type,
        urgency_level: result.urgency,
        yes_count: result.yesCount
    };
    
    // Enviar a Mailchimp, ConvertKit, etc.
    fetch('/api/save-test-result', {
        method: 'POST',
        body: JSON.stringify(data)
    });
}
```

## 🔧 Configuración Avanzada

### Múltiples Tests

Puedes crear diferentes versiones del test para diferentes audiencias:

- `test-laboral.html` - Para estrés laboral
- `test-maternidad.html` - Para madres
- `test-emprendedoras.html` - Para emprendedoras

### Test Adaptativo

```javascript
// Mostrar preguntas diferentes según respuestas anteriores
function showAdaptiveQuestion(previousAnswers) {
    if (previousAnswers.yesCount > 5) {
        return "¿Has considerado buscar ayuda profesional?";
    } else {
        return "¿Te gustaría aprender técnicas preventivas?";
    }
}
```

### Test con Puntuación

```javascript
// Sistema de puntuación más complejo
function calculateScore(answers) {
    let score = 0;
    
    // Preguntas más importantes tienen más peso
    const weights = {
        1: 1,  // Pregunta básica
        2: 2,  // Pregunta importante
        3: 3   // Pregunta crítica
    };
    
    Object.keys(answers).forEach(question => {
        if (answers[question] === 'yes') {
            score += weights[question] || 1;
        }
    });
    
    return score;
}
```

## 📱 Optimización Móvil

### Ajustes para Móviles

```css
@media (max-width: 768px) {
    .question-text {
        font-size: 1.1rem;
        line-height: 1.4;
    }
    
    .answer-buttons {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .answer-btn {
        padding: 1.2rem 1rem;
        font-size: 1rem;
    }
}
```

## 🚀 Próximos Pasos

1. **Personaliza las preguntas** según tu audiencia
2. **Ajusta los resultados** para que sean más específicos
3. **Integra con tu sistema** de email marketing
4. **Configura el tracking** para medir conversiones
5. **Prueba diferentes versiones** con A/B testing

---

**¡Tu test está listo para capturar leads y convertir visitantes en clientes! 🎉** 