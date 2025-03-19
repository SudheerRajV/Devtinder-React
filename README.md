# Dev Tinder

This project is used to connect developers.

# AWS deployment steps

- Launch new instance(Ubuntu)
- For connecting to the new instance create key pair(.pem)
- Change the mod after dowloading
    -  ```sudo chmod 400 "filename.pem"```
- Connect to instance using .PEM file
    - ``` sudo ssh -i "filename.pem" ubuntu@eu-north-1.compute.amazonaws.com```
- Install Node(nvm and node)
- Clone the repos in the machine
- Install and start NGINX
    - ```sudo apt update```
    - ```sudo apt install nginx```
    - ```sudo systemctl start nginx```
    - ```sudo systemctl enable nginx```
- Build the project
    - ```npm run build```
- Copy the dist -> html sever folder
    - ```sudo scp dist/* /var/www/html/```
- Open port 80(add inbound rule).


