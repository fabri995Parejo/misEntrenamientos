--creo esquema que usare a lo largo del proyecto
drop schema if exists entrenamientos cascade;
create schema entrenamientos;

--dominio de los enteros positivos
drop domain if exists entrenamientos.intpositivo cascade;
create domain entrenamientos.intpositivo as int
    check (value > 0)
    not null;

--dominio de genero
drop domain if exists entrenamientos.genero cascade;
create domain entrenamientos.genero as varchar(20)
    check (value in ('Masculino', 'Femenino', 'Prefiero no decirlo'))
    not null;

--dominio de edad
drop domain if exists entrenamientos.edad cascade;
create domain entrenamientos.edad as varchar(12)
    check (value in ('Menos de 20', '20-30', '30-40', '40-50', '50-60', '60+'))
    not null;

--dominio de la cant de años entrenados
drop domain if exists entrenamientos.añosEntrenados cascade;
create domain entrenamientos.añosEntrenados as varchar(20)
    check (value in ('Menos de 1-2 años', '2-5 años', '5+ años'))
    not null;

--dominio de la cant de dias que puede entrenar en la semana
drop domain if exists entrenamientos.cantDias cascade;
create domain entrenamientos.cantDias as varchar(1)
    check (value in ('3', '4', '5', '6'))
    not null;

--dominio de cant de tiempo q puede entrenar una persona
drop domain if exists entrenamientos.cantHoras cascade;
create domain entrenamientos.cantHoras as varchar(20)
    check (value in ('Menos de una hora', 'Una hora o mas'))
    not null;

--dominio de como ha entrenado hasta ahora
drop domain if exists entrenamientos.descEntr cascade;
create domain entrenamientos.descEntr as varchar(40)
    check (value in ('Bodybuilding', 'Powerlifting', '"Powerbuilding"', 'Crossfit', 'Ninguna de las de arriba', 'No se como he entrenado hasta ahora'))
    not null;

--dominio de cual es el objetivo principal
drop domain if exists entrenamientos.objetivoPrincipal cascade;
create domain entrenamientos.objetivoPrincipal as varchar(100)
    check (value in ('Mas que nada quiero construir musculo. Ganar fuerza estaria bien tambien pero no es mi objetivo principal.',
                    'Mas que nada quiero ganar fuerza. Construir musculo estaria bien tambien pero no es mi objetivo principal.',
                    'Quiero construir un equilibrio entre musculo y fuerza',
                    'Mas que nada quiero perder grasa. Pero también necesito construir musculo para crear mi mejor físico.'))
    not null;



drop table if exists entrenamientos.persona cascade;
create table entrenamientos.persona (
    mail varchar(50) not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    nroCelular varchar(50),
    genero entrenamientos.genero,
    edad entrenamientos.edad,
    añosEntrenados entrenamientos.añosEntrenados,
    diasParaEntrenar entrenamientos.cantDias, --dias q puede entrenar en la semana
    tiempoDeEntrenamiento entrenamientos.cantHoras,
    descripcionEntrenamiento entrenamientos.descEntr,
    objetivo entrenamientos.objetivoPrincipal,                        
)
