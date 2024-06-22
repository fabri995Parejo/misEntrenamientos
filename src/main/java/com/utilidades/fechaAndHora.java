package utilidades;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class fechaAndHora {
    public static String devolverFecha(){
        // Obtener la fecha y hora actual
         LocalDateTime fechaHoraActual = LocalDateTime.now();

        // Definir el formato para la fecha y hora
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        // Formatear la fecha y hora actual según el formato definido
        return fechaHoraActual.format(formato);
    }
}
