document.getElementById('nutricion-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertir a metros

    const imc = calcularIMC(peso, altura);
    const estado = determinarEstadoNutricional(imc);

    mostrarResultado(imc, estado);
});

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function determinarEstadoNutricional(imc) {
    if (imc < 18.5) {
        return 'Estás con bajo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Tienes un peso ideal';
    } else {
        return 'Estás con sobrepeso';
    }
}

function mostrarResultado(imc, estado) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Tu IMC es: ${imc} - ${estado}`;
}
