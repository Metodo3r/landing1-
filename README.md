# 🌿 Método 3R - Landing Page

Una landing page profesional y moderna para la venta directa del ebook "Método 3R - Respira, Redacta, Reconecta".

## 🚀 Características

- **Diseño moderno y responsive** - Se adapta perfectamente a todos los dispositivos
- **Pop-up de salida inteligente** - Se activa cuando el usuario intenta abandonar la página
- **Test de ansiedad funcional** - Formulario integrado para capturar leads
- **Animaciones suaves** - Efectos visuales que mejoran la experiencia del usuario
- **Optimizada para conversión** - Elementos de psicología de ventas integrados
- **Tracking de eventos** - Preparada para Google Analytics y Facebook Pixel

## 📁 Estructura del Proyecto

```
Landing 3r/
├── index.html              # Página principal (landing page)
├── test.html              # Página del test de ansiedad funcional
├── styles.css             # Estilos CSS
├── script.js              # Funcionalidad JavaScript de la landing
├── test-script.js         # Funcionalidad JavaScript del test
├── config.js              # Configuración del proyecto
├── payment-integration.js # Ejemplos de integración de pagos
└── README.md             # Este archivo
```

## 🛠️ Instalación y Uso

### 1. Configuración Básica

1. **Abrir el archivo `index.html`** en tu navegador para ver la landing page
2. **Personalizar el contenido** editando el archivo `index.html`
3. **Modificar estilos** editando `styles.css`
4. **Ajustar funcionalidad** editando `script.js`

### 2. Personalización del Contenido

#### Cambiar el WhatsApp
En el archivo `index.html`, busca y reemplaza:
```html
<a href="https://wa.me/57XXXXXXXXXX?text=CALMA" class="whatsapp-link" target="_blank">
```
Reemplaza `57XXXXXXXXXX` con tu número de WhatsApp real.

#### Cambiar el Precio
En la sección de pricing, modifica:
```html
<span class="price-amount">$97 USD</span>  <!-- Precio anterior -->
<span class="price-amount">Solo $27 USD</span>  <!-- Precio actual -->
```

#### Cambiar el Link de Compra
Busca el botón CTA y modifica la función `scrollToCheckout()` en `script.js`:
```javascript
function scrollToCheckout() {
    // Cambiar por tu link de pago
    window.open('https://tu-link-de-pago.com', '_blank');
}
```

### 3. Configuración del Test de Ansiedad

El test tiene su propia página dedicada (`test.html`) con las siguientes características:

#### Funcionalidades del Test:
- **8 preguntas específicas** sobre ansiedad funcional
- **Sistema de resultados automático** basado en respuestas "Sí"
- **3 niveles de ansiedad**: ocasional, moderada, avanzada
- **Popup de resultados** con recomendaciones personalizadas
- **Botón de retorno** a la landing page para compra

#### Personalización del Test:
1. **Modificar las preguntas** en `test.html`
2. **Ajustar los resultados** en `test-script.js` (función `testResults`)
3. **Personalizar el popup** de resultados en `createResultContent()`
4. **Integrar con tu sistema** de email marketing

#### Resultados del Test:
- **0-2 SÍ**: Ansiedad ocasional (verde)
- **3-5 SÍ**: Ansiedad funcional moderada (amarillo)
- **6-8 SÍ**: Ansiedad funcional avanzada (rojo)

#### Acceso al Test:
- Desde el pop-up de salida de la landing page
- Directamente en: `tu-dominio.com/test.html`

### 4. Integración con Herramientas de Marketing

#### Google Analytics 4
Agrega este código en el `<head>` de `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Facebook Pixel
Agrega este código en el `<head>` de `index.html`:
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'TU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=TU_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
```

## 🎨 Personalización de Estilos

### Cambiar Colores Principales
En `styles.css`, modifica las variables de color:
```css
/* Color principal */
color: #667eea;

/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Color de acento */
color: #ffd700;
```

### Cambiar Fuentes
En `index.html`, cambia la fuente de Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 📊 Funcionalidades del Pop-up

### Cuándo se Activa
- Usuario mueve el mouse fuera de la ventana
- Usuario intenta cerrar la pestaña
- Usuario presiona Alt+F4 o Ctrl+W
- Usuario cambia a otra pestaña

### Personalización del Mensaje
En `index.html`, busca la sección del pop-up y modifica:
```html
<div class="popup-header">
    <h2>🎁 ¡Espera! Tienes un regalo especial</h2>
</div>
<div class="popup-body">
    <p>Tu mensaje personalizado aquí...</p>
</div>
```

## 🔧 Configuración Avanzada

### Modificar el Comportamiento del Pop-up
En `script.js`, ajusta:
```javascript
const maxPopupShows = 1; // Número máximo de veces que se muestra
```

### Agregar Más Eventos de Tracking
```javascript
// Ejemplo: tracking de tiempo en página
setTimeout(() => {
    trackEvent('time_on_page_30s');
}, 30000);
```

### Integrar con Sistemas de Email
En la función `submitTest()`, agrega tu lógica:
```javascript
function submitTest() {
    // Ejemplo con Fetch API
    fetch('https://tu-api.com/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: document.querySelector('input[type="email"]').value,
            name: document.querySelector('input[type="text"]').value,
            test_answers: getTestAnswers()
        })
    });
}
```

## 📱 Optimización Móvil

La landing page ya está optimizada para móviles, pero puedes ajustar:

### Tamaños de Fuente
```css
@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem; /* Ajustar según necesites */
    }
}
```

### Espaciado
```css
@media (max-width: 480px) {
    section {
        padding: 40px 0; /* Reducir padding en móviles */
    }
}
```

## 🚀 Despliegue

### Opciones de Hosting

1. **Netlify** (Gratis)
   - Arrastra la carpeta a netlify.com
   - O conecta tu repositorio de GitHub

2. **Vercel** (Gratis)
   - Sube a GitHub y conecta con vercel.com

3. **GitHub Pages** (Gratis)
   - Sube a un repositorio y activa GitHub Pages

4. **Hosting Tradicional**
   - Sube los archivos a tu servidor web

### Configuración de Dominio

1. Compra tu dominio
2. Configura los DNS apuntando a tu hosting
3. Configura SSL/HTTPS (importante para conversiones)

## 📈 Optimización para Conversión

### Elementos Clave Integrados

1. **Urgencia y Escasez** - "Solo 100 mujeres"
2. **Prueba Social** - Testimonios reales
3. **Autoridad** - Referencias a expertos
4. **Beneficios Claros** - "10 minutos al día"
5. **Garantía** - "100% de satisfacción"
6. **Call-to-Action Múltiple** - Botones estratégicos

### A/B Testing Sugerido

- Diferentes precios ($27 vs $37)
- Diferentes colores de botones
- Diferentes mensajes de urgencia
- Diferentes testimonios

## 🛡️ Seguridad y Privacidad

### GDPR Compliance
Agrega un banner de cookies si es necesario:
```html
<div class="cookie-banner">
    <p>Usamos cookies para mejorar tu experiencia.</p>
    <button onclick="acceptCookies()">Aceptar</button>
</div>
```

### Protección de Datos
- Los formularios no almacenan datos localmente
- Integra con servicios seguros de email marketing
- Considera agregar política de privacidad

## 📞 Soporte

Para personalizaciones adicionales o soporte técnico:
- Revisa la documentación de las herramientas que uses
- Consulta con un desarrollador web si necesitas cambios complejos
- Considera usar un constructor de landing pages como LeadPages o ClickFunnels para más facilidad

## 📝 Licencia

Este proyecto es de uso libre para fines comerciales y personales.

---

**¡Listo para convertir visitantes en clientes! 🎉** 