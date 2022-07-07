PROBLEM STATEMENT :
Write a simple REST service with CRUD operations for User entity.
To create REST service, use ExpressJS (https://expressjs.com/)
 Service should have the following CRUD operations for User:
− get user by id;
− create and update user;
− get auto-suggest list from limit users, sorted by login property and filtered by
loginSubstring in the login property:
getAutoSuggestUsers(loginSubstring, limit)
− remove user (soft delete – user gets marked with isDeleted flag, but not removed from
the collection).
• Store user’s collection in the service memory (while the service is running).
To test the service CRUD methods, you can use 
all fields are required;
• login validation is required;
• password must contain letters and numbers;
• user’s age must be between 4 and 130.
In case of any property does not meet the validation requirements or the field is absent, return 400
(Bad Request) and detailed error message.

SCREENSHOTS FROM POSTMAN  :

INSERTION
![insertion demo](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask2/ImagesForReadme/insertionDemo.png)

GET
![GET ALL USERS DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask2/ImagesForReadme/GetAllUsersDemo.png)

GET SINGLE USER 
![GET SINGLE USER DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask2/ImagesForReadme/GetParticularUserDemo.png)

UPDATE
![UPDATE USER DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask2/ImagesForReadme/updateUserDemo.png)

VALIDATIONS:

ID EXISTS
![USER ID ALREADY EXISTS DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask2/ImagesForReadme/ValidationuserIdAlreadyExists.png)

AGE VALIDATION
![AGE VALIDATION DEMO](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask2/ImagesForReadme/ValidationuserAgeCheck.png)

PASSWORD VALIDATION
![password validation demo](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask2/ImagesForReadme/ValidationuserPasswordCheck1.png)

![password validation demo](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask2/ImagesForReadme/ValidationuserPasswordCheck2.png)

ALL FIELD REQUIRED
![all fields required demo](https://git.epam.com/sagun_jaiswal/dep/-/raw/develop/NodeJS/HomeTask2/ImagesForReadme/ValidationuserAllFieldsRequiredCheck.png)




