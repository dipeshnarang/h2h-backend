# h2h-backend
Steps to run this project
Install mongodb and start it on port 27017.   
In databaseConnection/mongoose.js replace MONGODB_URL_PROD with local database url (basic url: 'mongodb://127.0.0.1:27017/H2H').    
In index.js- Set the value of the const Port=3000 (app will run port 3000)
create an AWS account.
create a S3 aws public bucket with with desired name.
create a key pair in aws(can be created in security credentials tab)
In services/file-upload.js set all the attributes that include- AccessKeyId, SecretKey, Region, Bucket
To start the script: npm start
