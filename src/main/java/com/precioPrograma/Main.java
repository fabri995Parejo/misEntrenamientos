package precioPrograma;

import utilidades.*;
//Estas importaciones son necesarias para leer la entrada y salida del proceso que se va a ejecutar.

import java.util.List;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        
        try {
            /*
            ejecuto el script Node.js 
            muestro por pantalla el valor del dolar compra, venta, y el aumento de estos 2
            pongo estos valores en "valoresDolar"
            */
            List<String> valoresDolar = utilidades.valorDolarScript.mostrarDolar();
            

            //pongo estos valores en variables para poderlos manipular mejor
            String dolarCompraStr = valoresDolar.get(1);
            String aumentoCompraStr = valoresDolar.get(2);
            String dolarVentaStr = valoresDolar.get(3);
            String aumentoVentaStr = valoresDolar.get(4);


            // extraigo el valor numérico de los dolares del string
            int dolarCompra = stringToNumber.extractIntFromCurrencyString(dolarCompraStr);
            int aumentoCompra = stringToNumber.extractIntFromCurrencyString(aumentoCompraStr);
            int dolarVenta = stringToNumber.extractIntFromCurrencyString(dolarVentaStr);
            int aumentoVenta = stringToNumber.extractIntFromCurrencyString(aumentoVentaStr);


            //divido por 100 porque no se como ponerlo sino
            dolarCompra = dolarCompra/100;
            aumentoCompra = aumentoCompra/100;
            dolarVenta = dolarVenta/100;
            aumentoVenta = aumentoVenta/100;
        

        
            
            // Obtengo fecha y hora de metodo creado
            String fechaHoraFormateada = fechaAndHora.devolverFecha();

        



            // Imprimir los resultados
            System.out.println("Los valores del dolar en este dia: " + fechaHoraFormateada);
            System.out.println("Dolar Compra: " + dolarCompra);
            System.out.println("Aumento Compra: " + aumentoCompra);
            System.out.println("Dolar Venta: " + dolarVenta);
            System.out.println("Aumento Venta: " + aumentoVenta);
        
        
            Scanner scanner = new Scanner(System.in); //scanner para q el usuario interactue


            int costoProgDolar; 
            int costoProg;
            String opcion = "continuar";
            

            while(opcion.equals("continuar")){
                System.out.println("Que quiere hacer?");
                System.out.println("1- Precio del programa en pesos\n");
                System.out.println("2-");
                System.out.println("3-");
                
                if(opcion.equals("1")){
                    System.out.println("Ingrese el costo del programa en dolares");
                    costoProgDolar = scanner.nextInt();

                    // Consumir la línea restante
                    scanner.nextLine();
            
                    costoProg = costoProgDolar * dolarVenta;
                    System.out.println("El programa en pesos esta: " + costoProg);
                    System.out.println("Quiere ver el costo de otro programa? Escriba una de las siguientes opciones:");
                    System.out.println("- continuar\n- salir");
            
                    opcion = scanner.nextLine().toLowerCase();
                }
            }

        scanner.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
        
        
    }


}
