# Motor de búsqueda .json
Programa escrito en Javascript que permite un parámetro ingresado por teclado, y busca los 10 objetos más similares. La similitud se basa en la cercanía entre los valores numéricos de cada atributo (diferencia).

# Por qué se hizo en Javascript
Por poseer mayor experiencia en Javascript, en contraste con asegurar una entrega dentro del tiempo especificado.

# Instrucciones de ejecución
Para ejecutar el programa, deben cumplirse las siguientes condiciones:
1. El archivo motordebusqueda.js, y el fichero .json a analizar deben encontrarse en el mismo directorio.
2. El fichero a analizar debe llamarse "redd-test-data.json".
3. Este programa fue desarrollado en Ubuntu, por lo que su ejecución en otros sistemas operativos puede verse comprometida.

Los pasos de ejecucíón son los siguientes:
1. Por terminal, escribir "node motordebusqueda.js".
2. El programa le pedirá el valor a analizar. Ingresar según el siguiente formato: sku-X, siendo X un valor numérico.
3. Por terminal, el programa mostrará los 10 resultados con atributos más semejantes, especificando su identificador y sus atributos.
