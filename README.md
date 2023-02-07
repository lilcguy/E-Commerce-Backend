# E-Commerce-Backend

## Description

E-Commerce is one of, if not the most heavily trafficked sector of the internet today. For customers, including myself, the convenience of being able to order whatever I need without having to go anywhere is extremely enticing.
As a student of web development, it stands to reason that practicing the development of how a backend system for an e-commerce functions or could function, is extremely valuable. That is the purpose of this project.

## Installation

Install dependencies with `npm i`.

## Usage

In the terminal, open up the MYSQL interface with the command `mysql -u root -p`. Input your information, and then run the command `source db/schema.sql`. This creates the database we will be using. Run the command `quit` to exit, and then run the command
`npm run seed` to seed the database with information. If one desires, one can run the command `SELECT * FROM category` in MYSQL to see that the category table has information in it to verify seeding. After seeding, run the command `npm run start` to start the server.
Because the application is all backend, one can use the application Insomnia to hit the routes found in the routes folder. These include get, post, put, and delete requests.

Walkthrough video: https://drive.google.com/file/d/1nYvT01K3EUP8TC5noTOFVMS-OwjvTu8y/view?usp=share_link 


Screenshots are found in the Assets folder.

  
    ![alt text](assets/sourcing.png)
    ![alt text](assets/sseeding.png)
    ![alt text](assets/starting.png)
    ![alt text](assets/insomnia-requests.png)
  


