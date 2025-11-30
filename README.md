# AWS-Three-Tier-Web-Application-Deployment-Using-Flask-
A 3-tier web application deployed on AWS using a static HTML/CSS/JS frontend, a Python Flask backend, and an optional RDS database layer. Built using a custom VPC, EC2 instances, security groups, and load balancing. Designed to demonstrate core AWS architecture and deployment skills.
Architecture Overview

The project implements a standard 3-tier architecture:

**Architecture Overview**

The application follows a standard 3-tier structure:

1️⃣ Presentation Tier (Frontend – Public Subnet)

Static website using HTML, CSS, JavaScript

Hosted on an EC2 instance in a public subnet

Accessible over HTTP (port 80)

2️⃣ Application Tier (Backend – Private Subnet)

Python Flask backend API

Runs on an EC2 instance in a private subnet

Accessible only from frontend EC2 (Security Group rule)

3️⃣ Data Tier (Optional – Private Subnet)

Amazon RDS MySQL 

Accessible only by backend EC2

No public internet exposure

**Features**

Custom VPC with public and private subnets

Flask REST API deployed on EC2

Secure communication between frontend and backend

Optional database integration using Amazon RDS

**AWS Free Tier deployment**

Documentation with architecture diagram and screenshot.

**Technologies Used****

AWS Services: EC2, VPC, Subnets, Security Groups, IAM, RDS (optional), CloudWatch

Backend: Python, Flask

Frontend: HTML, CSS, JavaScript

Tools: Git, Linux, SSH
