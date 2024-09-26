# Prepared SQL Statements 

Prepared SQL statements in PHP allow you to execute SQL queries with parameters that are provided separately from the query itself. This can help prevent SQL injection attacks, as well as improve performance when executing multiple queries with the same structure.

## Example

```PHP
// Create a new mysqli object with your database credentials
$mysqli = new mysqli("localhost", "username", "password", "database");

// Prepare a statement with a parameter placeholder
$stmt = $mysqli->prepare("SELECT * FROM users WHERE id = ?");

// Bind the parameter to a variable
$id = 123;
$stmt->bind_param("i", $id);

// Execute the statement and get the result set
$stmt->execute();
$result = $stmt->get_result();

// Loop through the result set and fetch each row as an associative array
while ($row = $result->fetch_assoc()) {
    echo $row["name"] . "<br>";
}

// Close the statement and connection
$stmt->close();
$mysqli->close();

```

In this example, we create a mysqli object to connect to the database, and then prepare a statement with a parameter placeholder using the `prepare()` method. We then bind the parameter to a variable using the `bind_param()` method, and execute the statement with the `execute()` method. Finally, we loop through the result set and fetch each row as an associative array using the `fetch_assoc()` method.


## Prepared Statements and SQL Injections

Prepared SQL statements help prevent SQL injection attacks by separating the SQL query from the user-provided input. When using prepared statements, the query is first prepared with placeholders for the input parameters, and then the actual values for the parameters are bound to the placeholders before the query is executed.

This process ensures that the user input is properly sanitized and escaped before being added to the query. The database engine then treats the input as data rather than part of the SQL query, eliminating the possibility of SQL injection attacks.

Here's an example of how prepared statements can prevent SQL injection attacks:

```PHP
// User input
$username = "'; DROP TABLE users; --";

// Prepared statement
$stmt = $mysqli->prepare("SELECT * FROM users WHERE username = ?");

// Bind parameter
$stmt->bind_param("s", $username);

// Execute statement
$stmt->execute();

```

In this example, if we were to concatenate the user-provided $username variable directly into the SQL query, it would cause the users table to be dropped. However, because we're using a prepared statement and binding the parameter, the database engine treats the user input as data rather than as part of the SQL query, preventing the SQL injection attack.


## tl;dr

Prepared statements make web applications safer by separating the SQL query from user input, and properly sanitizing and escaping the input before it is added to the query. This ensures that user input is treated as data rather than as part of the SQL query, eliminating the possibility of SQL injection attacks.
