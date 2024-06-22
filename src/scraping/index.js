//const puppeteer = require('puppeteer');
import puppeteer from "puppeteer";
import { timeout } from "puppeteer";
import fs from 'fs'; // Importa el módulo fs
import { fileURLToPath } from 'url';
import path from 'path';
//utilizo siempre await por lo tanto requiero async (en nuevas versiones de node no hace falta)

async function insertToPage(){

    const browser = await puppeteer.launch({
        headless: false, //si esta en 'new' no puedo ver que hace, si esta en false veo que hace
        slowMo: 600
    }) //inicializo puppeteer, esto crea un objeto browser, al ser una funcion async le pongo await
    const page = await browser.newPage() //abre un pagina en chromium

    await page.goto('https://example.com/') //voy a esta pagina

    await browser.close() //cierro chromium
}

//insertToPage()

async function captureScreenShot(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 600
    })
    const page = await browser.newPage()

    await page.goto('https://example.com/')
    //hago una captura de pantalla y la guardo con el nombre: example.png
    await page.screenshot({path: 'example.png'})

    await browser.close()
}

//captureScreenShot()

async function navegarToMoreInfo(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 600 //cada operacion la relentiza un poco, como hago para ver la pagina final?
    })
    const page = await browser.newPage()

    await page.goto('https://example.com/')
    //hago un click en etiqueta 'a' para navegar dentro de la pagina
    await page.click('a[href="https://www.iana.org/domains/example"]')
    await new Promise(r => setTimeout(r, 5000)) //espera 5 segundos despues de la anterior accion
    await browser.close()
}

//navegarToMoreInfo()
async function MostrarElementosdeWeb(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 600 //cada operacion la relentiza un poco, como hago para ver la pagina final?
    })
    const page = await browser.newPage()

    await page.goto('https://example.com/')
    //guardo informacion de los textos en las etiquetas "a", "h1", "p"

    const result = await page.evaluate(() => {
        //con evaluate puedo "hacer" codigo dentro de la pagina
        const titulo =  document.querySelector('h1').innerText
        const texto = document.querySelector('p').innerText
        const info = document.querySelector('a').innerText
        // dentro de la pagina guardo titulo, texto, info, ahora hago un return para tener esos valores en mi codigo
        return{
            titulo: titulo,
            texto: texto,
            info: info
        }//con esto result es un objeto
        /*puedo poner en java de esta manera para abreviar ya que tienen el mismo nombre
        return{
            titulo,
            texto,
            info
        }*/
    })
    
    console.log(result)
    
    await browser.close()
}

//MostrarElementosdeWeb()

async function MostrarElementosdeWebComplicado(){

    //muestra varios elementos (que tienen etiquetas iguales)
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 600 //cada operacion la relentiza un poco, como hago para ver la pagina final?
    })
    const page = await browser.newPage()

    await page.goto('https://quotes.toscrape.com/')
    /*guardo informacion de los textos en la etiqueta "div", hay muchas etiquetas div,
    por lo tanto va a ser un arreglo de "div"*/

    const result = await page.evaluate(() => {
        //con evaluate puedo "hacer" codigo dentro de la pagina
        const titulo = document.querySelector('a').innerText;
        const quotes = document.querySelectorAll(".quote"); //tiene 10 .quotes, asi q hago arreglo
        const data = [...quotes].map((quote) => {
            const texto = quote.querySelector(".text").innerText;
            const author = quote.querySelector(".author").innerText;
            const tag = [...quote.querySelectorAll(".tag")].map((tag) => tag.innerText);

            return{
                texto: texto,
                author: author,
                tag: tag
            }
        });
        return data
        
        //con esto result es un objeto
        /*puedo poner en java de esta manera para abreviar ya que tienen el mismo nombre
        return{
            titulo,
            texto,
            info
        }*/
    })
    
    console.log(result)
    
    await browser.close()
}

//MostrarElementosdeWebComplicado()

async function MostrarDolar(){

    //muestra varios elementos (que tienen etiquetas iguales)
    const browser = await puppeteer.launch(/*{
        headless: false,
        slowMo: 600 //cada operacion la relentiza un poco, como hago para ver la pagina final?
    }*/)
    const page = await browser.newPage()

    await page.goto('https://www.infodolar.com/')
    /*guardo informacion del valor del dolar en la etiqueta ".colCompraVenta"
    */

    const result = await page.evaluate(() => {
        //con evaluate puedo "hacer" codigo dentro de la pagina
        const compraVenta = document.querySelectorAll("#DolarPromedio .colCompraVenta"); //tiene 10 .quotes, asi q hago arreglo
        /*const data = [...compraVenta].map((quote) => {
            const columnDolarBlueVenta = compraVenta[1];
            const columnDolarBlueCompra = compraVenta[0];
            return{
                columnDolarBlueCompra,
                columnDolarBlueVenta
            }
        });
        return data*/

        //Hay 27 columnas, las primeras dos son del dolar blue
        const columnDolarBlueVenta = compraVenta[1];
        const columnDolarBlueCompra = compraVenta[0];

        const dolarVentaConAumento = columnDolarBlueVenta.innerText; //"$ 1.280,00\n $ 35,00"
        const dolarCompraConAumento = columnDolarBlueCompra.innerText; //"$ 1.260,00\n $ 35,00"
        //cada uno nos da 2 valores, uno del aumento y otro de la compra o venta
        //separo valor del dolar con el aumento o diferencia
        //los seṕaro
        const valoresDolarVenta = dolarVentaConAumento.split("\n");
        const dolarVenta = valoresDolarVenta[0].trim();
        const aumentoVenta = valoresDolarVenta[1].trim();

        const valoresDolarCompra = dolarCompraConAumento.split("\n");
        const dolarCompra = valoresDolarCompra[0].trim();
        const aumentoCompra = valoresDolarCompra[1].trim();
        
        

        return{
            dolarCompra,
            aumentoCompra,
            dolarVenta,
            aumentoVenta
        }
        //con esto result es un objeto
        
    })
    // Obtener la ruta del archivo actual
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Tu código aquí
    const screenshotPath = path.resolve(__dirname, '../main/resources/static/DolarHoyDia.png');

    
    await page.screenshot({ path: screenshotPath });
    
    console.log(result)
    
    await browser.close()
}

MostrarDolar();

global.MostrarDolar = MostrarDolar;

