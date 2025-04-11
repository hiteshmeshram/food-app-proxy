

async function main(){
     console.log('insidew main')

    const targetUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
   try {
    console.log("before fetch")
    fetch(targetUrl , {
     headers: {
          "Access-Control-Allow-Origin" : "http://localhost:3000",
"Access-Control-Allow-Credentials" : true,


          authority:"www.swiggy.com",
          method: "GET",
          path : "/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
          scheme:"https",
          accept:"*/*",
          "accept-encoding":"gzip, deflate, br, zstd",
          "accept-language":"en-US,en;q=0.9",
          "cache-control":"no-cache",
          origin:"https://food-app-c2176.web.app",
          pragma:"no-cache",
          priority:"u=1, i",
          referer:"https://food-app-c2176.web.app/",

          "sec-ch-ua-mobile":"?1",
          "sec-ch-ua-platform":"Android",
          "sec-fetch-dest":"empty",
          "sec-fetch-mode":"cors",
          "sec-fetch-site":"cross-site",
          "user-agent":"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36"
                    
               }
    } )
    .then(response => response.json())
        .then(data=> console.log(data))

        console.log("after fetch")

   } catch(e) {
        console.log(e)
        console.log("inside catch")
   }
    
}

main()

  
authority:"www.swiggy.com",
method:"GET",
path:"/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
scheme:"https",
accept:"*/*",
"accept-encoding":"gzip, deflate, br, zstd",
"accept-language":"en-US,en;q=0.9",
"cache-control":"no-cache",
origin:"http://localhost:3000",
pragma:"no-cache",
priority:"u=1, i",
referer:"http://localhost:3000/",

"sec-ch-ua-mobile":"?1",
"sec-ch-ua-platform":"Android",
"sec-fetch-dest":"empty",
"sec-fetch-mode":"cors",
"sec-fetch-site":"cross-site",
"user-agent":"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36"