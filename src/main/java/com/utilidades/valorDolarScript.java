package utilidades;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class valorDolarScript {
    public static List<String> mostrarDolar() throws IOException, InterruptedException{
        //inicializo a traves de metodo
        Process process = inicializarScript();

            
            
        // Leer la salida del script Node.js
            
        //Se crea un BufferedReader para leer la salida estándar (stdout) del proceso
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String line;
        List<String> outputLines = new ArrayList<>();
        //El bucle while lee cada línea de la salida del proceso y la imprime en la consola 
        while ((line = reader.readLine()) != null) {
            outputLines.add(line);
        }

        // Esperar a que el proceso termine y capturar errores

        //process.waitFor() espera y devuelve el código de salida del proceso.
        int exitCode = process.waitFor();
        if (exitCode != 0) {
            //Si el código de salida no es 0, indica que hubo un error en la ejecución del script Node.js 
            BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            //se crea otro BufferedReader para leer la salida de error estándar (stderr) del proceso.
            List<String> errorLines = new ArrayList<>();
            //Este bucle while lee caida línea de la salida de error y la imprime 
            while ((line = errorReader.readLine()) != null) {
                errorLines.add(line);
            }

            System.err.println("Errors:");
            for (String errorLine : errorLines) {
                System.err.println(errorLine);
            }
                
        }
        return outputLines;
    }

    public static Process inicializarScript() throws IOException, InterruptedException{
        // Construir el comando para ejecutar el script Node.js

        //se crea un array de String que contiene el comando a ejecutar (node index.js)
        String[] command = {"node", "/home/fabricio/Documentos/vscode/Entrenamientos/src/scraping/index.js"};
        
        
        //Runtime.getRuntime().exec(command) para ejecutar el comando
        return Runtime.getRuntime().exec(command);

    }
}
