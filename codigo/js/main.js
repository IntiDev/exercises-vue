Vue.filter('mayusculas', (value) => value.toUpperCase());

new Vue({//Objeto JSON con propiedades
	el: 'main', //hace referencia a la etiqueta de HTML en la que se utiliza
	data:{
		texto: 'Hola mundo desde Vue2',
		nombre: 'Yesenia
		',
		apellido: 'Sánchez',
		nota: 5,
		peliculas: ['Matrix', 'Interestelar', 'Gravedad', 'Hombres de negro'],
		frutas: [
			{nombre: 'Manzana', temporada:'Invierno', precio: 'Bajo'},
			{nombre: 'Naranja', temporada:'Otoño', precio: 'Bajo'},
			{nombre: 'Fresa', temporada:'Primavera', precio: 'Alto'},
			{nombre: 'Piña', temporada:'Primavera', precio: 'Medio'}
		],
		superfruta: {nombre: 'Mandarina', temporada:'Verano', precio:'Medio'},
		peliculaNueva: null,
		busqueda: null
	},
	methods: {
		crearPelicula(){
			// alert(this.peliculaNueva);
			this.peliculas.unshift(this.peliculaNueva);
			this.peliculaNueva = null;
		},
		borrarPelicula(indice){
			this.peliculas.splice(indice, 1);
		}
	},
	computed: {
		nombreApellido(){
					const date = new Date();
					const year = date.getFullYear();
			return this.nombre + ' ' + this.apellido + ' - Nota: ' + this.nota + ' ' + year;
		},
		peliculasOrdenadas(){
			return this.peliculas.sort();
		},
		buscarFruta(){
			// return this.peliculas.filter((pelicula) => {
			// 	pelicula.includes(this.busqueda);
			// });

			return this.frutas.filter((fruta) => fruta.nombre.includes(this.busqueda));	
		}
	}
});
