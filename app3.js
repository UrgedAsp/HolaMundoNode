console.log('Inicio de programa'); // 1 Paso

setTimeout(() => {
    console.log('Primer Timeout'); // 5 Paso
}, 3000);

setTimeout(() => {
    console.log('Segundo Timeout'); // 3 Paso
}, 0);

setTimeout(() => {
    console.log('Tercer Timeout'); // 4 Paso
}, 0);

console.log('Fin de programa'); // 2 Paso