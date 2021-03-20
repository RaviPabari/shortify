<h1 align="center">Url Shortener Microservice built with NodeJs</h1>
<h3>Live working <a href="http://shme.herokuapp.com/"> http://shme.herokuapp.com/ </a>
  <pre>
         ███████╗██╗  ██╗ ██████╗ ██████╗ ████████╗██╗███████╗██╗   ██╗
         ██╔════╝██║  ██║██╔═══██╗██╔══██╗╚══██╔══╝██║██╔════╝╚██╗ ██╔╝
         ███████╗███████║██║   ██║██████╔╝   ██║   ██║█████╗   ╚████╔╝ 
         ╚════██║██╔══██║██║   ██║██╔══██╗   ██║   ██║██╔══╝    ╚██╔╝  
         ███████║██║  ██║╚██████╔╝██║  ██║   ██║   ██║██║        ██║   
         ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝╚═╝        ╚═╝     </pre>
<hr>


### Setting Up Locally

```
$ git clone https://github.com/RaviPabari/shortify
$ cd shortify/
```
### Installing Dependencies
```
npm install
```
### Now there are 2 environment variables to set before running
#### NODE_ENV 
This will enable morgan if set to 'test'
```
export NODE_ENV=test
```
To connect to your own mongodb cloud paste your own key here
#### mongo_uri
```
export mongo_uri="mongodb+srv://username:<password>@cluster0.ynxhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
```
### Run the server
```
npm test
```   
