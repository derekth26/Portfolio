# SQL Injections

An SQL Injection is when a hacker is able to execute arbitrary SQL requests. The hacker submits a string that manipulates standard SQL syntax and injects their SQL code into our code.

Any SQL queries that use dynamic data values are vulnerable. 

It doesn't matter where the data originates, either: it can come from URL parameters (a query string), form data, cookies, sessions, or data already in the database. All of these are vulnerable entry points to a hacker.

Because of this, SQL Injections are constantly ranked as the number one security risk on the web by OWASP (Open Web Application Security Project). 


## How do SQL Injections work? 

When data is inserted using SLQ, it's enclosed in single quotes. This can cause bugs in very innocent ways. For example: 

```SQL
	INSERT INTO subjects (menu_name, visible) VALUES ('David's Story', TRUE);
```

In this example, the apostrophe in `David's` causes a syntactical error. SQL expects that a comma should come after `David`, not the rest of the word or phrase.

A hacker can exploit this bug to cause chaos. They can also use semicolons to execute additional SQL commands.

```PHP
	$input = "' INSERT INTO admins (username, password) VALUES ('hacker', 'mypassword1'); --"
```

In this case, a hacker is trying to create a username and password that allows them to login to a new account with administrative privileges. 

*Note*: The double dash (--) at the end of the injection is SQL syntax for a comment. This means that anything following it will be ignored. Often, this will prevent the application from throwing an error.


## How do we prevent SQL Injections? 

Just like we break down `specialchars` (special syntax or characters) that have meaning in HTML to prevent cross-site scripting attacks, we can convert any characters with meaning in SQL to data before sending it off to be executed by MySQLi. 

Simply put? We need to add a backslash `\` before all single quotes in a string. This is how we escape them for SQL. 

Let's take our example from earlier:

```SQL
	INSERT INTO subjects (menu_name, visible) VALUES ('David\'s Story', TRUE);
```

By adding the escape character, SQL no longer things the single quote is part of a statement to be executed. 


### PHP built-in functions

The following functions can help add backslashes before a single quote:

```PHP
	/* This takes a string (generally your user input) and adds slashes before characters that need to be escaped, like single quotes, double quotes, a backslash, and the null character. */

	addslashes($string);

	/* This is part of the MySQLi API and is designed specially for SQL injections. In addition to the method above, it also escapes characters like line return and other weirdness. */

	mysqli_real_escape_string($db, $string);

```

*Note*: More on null characters can be read here: https://owasp.org/www-community/attacks/Embedding_Null_Code

Note that the second method requires the database connection handle, so it will only work when we have an active connection to a database. This is because it takes into account things like the charset the database uses when sanitising the input. 





