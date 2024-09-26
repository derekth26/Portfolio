<?php

// connect to your DB
require_once("/home/dho9/data/connect.php");




require_once("../private/prepared.php"); //load our prepared statements

$title = "Planets Catalogue";

include("includes/header.php"); // load our common design header/footer
$searchterm = isset($_POST['searchterm']) ? $_POST['searchterm'] : "";

?>

<div class="container my-5">

    <h1 class="display-1">Search Planets</h1>

    <form action="search.php" method="post">
        <div class="mb-3">
            <label for="searchterm" class="form-label">Searchterm</label>
            <input type="text" class="form-control" name="searchterm" value="<?php echo $searchterm; ?>">
        </div>
        <div class="mb-3">
            <input type="submit" name="submit">
        </div>
    </form>





    <?php

    $planets = get_all_planets();


    if (isset($searchterm) && strlen($searchterm) > 2) {
        echo "<h3>Searching for \"$searchterm\"</h3>";

        // Use prepared statement to safely execute the query
        $query = "SELECT * FROM planets_catalogue WHERE
                    name LIKE ? OR type LIKE ? OR diameter LIKE ?
                    OR radius LIKE ? OR orbital_period LIKE ? OR discovered LIKE ?";

        $stmt = mysqli_prepare($con, $query);

        // Bind parameters and execute the statement
        $searchPattern = "%$searchterm%";
        mysqli_stmt_bind_param($stmt, "ssssss", $searchPattern, $searchPattern, $searchPattern, $searchPattern, $searchPattern, $searchPattern);
        mysqli_stmt_execute($stmt);

        $result = mysqli_stmt_get_result($stmt);

        if (mysqli_num_rows($result) > 0) {
            echo "<table class='table table-bordered'>";
            echo "<thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Diameter</th>
                        <th>Moons</th>
                        <th>Description</th>
                        <th>Radius</th>
                        <th>Orbital Period</th>
                        <th>Discovered</th>
                        <th>Image</th>

                    </tr>
                  </thead>";
            echo "<tbody>";

            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>";
                echo "<td>{$row['name']}</td>";
                echo "<td>{$row['type']}</td>";
                echo "<td>{$row['diameter']}</td>";
                echo "<td>{$row['moons']}</td>";
                echo "<td>{$row['description']}</td>";
                echo "<td>{$row['radius']}</td>";
                echo "<td>{$row['orbital_period']}</td>";
                echo "<td>{$row['discovered']}</td>";
                echo "<td><img src='../thumbnails/planet-thumbnail.jpg' class='img-thumbnail' alt='Planet Thumbnail'></td>";



                echo "</tr>";
            }

            echo "</tbody>";
            echo "</table>";
        } else {
            echo "No planets found.";
        }
    }


    ?>




</div>