Q1. What is Emmet?  
It is a development tool that provides shortcuts to write HTML and CSS codes.

Q2. What is difference between library and framework? 

The main difference between library and framework lies in the level of control and structure they provide. 
library offers a specific functionality that devs can use as needed without enforcing any specific structure.
Framework on the other hand provice more comprehensive set of tools, convesions and guidelines dictating the overall structure
and flow of the application.


Q3. What is CDN? why we user it?

CDN stands for Content Delivery  Network. 
It is distributed network of servers in multiple data centers accross various geo locations.

CDN are designed to solve the problem of latency(delay) experienced when accessing a content over a long distance. when the end user request a content from website it travels to the origin server where that content is hosted, if the user is geographically distance from the origin server it causes delay in response.

CDN worked by storing the cached copies of the website content on multiple servers spread accross different locations. when user request the content, CDN autometicaly determines the nearest server to user and delivers the content from that server instead of origin server. resulting the faster reponse and improved performence.

Q4. Why React is known is react?

React is called react because of its core feature which is its ability to react or update its components based on changes in data or state.

Q5. What is crossorigin in `<script> `tag?

crossorigin in `<script>` tag specifies how the browser should handles the request for javascript files that are loaded from difference doamin or origin.

when we include javascript file in a web page using script tag the browser makes the request to fetch that file from specified source and due to security restrictions known as "same-origin-policy" modern browsers imposes restrictions on cross origin resource request.
By adding the crossorigin without any attribute the browser treats the script from the same origin.

some attributes are 
crossorigin="anonymous"
crossorigin="use-credentials
crossorigin   - without attribute

Q6. What is defference between React and ReactDOM?

React is used for creating the component and managing the application's logic while ReactDOM is used for rendering those components into DOM, ensuring the UI reflects the current state of the application.

Q7. What is diffrence between react.development.js and react.production.js files via CDN?

The react.development.js file intended to use in development environment and consists of additional feature and debugging tools that can be helpfull during the building and testing the application.

And react.production.js file inteded to use oin production environment. To optimise and minimiz the size of the application it doesen't contains the additional features.

Q8. What is differnce between async and defer ?

async and defer are attributes used in script tag tp specify loading behavior of the page.

async : In the async HTML parsing goes on and script are fetched in async manner, as soon as script are available it is executed after only HTML parsing contineus.
It does not gauranty the order of the execution of the scripts.

defer: In defer, HTML parsing goes on and script are fetched parallely and its only executed when HTML parsing is ccompleted.
It guaranties the execution of the scripts.

when to use what: when we have multiple internal scripts which are dependent on each other when we use async it may break the code.for this situation defer will be suitable. And when we have to load some external scripts which is independent to our code in that case it make sense to use async.

