// Introduction to NodeJS //

// what is nodeJS?
/* 
1. JavaScript Runtime: Node.js is an open-source, cross-platform runtime environment for executing JavaScript code outside of a browser.

2. NodeJs is a JavaScript in a different environment means Running JS on the server or any computer.

3. Built on Chrome’s V8 Engine: It runs on the V8 engine, which compiles JavaScript directly to native machine code, enhancing performance.

4. V8 is written in C++ for speed.

5. V8 + Backend Features = NodeJs

(chrome ke v8 engine se nikal ke backend features daal ke nodeJS ko banaya hai)

6. Design: Features an event-driven, non-blocking I/O model for efficiency.

7. Full-Stack JavaScript: Allows using JavaScript on both server and client sides(mtlb ham UI bi 
isi main bana skte hai).

8. Scalability: Ideal for scalable network applications due to its architecture.

9. Versatility: Suitable for web, real-time chat, and REST API servers.

(NodeJS ane ke baad JS frontend and backend, dono banane ke kaam ata hai )
*/

// NodeJS Features

/*
    Js ek single threaded lang hai, means ki vo pehle apan kaam krta 
    rhega aur jab vo particular kaam finish ho jayega uske baad vo khali baith
    jayega aur loop main ghumta rhega, which is called event loop, agar ham use 
    koi aur kaam de, jaise input/output ka to vo apne workers assign krta 
    hai ki jao ye kaam krke aao phir wapas event loop main ghumne lagta hai,
    kaam jaise, google.com kholo, ya phir is database ko call kro, ya agar kuch chiz
    sceen pe chow krni hai user ki etc etc,
    but agar logic implement krna ho to vo khud kaam krta hai
    to main thread ka kaam kam ho jata hai islia vo non-blocking ho jata hai.

1. Non-blocking I/O: Designed to perform non-blocking operations by default, 
making it suitable for I/O-heavy operations.

2. Networking Support: Supports TCP/UDP sockets, which are crucial for building 
lower-level network applications that browsers can’t handle.

TCP/UDP ka mltb hai ki kai baar hame continuours req and respose 
chaiye hota hai network se ya database se, islia ham ise use krte hai
these are called web sockets. 
example : whatsapp pe kisi se baat krre hai toh instant messge sed krna reciece krna
typing send krna online ya offline dikhana etc

3. File System Access: Provides APIs to read and write files directly,
 which is not possible in browser environments for security reasons.

4. Server-Side Capabilities: Node.js enables JavaScript to run on the
 server, handling HTTP requests, file operations, and other server-side functionalities.

5. Modules: Organize code into reusable modules using require().

6. Window Object: The global window object, which is part of web browsers, is absent in Node.js.

7. DOM Manipulation: Node.js does not have a built-in Document Object Model (DOM), as it is not 
intended to interact with a webpage's content.

8. BOM (Browser Object Model): No direct interaction with things like navigator or screen which 
are part of BOM in browsers.

9. Web-specific APIs: APIs like localStorage,sessionStorage, and 
browser-based fetch are not available in Node.js, kyuki ba ham js ko 
beowser main use nhi krte hai, aur ye features browser main hi present hote hai.
*/

// JavaScript on Client 

/*
html,css,javascript files ---->downloaded ny chrome from servers and-----> 
uske baad rendering hoti hai files ke hisab se chrome main phir uske baad
hame hamara webpage mil jata hai..

1. Displays Web Page: Turns HTML code into what you see on screen.

2. User Clicks: Helps you interact with the web page.

3. Updates Content: Allows changes to the page using JavaScript.

4. Loads Files: Gets HTML, images, etc., from the server.
*/

// JavaScript on Server

/* 
1.Database Management: Stores, retrieves, and manages 
data efficiently through operations like CRUD (Create, Read, Update, Delete).

2. Authentication: Verifies user identities to control 
access to the system, ensuring that users are who they claim to be.

3. Authorization: Determines what authenticated users are
 allowed to do by managing permissions and access controls.

4. Input Validation: Checks incoming data for correctness,
 completeness, and security to prevent malicious data entry and errors.

5. Session Management: Tracks user activity across various 
requests to maintain state and manage user-specific settings.


6. API(application programming interface) Management: Provides 
and handles interfaces for applications to interact, ensuring 
smooth data exchange and integration.

7. Error Handling: Manages and responds to errors effectively 
to maintain system stability and provide useful error messages.

8. Security Measures: Implements protocols to protect data from 
unauthorized access and attacks, such as SQL injection and cross-site scripting (XSS).

9. Data Encryption: Secures sensitive information by encrypting 
data stored in databases and during transmission.

10. Logging and Monitoring: Keeps records of system activity to 
 diagnose issues and monitor system health and security.

*/

// Client Code vs Server Code 

/* 
User/client can't access server code directly, cuz user ko to sundar sundar 
frontend dikhta hai but piche bahut kaam ho rkha hai, to agar myntra main kisi user 
ko koi info chaiye to frontend se api req jayegi server pe phir use acces milega vo bi 
frontend pe

1. Client must raise requests for particular APIs to access 
certain features or data.

2. Environment Access: Server-side JavaScript accesses server 
features like file systems and databases.

3. Security: Server-side code can handle sensitive operations 
securely, while client-side code is exposed and must manage security risks.

4. Performance: Heavy computations are better performed on the 
server to avoid slowing down the client.

5. Resource Utilization: Servers generally offer more powerful 
processing capabilities than client devices.

6. Data Handling: Server-side can directly manage large data sets 
and database interactions, unlike client-side JavaScript.

7. Asynchronous Operations: Server-side JavaScript is optimized 
for non-blocking I/O to efficiently manage multiple requests.

8. Session Management: Servers handle sessions and user states
 more comprehensively.

9. Scalability: Server-side code is designed to scale and handle 
requests from multiple clients simultaneously.

*/

// Other uses of NodeJS

/*
1. Local Utility Scripts: Automates tasks and processes files locally, 
like using shell scripts but with JavaScript.

2. Internet of Things (IoT): Develops server-side applications for IoT 
devices, managing communications and data processing.

3. Scripting for Automation: Automates repetitive tasks in software
 development processes, such as testing and deployment.

 4. Real-Time Applications: Efficiently manages real-time data applications, 
such as chat apps and live updates, using WebSockets.

5. Desktop Application : creates cross-platform desktop application using
framework like electron(discord,skype,figma,guthub desktop).
*/

// Server architecture with NodeJS

/* 
1. Create server and listen to incoming requests: It sets up a server and 
waits for requests from clients (like a web browser).

2. Business logic: It handles the core tasks, such as validating data, 
connecting to databases, and processing information.

3. Return response: It sends a response back to the client, which can 
be in various formats like HTML, JSON, CSS, or JavaScript.

*/

