# Stock Market Application

The following repository contains the angular front end code as well as the backend code:<br />
<br />
Folder: angular-front-end contains the angular application code<br />
Folder: Microservices contains the backend microservices coded in spring boot<br />
<br />
## Instructions for running the application:<br />
1.Run the microservices in the following order:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              -discovery-server<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              -company-details-service<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              -sectorservice<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              -stock-exchange-service<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              -upload-excel-service<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              -user-details-service (must be run at the and so that zull gateway can fetch registry instantly)<br /><br />
2. Install the front end application in your system using npm install.<br /><br />
3. Run the angular applicatio using the command ng serve -o<br /><br />
4. Now got to localhost:4200 for the application.<br />
<br />
5. (Optional) In order to test the microservices seperately send all the requests to localhost:8080/\<microservice name\>/\<URL PATH defined in controller\><br />
<br/>
## Milestone 3
Added Jenkinsfile and Dockerfile in discovery-server microservice, the jenkiins pipeline consists of the following stages:

---Git clone/pull stage
---Compile stage
---Testing stage
---Build and package stage
---Build docker image stage
---Run docker container stage


