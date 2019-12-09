# Mindaugas Januška web page for job search

I wanted a clean, simple web page to supplement my job search process. It had to be fast, mobile-friendly, free to build and easy to update. This is the result. Forks and pull requests are welcome!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need a Node JS installed on your machine. You can download and install it [from here](https://nodejs.org/en/download/)

### Installing

1. Fork this repository to your desired location on your local machine:

```
git clone https://github.com/mindaugas-pro/personal-website-jobsearch.git
```

2. Run following code to install node_modules from package.json file:

```
npm install
```

3. In the file 'sendEmail.js' enter you email provider, email addrress and
    password. This will enable to send an email to you directly from
    website. Please note, that 2 step verification should be disabled for
    gmail, otherwise gmail will block sending emails.

4. Run the following code to start application on port 3000:

```
npm start app
```

5. Go to your browser and paste the following url address:

```
http://localhost:3000
```


## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - programming language for Web pages
* [Express](https://expressjs.com) - Node.js web application framework
* [Bulma](https://bulma.io) - CSS Framework
* [Nodemailer](https://nodemailer.com/about/) - module for Node.js applications to allow easy email sending


## Authors

* **Mindaugas Januška** - [Home page](https://mindaugas.pro)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
