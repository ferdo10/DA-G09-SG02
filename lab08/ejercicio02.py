import reflex as rx


tareas_en_progreso = [
    {"titulo": "Tarea 1", "estado": "Pendiente"},
    {"titulo": "Tarea 2", "estado": "En Progreso"},
    {"titulo": "Tarea 3", "estado": "Pendiente"},
]

tareas_completadas = [
    {"titulo": "Tarea 4", "estado": "Completada"},
    {"titulo": "Tarea 5", "estado": "Completada"},
]


todas_las_tareas = tareas_en_progreso + tareas_completadas


def contar_tareas_por_estado(tareas):
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        if estado in contadores:
            contadores[estado] += 1
        else:
            contadores[estado] = 1
    return contadores


def tarjeta_tarea(tarea):
    return rx.div(
        rx.text(tarea["titulo"]),
        rx.text(f"Estado: {tarea['estado']}")
    )


def columna_kanban(nombre, tareas):
    return rx.div(
        rx.heading(nombre),
        rx.div(
            [tarjeta_tarea(tarea) for tarea in tareas],
            style={"border": "1px solid black", "padding": "10px", "margin": "10px"}
        )
    )

def index():
    contadores = contar_tareas_por_estado(todas_las_tareas)

    return rx.div(
        columna_kanban("En Progreso", tareas_en_progreso),
        columna_kanban("Completadas", tareas_completadas),
        
        rx.div(f"Pendientes: {contadores.get('Pendiente', 0)}"),
        rx.div(f"En Progreso: {contadores.get('En Progreso', 0)}"),
        rx.div(f"Completadas: {contadores.get('Completada', 0)}"),
        style={"margin-top": "20px"}
    )

app = rx.App()

app.add_page(index)

app.compile()


