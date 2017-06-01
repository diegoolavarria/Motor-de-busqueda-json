//Autor: Diego Olavarría Úbeda

var fs = require('fs'); //fileSystem
var readline = require('readline'); 

var indice;
var acomparar;

var entrada = readline.createInterface({ //declaración de lectura de entrada por consola
  	input: process.stdin,
  	output: process.stdout
});

entrada.question("Ingrese parámetro de búsqueda: ", function(answer) {//Permitir entrada por teclado
  acomparar = answer;//guardar entrada en variable "acomparar"
	indice = answer.replace("sku-", "") - 1;//guardar valor numérico de entrada en variable "indice"
   	fs.readFile('redd-test-data.json', "utf8", leerJson)//leer archivo
   	entrada.close();//terminar lectura por teclado
});

function leerJson (err, data) {
  	var todosdatos = [];//crear array para guardar datos leidos del archivo
    var objeto = [];//crear array para guardar objeto especificado en entrada
  	var datos = data.replace(/att-/g, ""); //eliminar caracteres innecesarios de la información leida del archivo
  	var datos2 = JSON.parse(datos);//Parsear datos para guardarlos en objetos

  	var cantidad = Object.keys(datos2).length; //obtener cantidad de objetos
    for(var key in datos2) { //para cada objeto
      todosdatos.push(datos2[key]); //guardar objetos en array "todosdatos"
      if (key == acomparar){ //si el objeto corresponde al especificado por teclado
        objeto.push(datos2[key]); //guardar en array "objeto"
      }
    }
    datos = datos.replace(/-/g, "");//eliminar más caracteres innecesarios
    for (i=0;i<cantidad;i++){//para cada atributo en cada objeto, eliminar caracteres innecesarios y dejar solo numericos
      todosdatos[i].a = todosdatos[i].a.replace("a-", "");
      todosdatos[i].b = todosdatos[i].b.replace("b-", "");
      todosdatos[i].c = todosdatos[i].c.replace("c-", "");
      todosdatos[i].d = todosdatos[i].d.replace("d-", "");
      todosdatos[i].e = todosdatos[i].e.replace("e-", "");
      todosdatos[i].f = todosdatos[i].f.replace("f-", "");
      todosdatos[i].g = todosdatos[i].g.replace("g-", "");
      todosdatos[i].h = todosdatos[i].h.replace("h-", "");
      todosdatos[i].i = todosdatos[i].i.replace("i-", "");
      todosdatos[i].j = todosdatos[i].j.replace("j-", "");
      todosdatos[i].id = 'sku-' + parseInt(i+1);//crear un atributo "id" para cada objeto, correspondiente a su llave
    }
    for (i=0;i<cantidad;i++){ //para cada objeto
      if (i != indice){ //si el objeto no es el especificado por teclado, encontrar diferencia entre los valores de cada objeto, y el objeto especificado
        todosdatos[i].a = todosdatos[i].a - objeto[0].a;
        todosdatos[i].b = todosdatos[i].b - objeto[0].b;
        todosdatos[i].c = todosdatos[i].c - objeto[0].c;
        todosdatos[i].d = todosdatos[i].d - objeto[0].d;
        todosdatos[i].e = todosdatos[i].e - objeto[0].e;
        todosdatos[i].f = todosdatos[i].f - objeto[0].f;
        todosdatos[i].g = todosdatos[i].g - objeto[0].g;
        todosdatos[i].h = todosdatos[i].h - objeto[0].h;
        todosdatos[i].i = todosdatos[i].i - objeto[0].i;
        todosdatos[i].j = todosdatos[i].j - objeto[0].j;
      }
    }
    todosdatos.sort(function (a, b) {//ordenar objetos por menor diferencia numérica absoluta de atributos, a mayor diferencia absoluta
        return Math.abs(a.a) - Math.abs(b.a) || Math.abs(a.b) - Math.abs(b.b) || Math.abs(a.c) - Math.abs(b.c) || Math.abs(a.d) - Math.abs(b.d) || Math.abs(a.e) - Math.abs(b.e) || Math.abs(a.f) - Math.abs(b.f) || Math.abs(a.g) - Math.abs(b.g) || Math.abs(a.h) - Math.abs(b.h) || Math.abs(a.i) - Math.abs(b.i) || Math.abs(a.j) - Math.abs(b.j);
    });
    console.log("indice a comparar:");//mostrar objeto especificado para comparar en la consola los resultados
    console.log(objeto[0].id + " {'att-a': 'a-" + objeto[0].a + "', 'att-b': 'b-" + objeto[0].b + "', 'att-c': 'c-" + objeto[0].c + "', 'att-d': 'd-" + objeto[0].d + "', 'att-e': 'e-" + objeto[0].e + "', 'att-f': 'f-" + objeto[0].f + "', 'att-g': 'g-" + objeto[0].g + "', 'att-h': 'h-" + objeto[0].h + "', 'att-i': 'i-" + objeto[0].i + "', 'att-j': 'j-" + objeto[0].j + "}");
    console.log("");
    for(i=0;i<10;i++){//tomar los 10 objetos más similares del array ahora ordenado, y mostrarlos por consola
      todosdatos[i].a = parseInt(todosdatos[i].a) + parseInt(objeto[0].a);
      todosdatos[i].b = parseInt(todosdatos[i].b) + parseInt(objeto[0].b);
      todosdatos[i].c = parseInt(todosdatos[i].c) + parseInt(objeto[0].c);
      todosdatos[i].d = parseInt(todosdatos[i].d) + parseInt(objeto[0].d);
      todosdatos[i].e = parseInt(todosdatos[i].e) + parseInt(objeto[0].e);
      todosdatos[i].f = parseInt(todosdatos[i].f) + parseInt(objeto[0].f);
      todosdatos[i].g = parseInt(todosdatos[i].g) + parseInt(objeto[0].g);
      todosdatos[i].h = parseInt(todosdatos[i].h) + parseInt(objeto[0].h);
      todosdatos[i].i = parseInt(todosdatos[i].i) + parseInt(objeto[0].i);
      todosdatos[i].j = parseInt(todosdatos[i].j) + parseInt(objeto[0].j);
      console.log(todosdatos[i].id + " {'att-a': 'a-" + todosdatos[i].a + "', 'att-b': 'b-" + todosdatos[i].b + "', 'att-c': 'c-" + todosdatos[i].c + "', 'att-d': 'd-" + todosdatos[i].d + "', 'att-e': 'e-" + todosdatos[i].e + "', 'att-f': 'f-" + todosdatos[i].f + "', 'att-g': 'g-" + todosdatos[i].g + "', 'att-h': 'h-" + todosdatos[i].h + "', 'att-i': 'i-" + todosdatos[i].i + "', 'att-j': 'j-" + todosdatos[i].j + "}");
    }
};