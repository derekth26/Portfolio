<?php
// connect to your DB
require_once("/home/dho9/data/connect.php");




require_once("../private/prepared.php"); //load our prepared statements

$title = "Planets Catalogue";

include("includes/header.php"); // load our common design header/footer
// we "could" just use a simple SELECT statement here to grab and display the cities. However, we'll use "best practice" and utilize prepared statements to make this more secure.

// $result = mysqli_query($con, "SELECT * FROM cities");

// while($row = mysqli_fetch_array($result)){
//     echo $row['city_name'];
// }
?>

<?php
$planets = get_all_planets();

if (count($planets) > 0) {
    echo "\n<table class=\"table table-bordered table_hover mt-5\">";
    echo "\n\t<tr>";
    echo "\n\t<th scope=\"col\">Planet Name</th>";
    echo "\n\t<th scope=\"col\">Planet Type</th>";
    echo "\n\t<th scope=\"col\">Diameter</th>";
    echo "\n\t<th scope=\"col\">Moons</th>";
    echo "\n\t<th scope=\"col\">Description</th>";
    echo "\n\t<th scope=\"col\">Radius</th>";
    echo "\n\t<th scope=\"col\">Orbital Period</th>";
    echo "\n\t<th scope=\"col\">Year Discovered</th>";
    echo "\n\t<th scope=\"col\">Image</th>";
    echo "\n\t</tr>";
    foreach ($planets as $planet) {
        extract($planet);
        echo "\n<tr><td>$name</td><td>$type</td><td>$diameter</td><td>$moons</td><td>$description</td><td>$radius</td><td>$orbital_period</td><td>$discovered</td></td>";
        $thumbnail_path = "../thumbnails/planet-thumbnail.jpg";

        // Display thumbnail image if it exists
        if (file_exists($thumbnail_path)) {
            echo '<td><img src="' . $thumbnail_path . '" class="img-thumbnail" alt="Planet Thumbnail"></td>';
        } else {
            // Display default thumbnail image if specific thumbnail not found
            echo '<td><img src="../thumbnails/planet-thumbnail.jpg" class="img-thumbnail" alt="Default Thumbnail"></td>';
        }
    }
    echo "\n</tr>\n</table>";
}
?>