# ng2-C3I COMMAND and CONTROL

### Mark Addinall - 2016
### Brisbane Australia
-----

## Synopsis

This is an experimental system comprising 
- Asset management, 
- reporting, 
- tracking, 
- machine learning and 
- statistical process control over a distributed network.

![alt text](c3i.png "Sample mapping page")

I am writing this system using slightly older technology, but decided to
write this version concurrently using Angular2 (Beta) and Bootstrap 4.

This will allow me to appraise the readiness of these development tools,
and to consider the architectures for up-coming builds.


This is from Intelligent Aerospace, July 2016.

> ORBCOMM Inc. (Nasdaq:ORBC) is a global provider of Machine-to-Machine (M2M) communication solutions 
> and a commercial satellite network dedicated to M2M. ORBCOMM’s unique combination of global satellite, 
> cellular and dual-mode network connectivity, hardware, web reporting applications, and software is the 
> M2M industry’s most complete service offering. Our solutions are designed to remotely track, monitor, and 
> control fixed and mobile assets in core vertical markets including transportation & distribution, 
> heavy equipment, industrial fixed assets, oil & gas, maritime, mining and government. In addition, 
> ORBCOMM provides Automatic Identification System (AIS) data services for vessel tracking to improve 
> maritime safety to government and commercial customers worldwide.


> With nearly 20 years of innovation and expertise in M2M, ORBCOMM has more than 1.6 million 
> subscribers with a diverse customer base including premier OEMs such as Caterpillar Inc., Doosan 
> Infracore America, Hitachi Construction Machinery Co., Ltd., John Deere, Komatsu Ltd., and Volvo 
> Construction Equipment, as well as end-to-end solutions customers such as C&S Wholesale, 
> Canadian National Railways, CR England, Hub Group, KLLM Transport Services, Marten Transport, 
> Swift Transportation, Target, Tropicana, Tyson Foods, Walmart and Werner Enterprises.

Not a bad space to be in.

> Genscape is a global provider of real-time data and intelligence for commodity and energy markets, 
> driven to improve market transparency and efficiency. With thousands of patented monitors strategically 
> deployed worldwide, Genscape is unique in its ability to collect and report proprietary market 
> fundamentals in real-time or near real-time. Genscape delivers innovative solutions across a number of 
> asset classes including: Oil, Power, Natural Gas and LNG, Agriculture, Petrochemical and NGLs, 
> Maritime, and Renewables. Genscape clients often gain important insights, improve risk management, 
> or increase operational efficiency.

This is my play on using the latest technologies to provide a flexible, robust and pleasing
UI(X), APIs and RESTFul transaction servers.

I haven't decided on a data store as yet.  I may spin up Mongo.

Thinking ahead to 2016 systems (and beyond. 

- Angular2
- Bootstrap4
- package.json lists packages the QuickStart app depends on and defines some useful scripts. See Npm Package Configuration for details.
- tsconfig.json is the TypeScript compiler configuration file. See TypeScript Configuration for details.
- typings.json identifies TypeScript definition files. See TypeScript Configuration for details.
- systemjs.config.js, the SystemJS configuration file. 



## PHP Server

I will continue to use PHP as our server language.  PHP is robust and extensible, and with good engineering skills, it can be lightweight and fast.  I will change my historic model so PHP has nothing to do with the construction of the UI.  This is not the role of PHP in a modern application.  I this newer code set the PHP will provide a SERVER role to ACCEPT API requests and to PROVIDE data as a SERVICE from a timely and robust database conversation.  This server will provide the ONE point of API interaction for AJaJ (AJAX) services.  We will provide JSON rather than XML in this version of the application.


## PHP AJaJ API

This in essence is the contract (or range of requests and services) to be implemented between the abovementioned server, and the requester, the Javascript API.



## Javascript AJaJ API

Whilst providing the contract between the application and the PHP/Database server, this function will provide the application with
a SINGLE point API service for ALL AJaJ requests. We will implement this library in Javascript using some jQuery extensions.
The library will provide an encapsulated C3I namespace, and will present the library as a partially
exported module.

The Module Pattern is what is called a “design pattern”, and it’s extremely useful 
or a number of reasons. The attraction of the Module Pattern (and it’s variant, 
the Revealing Module Pattern, the one we use) are that it makes scoping simple, 
provides a clean way to implement a namespace, and doesn’t overcomplicate JavaScript design.

It also keeps things very simple and easy to read and use, uses Objects in a very 
nice way, and doesn’t bloat your code with repetitive '$this' and prototype declarations.

 
## RxJs

The Reactive Extensions for JavaScript (RxJS) is a set of libraries for composing asynchronous and event-based programs using observable sequences and fluent query operators that are implemented in JavaScript. Using RxJS, developers represent asynchronous data streams with Observables, query asynchronous data streams using our many operators, and parameterize the concurrency in the asynchronous data streams using Schedulers. Simply put, RxJS = Observables + Operators + Schedulers.

Using RxJS, you can represent multiple asynchronous data streams (that come from diverse sources, e.g., stock quote, tweets, computer events, web service requests, etc.), and subscribe to the event stream using the Observer object. The Observable notifies the subscribed Observer instance whenever an event occurs.

Because observable sequences are data streams, you can query them using standard query operators implemented by the Observable type. Thus you can filter, project, aggregate, compose and perform time-based operations on multiple events easily by using these operators. In addition, there are a number of other reactive stream specific operators that allow powerful queries to be written. Cancellation, exceptions, and synchronization are also handled gracefully by using the methods on the Observable object.

Using these extensions in our client/server APIs will greatly enchance the range of asynchronous services we can supply in a robust and timely fashion.  There is a significant learning curve which is reflected in the time proposed to implement.


## Ratchet

Rachet is a set of library objects that allow us to implement Web Sockets into our PHP server development environment.

WebSockets are a bi-directional, full-duplex, persistent connection from a web browser to a server. Once a WebSocket connection is established the connection stays open until the client or server decides to close this connection. With this open connection, the client or server can send a message at any given time to the other. This makes web programming entirely event driven, not (just) user initiated. It is stateful. As well, at this time, a single running server application is aware of all connections, allowing you to communicate with any number of open connections at any given time.

For a system such as ours, Bi-directional communications as opposed to SOAP/REST request/response cycles are of a huge use.  Benefits include:

- Removal of CPU and communications expensive "polling" techniques inside rigid cyclic executive processing loops.
- Ability to receive out of bandwidth and out of order data at the user console via a device 'push - priority' method.
- Firmware testing and upgrades.
- Push application upgrades, unlock codes, new applications etc.

There is a significant learning curve when implementing bi-directional architecture into our web applications.  It is not really new science,
more a re-invention or traditional UNIX socket.io communication as an extra in a HTTP(s) based application.

This is reflected in the time to implement.



## Test Suite

As part of the build of all parts of the application, built in test methods such as PHPUnit,
building a test suite comprises the automation of a set odf standard tests that can be run
as an acceptance test suite or as a regression test suite.

To enable this automation it is envisaged that an automated testing tool such as Selenium
be implemented.


##  Deployment Automation

TBA.  Depending upon requirements.

##  Support

TBA.  Depending upon requirements.

