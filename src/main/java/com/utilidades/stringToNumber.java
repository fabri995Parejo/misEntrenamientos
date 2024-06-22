package utilidades;

public class stringToNumber{
    // Método para extraer el valor numérico de un string con formato de moneda
    public static int extractIntFromCurrencyString(String input) {
        // Eliminar el texto innecesario
        String numberStr = input.replaceAll("[^0-9]", ""); // Eliminar todo excepto dígitos y comas
                               // .replace(",", ".");        // Reemplazar comas por puntos
        
        // Convertir el String a un número
        double numberDouble = Double.parseDouble(numberStr);
        return (int) numberDouble;
    }
}

