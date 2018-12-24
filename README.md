# FAC Guidebook

[![Known Vulnerabilities](https://snyk.io/test/github/zurda/teamPortfolio/badge.svg)](https://snyk.io/test/github/zurda/facGuidebook) [![open issues](https://img.shields.io/github/issues/zurda/facGuidebook/.svg)](https://github.com/zurda/facGuidebook/issues) [![help wanted issues open](https://img.shields.io/github/issues/zurda/facGuidebook/help%20wanted.svg)](https://github.com/zurda/facGuidebook/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22) <a href="https://twitter.com/zurdev/follow?screen_name=zurdev">
<img src="https://img.shields.io/twitter/follow/zurdev.svg?style=social&logo=twitter"
        alt="follow on Twitter">
</a>

Weeks 6-7 of [FAC-15](https://github.com/fac-15): building a recommendation web app in node.js w/ backend postgres db

### Running locally:

To run this project locally:

1. Clone or fork this repo
2. Go into the project repo: `cd facGuidebook`
3. `npm i`
4. `npm start`

### Submitting a form:

If you'd like to use the form, you'll need to:

1. Create a local database
2. Create a `.config.env` file with your db credentials, for example:
   ```
   DB_URL = postgres://[username]:[password]@localhost:5432/[db_name]
   ```
3. Build the database table by:
   - going into `src/database/db_build.js`
   - uncomment the line `// dbBuilder();`
   - run `node src/database/db_build.js`
   - go back into `src/database/db_build.js` and comment out the line `// dbBuilder();`

### Testing:

If you'd like to test the project, you'll need to:

1. Create a local testing database
2. Create a `.config.env` file with your db credentials, for example:
   ```
   TEST_DB_URL = postgres://[test_username]:[test_password]@localhost:5432/[test_db_name]
   ```

## Origins

The original [repo](https://github.com/fac-15/FAC_guidebook2.0) for was created by [@Whooolia](https://github.com/Whooolia), [@charlielafosse](https://github.com/charlielafosse), [@tantsandras](https://github.com/tantsandras), and myself.

### User journey:

1. **User can view :eyes: existing posts**

   - Pull and display data from db

2. **Click to add :heavy_plus_sign: own post**

   - Check for cookie to see if user is logged in

3. **If not logged in :unlock: : Prompted to login or signup**

   - (If logged in, jump to step 6)

4. **User signs up** :lock_with_ink_pen:

   - Client side validation - check that password is at least 8 chars, with at least 1 numb, 1 uppercase and 1 lowercase
   - Server side - Check if user name already exists in the db
   - If no error, submit form to new row in USERS table with a HASHED password

5. **User logs in** :key:

   - Server side - check that username is present in db, then check that the hash of the input matches that user's hashed password.
   - If success, creates a JWT with info about specific user

6. **User can now access the post form (protected route)** :page_with_curl:

7. **User submits post form** :page_with_curl:

   - Client side - check that fields are not empty
   - Server side - check if the restaurant already exists/that a post hasn't already been made referencing it
   - If success, submit form to POSTS table and RESTAURANTS table

8. **User can view :eyes: updated home page!**

### What we worked on :clock130: :

## Day :one: :

- **Creating a new database on Heroku** and linking it to the new repo (this took longer than expected, we're still not sure why!)
- **Signup form validation** on the client side (unmatching passwords, patterns)
- We spent a long time **tracking our callback functions through different files** to figure out where to put the login form validation (to compare the password in the database with the password that is submitted)
- **whiteboard** coding

## Our process

![img_5081](https://user-images.githubusercontent.com/36998110/49939612-3d049600-fed5-11e8-8b82-a03d61225030.JPG)
![img_5082](https://user-images.githubusercontent.com/36998110/49939613-3d9d2c80-fed5-11e8-8032-57f2ed729284.JPG)
![img_5083](https://user-images.githubusercontent.com/36998110/49939614-3d9d2c80-fed5-11e8-9ea3-fb57c15ea165.JPG)
![img_5084](https://user-images.githubusercontent.com/36998110/49939615-3d9d2c80-fed5-11e8-9cf4-f06fd4e4d0a7.JPG)

## Day :two: :

- **Updated our user journey**

![img_5101](https://user-images.githubusercontent.com/36998110/49939616-3d9d2c80-fed5-11e8-9223-f5a9ecff7e3a.JPG)

- Client-side validation for the sign up page
- Handling the USER LOGIN logic
- Signup form validation
- Client side - check that password is at least 8 chars, with at least 1 numb, 1 uppercase and 1 lowercase.
- Server side - Check is user name already exists in the db

## Login form validation:

- Server side - check that username is present in db, then check that the hash of the input matches that user's hashed password!

- Post form validation (everything we had in there last week...)

## Test for server side and database SEPERATELY!

## Day :three: :

### Based on rasied issues, we ..

- Add logout button & home button
- Add the required rules for the password validation
- Handle the length of the resturant review
- Travis CI - All passing! :green_heart:

## Contributing

This project is absolutely open to contributers! Please browse through the open issues, or suggest your own.  
First timers are ofcourse welcome. Check out the open [![good first issues](https://img.shields.io/github/issues/zurda/teamPortfolio/good%20first%20issue.svg)](https://github.com/zurda/teamPortfolio/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first%22%issue)
