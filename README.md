#Binary clock

By Hans Joachim Desserud

##License
BSD 2-clause (see LICENSE for details)

##Usage
No external dependencies needed. Simply open index.html in your favorite web
browser.

##Development
You need node and buster.js to run the tests.
Install node and npm (node's package manager). Some packages also requires a
C++ compiler:

    sudo apt-get install nodejs npm g++

**Note**: If you are running Ubuntu 12.10 or a later release, you will need to
install `nodejs-legacy` too.

Now install buster.js:

    sudo npm install -g buster


##To run the tests
Open a terminal and start buster:

    buster server

Open a web browser, go to [http://localhost:1111/](http://localhost:1111/) and click "Capture browser".
(Repeat this step if you want to test with multiple browsers.)
To run the tests, open another terminal and run:

    buster test

For details, please see buster.js' documentation:
http://docs.busterjs.org/en/latest/getting-started/#run-tests

##General information
The webpage is just a single HTML file since I felt a full-blown web framework
would be overkill for this project.
