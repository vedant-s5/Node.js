// How DNS acutally works //

/*
--->> Domain Name Entry: User types a domain (e.g., www.example.com) into the browser.

--->> DNS Query: The browser sends a DNS query to resolve the domain into an IP address.

--->> DNS Server: Provides the correct IP address for the domain.

--->> Browser Connects: The browser uses the IP to connect to the web server and loads the website.
*/


// How Web Works? //

/*
--->> Client Request Initiation: The client (browser) initiates a network call by entering a URL.

--->> DNS Resolution: The browser contacts a DNS server to get the IP address of the domain.

--->> TCP Connection: The browser establishes a TCP connection with the server's IP address.

--->> HTTP Request: The browser sends an HTTP request to the server.

--->> Server Processing: The server processes the request and prepares a response.

--->> HTTP Response: The server sends an HTTP response back to the client.

--->> Network Transmission: The response travels back to the client over the network.

--->> Client Receives Response: The browser receives and interprets the response.

--->> Rendering: The browser renders the content of the response and displays it to the user.
*/

// What are Protocols? //
 
/*
--->> HTTP (HyperText Transfer Protocol):
Facilitates communication between a web browser and a server to transfer web pages.

Sends data in plain text (no encryption).

Used for basic website browsing without security.

--->> HTTPS (HyperText Transfer Protocol Secure):
Secure version of HTTP; encrypts data for secure communication.

Uses SSL/TLS to encrypt data.

Used in online banking, e-commerce, etc.

--->> TCP (Transmission Control Protocol):
Ensures reliable, ordered, and error-checked delivery of data over the internet.

Establishes a connection before data is transferred.
*/


// Node Core Modules //

/*
--->> Built-in: core modules are included with 
Node.Js installation.

--->> No installation Needed: Directly available for use without npm install.

--->> Performance: Highly optimized for performance.


--->> fs (File System): Handles file operations like reading and writing files.

--->> http: Creates HTTP servers and makes HTTP requests.

--->> https: Launch a SSL Server.

--->> path: Provides utilities for handling and transforming file paths.

--->> os: Provides operating system-related utility methods and properties.

--->> events: Handles events and event-driven programming.

--->> crypto: Provides cryptographic functionalities like hashing and encryption.

--->> url: Parses and formats URL strings.
*/


// Require Keyword //

/*

--->> Purpose: Imports modules in Node.js.

--->> Caching: Modules are cached after the first require call.

--->> .js is added automatically and is not needed at the end of module name.

--->> Path Resolution: Node.js searches for modules in core, node_modules, and file paths.
*/
