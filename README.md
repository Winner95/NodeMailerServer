# NodeMailerServer
nodeMailer server, which is run on Heroku + any remote mail-service

## How to start

Simply follow these steps:

1) Register at Heroku
2) Upload this code to instance
3) Add to Herku instance your env_variables from index.js
4) Add any email service credential (without second factor) to env_vvariables
5) Apply CORS to Heroku instance, if needed
6) Run post requests to your Heroku instance with certain data:
	- name
	- email
	- phone


Feel free to use or modify this tpl