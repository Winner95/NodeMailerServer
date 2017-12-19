# NodeMailerServer
nodeMailer server, which is run on Heroku + any remote mail-service. 

## How to start

Simply follow these steps:

1) Register at [Heroku](https://www.heroku.com/)
2) [Upload](https://devcenter.heroku.com/articles/git) this code to new instance on Heroku
3) Add to Heroku instance your **env_variables** from _index.js_:  **process.env.VARS** in dashboard
4) Add any email service credential _(without second factor)_ to **env_variables**
5) Deploy code to Heroku instance
6) **Apply CORS** to Heroku instance, if needed
7) Run POST-requests from your frontEnd to  Heroku instance with certain data in _request.body_:
	- name
	- email
	- phone

## Credits

This project is created for boilerplate reasons, so feel free to use or modify this tpl in your work. :thumbsup:
