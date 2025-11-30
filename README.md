# AWS-Three-Tier-Web-Application-Deployment-Using-Flask-
A 3-tier web application deployed on AWS using a static HTML/CSS/JS frontend, a Python Flask backend, and an optional RDS database layer. Built using a custom VPC, EC2 instances, security groups, and load balancing. Designed to demonstrate core AWS architecture and deployment skills.
Architecture Overview

The project implements a standard 3-tier architecture:

Client (Browser)
      │
      ▼
Frontend (HTML/CSS/JS) – Public Subnet
      │
      ▼
Backend (Flask API) – Private Subnet
      │
      ▼
Database (RDS MySQL) – Private Subnet (Optional)


Description of Tiers:

Frontend (Public Subnet): Serves static HTML, CSS, JS files using Apache/Nginx on EC2.

Backend (Private Subnet): Python Flask API handles requests from frontend; no public access.

Database (Optional Private Subnet): MySQL RDS instance storing application data securely.

Features

Custom VPC with public and private subnets

Flask REST API deployed on EC2

Secure communication between frontend and backend

Optional database integration using Amazon RDS

AWS Free Tier deployment

Documentation with architecture diagram and screenshots

Technologies Used

AWS Services: EC2, VPC, Subnets, Security Groups, IAM, RDS (optional), CloudWatch

Backend: Python, Flask

Frontend: HTML, CSS, JavaScript

Tools: Git, Linux, SSH
