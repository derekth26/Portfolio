<?php

// connect to your DB
require_once("/home/dho9/data/connect.php");




require_once("../private/prepared.php"); //load our prepared statements

$title = "Planets Catalogue";

include("includes/header.php"); // load our common design header/footer
$searchterm = isset($_POST['searchterm']) ? $_POST['searchterm'] : "";

?>

<h1 class="fw-light text-center mt-5">Catalogue of Planets</h1>
<p class="text-muted mb-5">Welcome to the Cosmos.</p>





<label for="moonFilter">Filter by Moons:</label>
<input type="range" min="0" max="200" value="0" class="form-range" id="moonFilter">
<p id="moonCount">0 Moons</p>

<div id="filteredPlanets"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    $(document).ready(function() {
        $('#moonFilter').on('input', function() {
            var minMoons = $(this).val();
            $('#moonCount').text(minMoons + ' Moons');
            filterPlanets(minMoons);
        });

        function filterPlanets(minMoons) {
            $.ajax({
                url: 'fetch_planets.php',
                type: 'POST',
                data: {
                    minMoons: minMoons
                },
                success: function(response) {
                    $('#filteredPlanets').html(response);
                },
                error: function(xhr, status, error) {
                    console.log('Error:', error);
                }
            });
        }
    });
</script>
<form action="index.php" method="post">

    <div class="mb-3">
        <label for="planetType" class="form-label">Filter by Planet Type:</label>
        <select class="form-select" name="planetType" id="planetType">
            <option value="">All Types</option>
            <option value="Terrestrial">Terrestrial</option>
            <option value="Gas Giant">Gas Giant</option>
            <option value="Ice Giant">Ice Giant</option>
            <option value="Ice Giant">Gas Dwarf</option>
            <option value="Ice Giant">Chthonian Planet</option>
            <option value="Ice Giant">Dwarf Planet</option>
            <option value="Ice Giant">Hot Jupiter</option>
            <option value="Ice Giant">Protoplanet</option>
            <option value="Ice Giant">Helium Planet</option>
            <option value="Ice Giant">Lava Planet</option>
            <option value="Ice Giant">Desert Planet</option>
            <option value="Ice Giant">Ammonia Planet</option>
            <option value="Ice Giant">Terrestrial</option>
            <option value="Ice Giant">Terrestrial Rocky</option>
            <option value="Ice Giant">Goldilocks Planet</option>
            <option value="Ice Giant">Inferior Planets</option>


        </select>
    </div>

</form>
<script>
    $(document).ready(function() {
        $('#moonFilter, #planetType').on('input change', function() {
            var minMoons = $('#moonFilter').val();
            var planetType = $('#planetType').val();
            $('#moonCount').text(minMoons + ' Moons');
            filterPlanets(minMoons, planetType);
        });

        function filterPlanets(minMoons, planetType) {
            $.ajax({
                url: 'fetch_planets.php',
                type: 'POST',
                data: {
                    minMoons: minMoons,
                    planetType: planetType
                },
                success: function(response) {
                    $('#filteredPlanets').html(response);
                },
                error: function(xhr, status, error) {
                    console.log('Error:', error);
                }
            });
        }
    });
</script>







<?php include("includes/footer.php"); ?>