<?php

require_once("/home/dho9/data/connect.php");




require_once("../private/prepared.php"); //load our prepared statements



if (isset($_POST['minMoons']) && !empty($_POST['minMoons'])) {
    $minMoons = intval($_POST['minMoons']);


    $query = "SELECT * FROM planets_catalogue WHERE moons >= $minMoons";
    $result = mysqli_query($con, $query);

    if (mysqli_num_rows($result) >= 0) {
        echo "<table class='table table-bordered table-hover'>";
        echo "<tr>
                <th>Planet Name</th>
                <th>Planet Type</th>
                <th>Diameter</th>
                <th>Moons</th>
                <th>Description</th>
                <th>Radius</th>
                <th>Orbital Period</th>
                <th>Year Discovered</th>
                <th>Image</th>
              </tr>";

        while ($row = mysqli_fetch_assoc($result)) {
            extract($row);
            echo "<tr>
                    <td>$name</td>
                    <td>$type</td>
                    <td>$diameter</td>
                    <td>$moons</td>
                    <td>$description</td>
                    <td>$radius</td>
                    <td>$orbital_period</td>
                    <td>$discovered</td>
                    <td><img src='../thumbnails/planet-thumbnail.jpg' class='img-thumbnail' alt='Planet Thumbnail'></td>
                  </tr>";
        }
        echo "</table>";
    } else {
        echo "No planets found.";
    }
} else {
    echo "Invalid request.";
}

// fetch_planets.php

// Connect to your database and retrieve planet data
require_once("/home/dho9/data/connect.php");
require_once("../private/prepared.php"); // Load prepared statements

$minMoons = isset($_POST['minMoons']) ? $_POST['minMoons'] : 0;
$planetType = isset($_POST['planetType']) ? $_POST['planetType'] : '';

$planets = get_all_planets(); // Retrieve all planets

// Filter planets based on the minimum number of moons and/or planet type
$filteredPlanets = array_filter($planets, function ($planet) use ($minMoons, $planetType) {
    if ($minMoons > 0 && $planet['moons'] < $minMoons) {
        return false; // Filter out planets with fewer moons than the specified minimum
    }
    if ($planetType && $planet['type'] !== $planetType) {
        return false; // Filter out planets that do not match the selected type
    }
    return true; // Include planets that meet the filtering criteria
});

if (!empty($filteredPlanets)) {
    echo "<table class='table table-bordered table-hover mt-5'>";
    echo "<tr>
            <th>Planet Name</th>
            <th>Planet Type</th>
            <th>Diameter</th>
            <th>Moons</th>
            <th>Description</th>
            <th>Radius</th>
            <th>Orbital Period</th>
            <th>Year Discovered</th>
            <th>Image</th>
          </tr>";

    foreach ($filteredPlanets as $planet) {
        extract($planet);
        echo "<tr>
                <td>$name</td>
                <td>$type</td>
                <td>$diameter</td>
                <td>$moons</td>
                <td>$description</td>
                <td>$radius</td>
                <td>$orbital_period</td>
                <td>$discovered</td>
                <td><img src='../thumbnails/planet-thumbnail.jpg' class='img-thumbnail' alt='Planet Thumbnail'></td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "No planets found.";
}
