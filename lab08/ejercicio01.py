import reflex as rx
class EstadoKanban(rx.State):
   def __init__(self):
   super().__init__()
self.mostrar_solo_pendientes = False
    def mostrar_pendientes(self):
self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes
tareas_en_progreso = [
{"titulo": "Tarea 1", "estado": "Pendiente"},
{"titulo": "Tarea 2", "estado": "En Progreso"},
{"titulo": "Tarea 3", "estado": "Pendiente"},
]
tareas_completadas = [
{"titulo": "Tarea 4", "estado": "Completada"},
{"titulo": "Tarea 5", "estado": "Completada"},
]
    def tarjeta_tarea(tarea):
return rx.div(
rx.text(tarea["titulo"]),
rx.text(f"Estado: {tarea['estado']}")
)
    def columna_kanban(nombre, tareas):
if EstadoKanban.mostrar_solo_pendientes:
tareas = [tarea for tarea in tareas if tarea["estado"] == "Pendiente"]
return rx.div(
    rx.heading(nombre),
    rx.div(
    [tarjeta_tarea(tarea) for tarea in tareas],
    style={"border": "1px solid black", "padding": "10px", "margin": "10px"}
  )
)
   def index():
   return rx.div(
     rx.button(
"Mostrar Solo Pendientes",
on_click=EstadoKanban.mostrar_pendientes
),
rx.div(
   columna_kanban("En Progreso", tareas_en_progreso),
    columna_kanban("Completadas", tareas_completadas),
)
)
app = rx.App()
app.add_page(index)
app.compile()