# False Word Generator


## Descripción
False Word Generator es una herramienta para generar palabras aleatorias que no existen en inglés. Puede ser útil para pruebas, generación de nombres de productos, o simplemente para divertirse creando nuevas palabras.

## Instalación
Puedes instalar este paquete usando npm:

```sh
npm install false-word-generator
```
## Uso
### Uso del Módulo
Puedes usar el módulo en tu código Node.js:

```js
const generateUniqueWord = require('false-word-generator');

const word = generateUniqueWord(6);
console.log(word); // Imprime una palabra aleatoria de 6 caracteres que no existe en inglés
Uso desde la Línea de Comandos
```

También puedes usar este paquete desde la línea de comandos:

```sh
npx false-word-generator --length 8
```

## Opciones

* -l, --length <number>: Longitud de la palabra a generar (por defecto es 6).

## Ejemplos
### Módulo
```js
const generateUniqueWord = require('false-word-generator');

// Generar una palabra de 8 caracteres
const word = generateUniqueWord(8);
console.log(word);
```

### Línea de Comandos
```sh
# Generar una palabra de 10 caracteres
npx false-word-generator --length 10
```

## Contribuciones
¡Las contribuciones son bienvenidas! Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

## Licencia
Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto
Para cualquier pregunta o sugerencia, por favor, abre un issue en el repositorio de GitHub.

