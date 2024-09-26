<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <title><?php if (isset($title)) {
            echo $title;
          } ?></title>

  <!-- Include jQuery from CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script>
    $(document).ready(function() {
      // Function to update planet visibility based on moons filter
      function updatePlanetVisibility(minMoons) {
        $('.planet-row').each(function() {
          var moons = parseInt($(this).find('.planet-moons').text());
          if (moons >= minMoons) {
            $(this).show(); // Show the planet row
          } else {
            $(this).hide(); // Hide the planet row
          }
        });
      }

      // Initial update based on default slider value
      updatePlanetVisibility(0);

      // Handle slider input change
      $('#moonFilter').on('input', function() {
        var minMoons = $(this).val();
        $('#moonCount').text(minMoons + ' Moons');
        updatePlanetVisibility(minMoons);
      });
    });
  </script>



</head>

<body class="container p-5">

  <header class="text-center">
    <nav class="text-center">
      <a href="index.php" class="btn btn-dark">Home</a>
      <a href="planets.php" class="btn btn-dark">View All Planets</a>
      <a href="search.php" class="btn btn-dark">Search</a>
      <a href="add.php" class="btn btn-dark">Add</a>
      <a href="edit.php" class="btn btn-dark">Edit</a>
      <a href="logout.php" class="btn btn-dark">Sign Out</a>

    </nav>

  </header>
  <!-- Above this is header -->