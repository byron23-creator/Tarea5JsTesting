const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askUserName() {
    rl.question("Ingrese su nombre: ", (userName) => {
        console.log(userName ? `¡Hola, ${userName}!` : "¡Hola!");

        askWeatherCondition();
    });
}

function askWeatherCondition() {
    rl.question("¿Cuál es la condición del clima actual? ", (weatherCondition) => {
        console.log(`La condición del clima actual es: ${weatherCondition}`);

        let randomPrediction = Math.floor(Math.random() * 6);
        let prediction;

        switch (randomPrediction) {
            case 0:
                prediction = "Hoy será un día increíble, ¡disfrútalo!";
                break;
            case 1:
                prediction = "Mantente alerta, puede haber sorpresas inesperadas.";
                break;
            case 2:
                prediction = "Será un día productivo si te organizas bien.";
                break;
            case 3:
                prediction = "No dejes que los pequeños problemas arruinen tu día.";
                break;
            case 4:
                prediction = "Hoy es un buen día para probar algo nuevo.";
                break;
            case 5:
                prediction = "Confía en tu intuición, tomará las mejores decisiones por ti.";
                break;
        }

        console.log(`Predicción del día: ${prediction}`);
        console.log("¡Que tengas un gran día!");

        rl.close();
    });
}

askUserName();