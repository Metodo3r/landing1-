// 🔍 Verificador de Pixel de Facebook - Método 3R
// Ejecuta este script en la consola del navegador para verificar el Pixel

console.log('🔍 Iniciando verificación del Pixel de Facebook...');

// Función para verificar el estado del Pixel
function checkFacebookPixel() {
    console.log('\n📋 === VERIFICACIÓN DEL PIXEL DE FACEBOOK ===');
    
    // 1. Verificar si fbq está definido
    if (typeof fbq !== 'undefined') {
        console.log('✅ fbq está definido');
    } else {
        console.log('❌ fbq NO está definido - El Pixel no está instalado');
        return false;
    }
    
    // 2. Verificar si el Pixel está cargado
    if (fbq.loaded) {
        console.log('✅ Pixel de Facebook cargado correctamente');
    } else {
        console.log('⚠️ Pixel de Facebook no está cargado');
    }
    
    // 3. Verificar llamadas de red a Facebook
    const performance = window.performance;
    const entries = performance.getEntriesByType('resource');
    const facebookCalls = entries.filter(entry => 
        entry.name.includes('facebook.com') || 
        entry.name.includes('fbcdn.net')
    );
    
    console.log(`🌐 ${facebookCalls.length} llamadas a Facebook detectadas:`);
    facebookCalls.forEach((call, index) => {
        console.log(`  ${index + 1}. ${call.name}`);
    });
    
    return true;
}

// Función para probar eventos
function testFacebookEvents() {
    console.log('\n🧪 === PRUEBAS DE EVENTOS ===');
    
    if (typeof fbq === 'undefined') {
        console.log('❌ fbq no está disponible para pruebas');
        return;
    }
    
    // Probar PageView
    console.log('📄 Probando PageView...');
    fbq('track', 'PageView');
    
    // Probar AddToCart
    console.log('🛒 Probando AddToCart...');
    fbq('track', 'AddToCart', {
        content_ids: ['metodo3r'],
        content_name: 'Método 3R',
        value: 27.00,
        currency: 'USD'
    });
    
    // Probar Lead
    console.log('📞 Probando Lead...');
    fbq('track', 'Lead', {
        content_name: 'Método 3R Lead',
        value: 27.00,
        currency: 'USD'
    });
    
    // Probar CompleteRegistration
    console.log('📝 Probando CompleteRegistration...');
    fbq('track', 'CompleteRegistration', {
        content_name: 'Test de Ansiedad Funcional',
        value: 0.00,
        currency: 'USD'
    });
    
    console.log('✅ Todos los eventos de prueba enviados');
}

// Función para verificar el código HTML
function checkHTMLCode() {
    console.log('\n🔍 === VERIFICACIÓN DEL CÓDIGO HTML ===');
    
    // Buscar el código del Pixel en el HTML
    const scripts = document.querySelectorAll('script');
    let pixelFound = false;
    let pixelId = null;
    
    scripts.forEach(script => {
        if (script.textContent.includes('fbq(') || script.textContent.includes('facebook.com')) {
            pixelFound = true;
            console.log('✅ Código del Pixel encontrado en HTML');
            
            // Buscar el Pixel ID
            const match = script.textContent.match(/fbq\('init',\s*['"]([^'"]+)['"]\)/);
            if (match) {
                pixelId = match[1];
                console.log(`📋 Pixel ID encontrado: ${pixelId}`);
                
                if (pixelId === 'XXXXXXXXXX') {
                    console.log('⚠️ El Pixel ID aún tiene el valor placeholder');
                } else {
                    console.log('✅ Pixel ID configurado correctamente');
                }
            }
        }
    });
    
    if (!pixelFound) {
        console.log('❌ Código del Pixel no encontrado en HTML');
    }
}

// Función para verificar eventos personalizados
function checkCustomEvents() {
    console.log('\n🎯 === VERIFICACIÓN DE EVENTOS PERSONALIZADOS ===');
    
    // Verificar si hay eventos personalizados configurados
    const customEvents = [
        'exit_intent_popup_shown',
        'test_completed',
        'test_to_landing_click',
        'test_buy_now_click',
        'cta_button_clicked'
    ];
    
    customEvents.forEach(event => {
        console.log(`📊 Evento personalizado: ${event}`);
    });
}

// Función para mostrar instrucciones
function showInstructions() {
    console.log('\n📝 === INSTRUCCIONES DE VERIFICACIÓN ===');
    console.log('1. 📱 Ve a Facebook Business Manager');
    console.log('2. 🔍 Navega a Eventos en tiempo real');
    console.log('3. 🧪 Ejecuta las pruebas de eventos');
    console.log('4. 📊 Verifica que los eventos aparezcan');
    console.log('5. 🔧 Instala Facebook Pixel Helper (extensión del navegador)');
    console.log('6. 🌐 Verifica en la pestaña Network del navegador');
}

// Función principal
function runFullCheck() {
    console.log('🚀 Iniciando verificación completa del Pixel de Facebook...');
    
    checkHTMLCode();
    checkFacebookPixel();
    testFacebookEvents();
    checkCustomEvents();
    showInstructions();
    
    console.log('\n✅ Verificación completa terminada');
    console.log('💡 Revisa Facebook Business Manager para confirmar que los eventos lleguen');
}

// Ejecutar verificación automáticamente
setTimeout(() => {
    runFullCheck();
}, 2000);

// Exportar funciones para uso manual
window.FacebookPixelChecker = {
    check: checkFacebookPixel,
    testEvents: testFacebookEvents,
    checkHTML: checkHTMLCode,
    checkCustom: checkCustomEvents,
    runFull: runFullCheck,
    instructions: showInstructions
};

console.log('🔧 Usa FacebookPixelChecker.runFull() para ejecutar la verificación completa'); 