# Alviz 
[Practice algorithms like an Artist!](https://rawgit.com/hoangdangninh/Alviz/master/index.html) :turtle::turtle::turtle:

## Getting Started
Instructions on how to get this project running on your local machine

### Prerequisite
```
A simple webserver which can host static files (Apache, IIS, NodeJS, Express, SimpleHTTPServer, etc.)  
```

### Example
If you have python installed,  there's a simple built-in webserver which you can use.
Run the following command in the project's root directory.

```
python -m SimpleHTTPServer 8000
```

From here, the application will be served in `http://localhost:8000`

## Contributing
1) Make your own art algorithm, save into a file such as `rcat.js` in directory `recipes/`
2) Add an entry into `index.html` starting from line 33 such as `<li name="artist">rcat</li>`
3) Commit and submit a pull request

## Author
* **Hoang Dang** - *Initial work* - [Bernie Pope](https://github.com/bjpop)

## Acknowledgement
This project has made used and currently supports the following third-party libraries

* [bootstrap](https://github.com/twbs/bootstrap) - User Interface
* [jquery](https://github.com/jquery/jquery) - Event Handling 
* [turtle](https://github.com/bjpop/js-turtle) - Drawing with Turtle (static part) 
* [chartjs](https://github.com/chartjs/Chart.js) - Drawing with Artist chart
* [underscorejs](http://underscorejs.org/) - Some fun with functional-like programming

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
