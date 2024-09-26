<?php

require("/home/dho9/data/login-data.php");
include("includes/header.php");

$username = isset($_POST['username']) ? trim($_POST['username']) : '';
$password = isset($_POST['password']) ? trim($_POST['password']) : '';

$msg = ""; // initialize ths message var

if (isset($_POST['mysubmit'])) {
    //echo "$username, $password";
    if (($username == $username_good) && (password_verify($password, $pw_enc))) {


        //IF USER HAS SUCCESFULLY LOGGED IN (WE CALL THIS "AUTENTICATION", THEN REDIRECT THEM TO THE SECURE SITE AND CREATE A SESSION THAT WILL BE CHECKED FOR IN EACH PAGE OF THE SECURE SITE)

        session_start(); // starts a session or continues an existing one.

        $_SESSION['catalog'] = session_id(); // make sure this is random!!

        header("Location:index.php");



        $msg = "Welcome"; // SUCCESS
    } else {

        if ($username != "" && $password != "") {
            $msg = "Invalid Login";
        } else {
            $msg = "Please enter a Username and Password";
        }
    }
}

?>


<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Please Login</title>
</head>

<body>
    <div class="container w-50">
        <h1>Please Login</h1>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username">

            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" name="password">
            </div>

            <button type="submit" class="btn btn-primary" name="mysubmit">Submit</button>
        </form>
        <?php
        if ($msg != "") {
            echo "<div class=\"alert alert-info mt-5\">$msg</div>";
        }
        ?>

    </div>

</body>
<!-- Option 1: Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</html>