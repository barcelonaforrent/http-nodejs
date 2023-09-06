import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World!');
  fetch("https://www.barcelonaforrent.com/resumen", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "es-ES,es;q=0.9,ca;q=0.8",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "PHPSESSID=34f88cdc81e729e0535f24894fa4d1d4; __stripe_mid=0f78b466-06b7-4442-a6bc-99d4e550209d9a7fd8; gdprcookienotice={%22date%22:%222023-09-05T09:29:14.784Z%22%2C%22necessary%22:true%2C%22performance%22:true%2C%22analytics%22:true%2C%22marketing%22:true}; __stripe_sid=b1b25d19-b069-4488-9536-04f50340ff4849814b",
    "Referer": "https://www.barcelonaforrent.com/reserve-ya",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "idpropiedad=MTk%3D&llegada=MTAtMDktMjAyMyA%3D&salida=MjAtMDktMjAyMw%3D%3D&adultos=1&ninos=0&bebes=0&price=MTk2NA%3D%3D&discount=0&fees=150&idusuario=&prepago=50&extratarifa=0&cantidadAparts=1&idTarifa=156&idpolitica=1&textopolitica=Pol%C3%ADtica+para+estancias+de+m%C3%A1s+de+21+noches+%3A+Solo+es+posible+el+reembolso+completo+si+faltan+al+menos+60+d%C3%ADas+para+la+fecha+de+llegada.%0D%0ASe+reembolsar%C3%A1+el+50%25+cuando+la+cancelaci%C3%B3n+tenga+lugar+45+d%C3%ADas+antes+de+la+llegada+como+m%C3%ADnimo.+Las+cancelaciones+que+se+realicen+durante+los+30+d%C3%ADas+previos+a+la+llegada+no+son+reembolsables.&preciosDiarios=YToxMDp7aTowO2E6Mjp7czozOiJkaWEiO3M6MTA6IjIwMjMtMDktMTAiO3M6NjoicHJlY2lvIjtzOjY6IjE3NC4wMCI7fWk6MTthOjI6e3M6MzoiZGlhIjtzOjEwOiIyMDIzLTA5LTExIjtzOjY6InByZWNpbyI7czo2OiIxNzAuMDAiO31pOjI7YToyOntzOjM6ImRpYSI7czoxMDoiMjAyMy0wOS0xMiI7czo2OiJwcmVjaW8iO3M6NjoiMTc0LjAwIjt9aTozO2E6Mjp7czozOiJkaWEiO3M6MTA6IjIwMjMtMDktMTMiO3M6NjoicHJlY2lvIjtzOjY6IjE4NC4wMCI7fWk6NDthOjI6e3M6MzoiZGlhIjtzOjEwOiIyMDIzLTA5LTE0IjtzOjY6InByZWNpbyI7czo2OiIxOTAuMDAiO31pOjU7YToyOntzOjM6ImRpYSI7czoxMDoiMjAyMy0wOS0xNSI7czo2OiJwcmVjaW8iO3M6NjoiMjMyLjAwIjt9aTo2O2E6Mjp7czozOiJkaWEiO3M6MTA6IjIwMjMtMDktMTYiO3M6NjoicHJlY2lvIjtzOjY6IjIzOC4wMCI7fWk6NzthOjI6e3M6MzoiZGlhIjtzOjEwOiIyMDIzLTA5LTE3IjtzOjY6InByZWNpbyI7czo2OiIyMDAuMDAiO31pOjg7YToyOntzOjM6ImRpYSI7czoxMDoiMjAyMy0wOS0xOCI7czo2OiJwcmVjaW8iO3M6NjoiMTk5LjAwIjt9aTo5O2E6Mjp7czozOiJkaWEiO3M6MTA6IjIwMjMtMDktMTkiO3M6NjoicHJlY2lvIjtzOjY6IjIwMy4wMCI7fX0%3D&extra5=1&baseextras=150&baseextrastipo2=0&codigodescuento=&codigodescuentoprecio=&codigodescuentoporcentaje=&firstname=Hugo&lastname=Lloris&email=hugolloris%40yopmail.com&phone=60009909&documentousuario=&street=&postalcode=&city=&country=&nationality=&payments=paymentsCreditCard1&aceptacondiciones=on",
  "method": "POST"
});

  res.end();
}).listen(process.env.PORT);
