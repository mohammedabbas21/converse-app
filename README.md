# converse-app

# Author: Mohammed Abbas


This is a Chat Application. The front-end is built using React.js and involves the use of
wide variety of hooks like useContext, useState, useEffect, useHistory , etc,. The front-end 
also involves routing, done using the react-router-dom, which ensures that the application remains
single-page. Chakra UI is used to build the basic building blocks of application like Buttons,Menus, etc,.


The back-end server is built using Node.js/ Express.js. The security of the application is maintained 
using JsonWebTokens and bcrypt.js. A No-SQL database i.e. Mongo DB is used to store the User profile, Chats,
Messages, etc. Mongoose, an Object-Document mapper is also employed to work as an abstraction over Mongo DB,
which has helped in defining middlewares, population and validation. Mongo DB Atlas is used to deploy the 
databases on cloud and similarly Cloudinary is used to deploy images on the cloud.

Socket.io was used to relay real-time messages.
