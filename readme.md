Getting Started
---------------

**Install project**


```
$ git clone https://github.com/ntourne/tudai-mongodb-2019
$ npm install
```

Open `config.js` and edit with your MongoDB credentials.

**Execute scripts**

To post a new document into `Logs` collection's just execute in your command line:

```
$ node create-log.js --level=DEBUG --message="New message"
```