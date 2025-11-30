import "./Header.css"

export default function Actividades(){
    return(
        <>
        <h1 className="titulo">Actividades</h1>
        <div><p>REPOSITORIO: <a href="https://github.com/Disoalmo/Simulador.git" target="_blank">https://github.com/Disoalmo/Simulador.git</a></p></div>
        <div id="actividades">
        <div id="unidad1" className="unidades">
            <h3>Unidad 1</h3>
            <p>Actividad preliminar: Presentación</p>
            <p>Actividad 1: Investigacion de metodología Scrum</p>
            <p>Actividad 2: Creación del Producto Backlog <br /> PDF: <a href="/Backlog1-simulador.pdf" target="_blank">Backlog 1</a></p>
            <p>Actividad integradora: Desarrolla y aplica el Scrum <br /> PDF: <a href="Act-integradora-Unidad1-Diana-Alvarez.pdf" target="_blank">Integradora</a></p>
        </div>
        
        <div id="unidad2" className="unidades">
            <h3>Unidad 2</h3>
            <p>Actividad 1: serie de ejercicios relacionados con la posible aplicación del caso <br /> PDF: <a href="U1-Act1-Opción1-Diana-Alvarez.pdf" target="_blank">Backlog Opción 1</a></p>
            <p>Actividad 2: Planificación y Ejecución del Sprint <br /> Excel: <a href="Backlog-Opción.xlsx" target="_blank">Sprint y backlog</a></p>
            <p>Actividad Integradora 2: calendarización y los backlog de mi proyecto  <br /> Excel: <a href="Unidad2-Integradora2-Diana-Alvarez.xlsx" target="_blank">Calendarización de mi proyecto</a></p>
        </div>
        <div id="unidad3" className="unidades">
            <h3>Unidad 3</h3>
            <p>Actividad preliminar: calendario de reuniones <br /> PDF: <a href="Planificador de programación semanal1.pdf" target="_blank">Calendario</a></p>
            <p>Actividad 1: Avances de los Sprint <br /> PDF: <a href="Actividad 1. Primera fase de desarrollo - Diana Alvarez.pdf" target="_blank">Avances</a></p>
            <p>Actividad 2: Segundo progreso de los Sprint <br /> Excel: <a href="Ajustes-Sprint#2-Diana-Alvarez.xlsx" target="_blank">Avances 2da fase</a></p>
            <p>Actividad 3: tercera fase de progreso  <br /> Excel:  <a href="Ajustes-3ra fase-Diana-Alvarez.xlsx" target="_blank">Ajustes 3ra fase</a></p>
            <p>Actividad Integradora:  <br /> PDF: <a href="Integradora-Reporte Final-DianaAlvarez.pdf" target="_blank">Reporte final</a></p>
            </div>
        <div id="unidad4" className="unidades">
            <h3>Unidad 4</h3>
            <p>Actividad 1: reunión para la revisión del proyecto </p>
            <p>Actividad 2: Reunión para revisión de modificaciones</p>
        </div>
        
        </div>
        </>
    )
}