PROBLEM STATEMENT :
Install DB PostgreSQL on your machine or use a free web hosting services for PostgreSQL
(https://www.heroku.com/postgres or https://www.elephantsql.com/plans.html).
• Write SQL script which will create Users table in the DB and fill it in with predefined users’
collection.
• Configure your REST service to work with PostgreSQL

The service should adhere to 3-layer architecture principles (https://softwareontheroad.com/idealnodejs-project-structure/) and contain the following set of directories:
|- routers / controllers
|- data-access
|- models



SCREENSHOTS FROM POSTMAN  :

POSTGREE TABLE PICS 
![POSTGRE TABLE IMAGE](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/userTablePg.png)

![POSTGRE TABLE COMMAND IMAGE](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/createTableQueryImage.png)

INSERTION
![insertion demo](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/insertionDemo.png)

GET
![GET ALL USERS DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/GetAllUsersDemo.png)

GET SINGLE USER 
![GET SINGLE USER DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/GetParticularUserDemo.png)

UPDATE
![UPDATE USER DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/updateUserDemo.png)

VALIDATIONS:

ID EXISTS
![USER ID ALREADY EXISTS DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/ValidationuserIdAlreadyExists.png)

AGE VALIDATION
![AGE VALIDATION DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/ValidationuserAgeCheck.png)

PASSWORD VALIDATION
![password validation demo](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/ValidationuserPasswordCheck1.png)

![password validation demo](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/ValidationuserPasswordCheck2.png)

ALL FIELD REQUIRED
![all fields required demo](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask3/imagesForReadme/ValidationuserAllFieldsRequiredCheck.png)




