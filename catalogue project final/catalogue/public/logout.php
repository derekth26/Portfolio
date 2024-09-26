<?php
include("includes/header.php");
session_start();
session_unset(); // removes sessions variables 
session_destroy(); // destroys the session
header("Location:index.php");
