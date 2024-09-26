<?php
session_start();
if (!isset($_SESSION['catalog'])) {
    header("location:login.php");
}

// connect to your DB
require_once("/home/dho9/data/connect.php");



require_once("../private/prepared.php"); //load our prepared statements

$title = "Add a Planet | Database of Planets";

include("includes/header.php"); // load our common design header/footer


if (isset($_POST['submit'])) {
    $message = "";
    extract($_POST);


    // some simple validation
    $do_i_proceed = TRUE; // our validation boolean

    // PLANET NAME VALIDATION
    $name = filter_var($name, FILTER_SANITIZE_STRING);
    if (strlen($name) < 2 || strlen($name) > 30) {
        $do_i_proceed = FALSE;
        $message .= "<p>Please enter a Planet Name that is between 2 - 30 characters</p>";
    } else {
        if (str_contains($name, "'") || str_contains($name, '"')) {
            $name = mysqli_real_escape_string($con, $name);
        }
    }


    // TYPE VALIDATION
    $type = filter_var($type, FILTER_SANITIZE_STRING);
    if (strlen($type) < 2 || strlen($type) > 30) {
        $do_i_proceed = FALSE;
        $message .= "<p>Please enter the planet type that is between 2 - 30 characters</p>";
    } else {
        if (str_contains($type, "'") || str_contains($type, '"')) {
            $type = mysqli_real_escape_string($con, $type);
        }
    }

    // DIAMETER VALIDATION

    $diameter = filter_var($diameter, FILTER_SANITIZE_NUMBER_INT);
    if ($diameter < 0 || !is_numeric($diameter) || $diameter == FALSE) {
        $do_i_proceed = FALSE;
        $message .= "<p>Diameter must be a positive number.</p>";
    }


    // MOON VALIDATION
    $moons = filter_var($moons, FILTER_SANITIZE_NUMBER_INT);
    if (!is_numeric($moons) || $moons === '') {
        $do_i_proceed = FALSE;
        $message .= "<p>Please enter a valid number for the amount of moons this planet has.</p>";
    } elseif ($moons < 0) {
        $do_i_proceed = FALSE;
        $message .= "<p>The number of moons must be a non-negative integer.</p>";
    }

    // DESCRIPTION VALIDATION

    $description = filter_var($description, FILTER_SANITIZE_STRING);
    if (strlen($description) < 0) {
        $do_i_proceed = FALSE;
        $message .= "<p>Please enter a short description. </p>";
    } else {
        if (str_contains($description, "'") || str_contains($description, '"')) {
            $description = mysqli_real_escape_string($con, $description);
        }
    }

    // RADIUS VALIDATION


    $radius = filter_var($radius, FILTER_SANITIZE_NUMBER_INT);
    if ($radius < 0 || !is_numeric($radius) || $radius == FALSE) {
        $do_i_proceed = FALSE;
        $message .= "<p>Radius must be a positive number.</p>";
    }

    // ORBITAL PERIOD VALIDATION

    $orbital_period = filter_var($orbital_period, FILTER_SANITIZE_NUMBER_INT);
    if ($orbital_period < 0 || !is_numeric($orbital_period) || $orbital_period == FALSE) {
        $do_i_proceed = FALSE;
        $message .= "<p>Orbital period must be a positive number.</p>";
    }


    // IF VALIDATION PASSED, THEN GO AHEAD AND INSERT INTO DB

    if ($do_i_proceed == TRUE) {
        insert_planet($name, $type, $diameter, $moons, $description, $radius, $orbital_period, $discovered);
        $thumbnail_path = "thumbnails/planet-thumbnail.jpg"; // Example thumbnail path
        $planet_name_for_thumbnail = $name; // Assuming planet name is used to identify the thumbnail

        // Check if the thumbnail image exists
        if (file_exists($thumbnail_path)) {
            $image = imagecreatefromjpeg($thumbnail_path);

            if ($image !== false) {
                $width = imagesx($image);
                $height = imagesy($image);
                $ratio = $width / $height;
                $new_width = 250;
                $new_height = $new_width / $ratio;
                $image_resized = imagecreatetruecolor($new_width, $new_height);

                if (imagecopyresampled($image_resized, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height)) {
                    $new_thumbnail_path = "thumbnails/{$planet_name_for_thumbnail}-thumbnail.jpg"; // New thumbnail path

                    if (imagejpeg($image_resized, $new_thumbnail_path)) {
                        // Thumbnail created successfully
                        imagedestroy($image);
                        imagedestroy($image_resized);
                        $message = "<h3>Planet Added Successfully</h3>";
                    } else {
                        $message = "<p>Failed to save thumbnail image.</p>";
                    }
                } else {
                    $message = "<p>Failed to resize image.</p>";
                }
            } else {
                $message = "<p>Failed to load image from {$thumbnail_path}.</p>";
            }
        } else {
            $message = "<p>Thumbnail image not found at {$thumbnail_path}.</p>";
        }
        $message = "<h3>Planet Added Successfully</h3>";
        $_POST['name'] = "";
        $_POST['type'] = "";
        $_POST['diameter'] = 0;
        $_POST['moons'] = 0;
        $_POST['description'] = "";
        $_POST['radius'] = 0;
        $_POST['orbital_period'] = 0;
        $_POST['discovered'] = 0;
    }
} // \ if submit


?>

<main>
    <section>

        <h1 class="fw-light text-center mt-5">Add a Planet</h1>
        <p class="text-muted mb-5 text-center ">To add a planet, simply fill out the form below and click 'Save'</p>

        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

            <?php if (isset($message)) : ?>
                <!-- An all-in-one validation message. NOT up to standards, but this is a lesson in CRUD, not validation -->
                <div class="message text-danger">
                    <?php echo $message; ?>
                </div>
            <?php endif; ?>

            <div class="mb-3">
                <label for="name" class="form-label">Planet Name</label>
                <input type="text" name="name" class="form-control" value="<?php if (isset($_POST['name'])) echo $_POST['name']; ?>">
            </div>

            <div class="mb-3">
                <label for="type" class="form-label">Planet Type</label>
                <select name="type" id="type" class="form-select form-select-lg">
                    <?php

                    $planet_types = [
                        'Gas Giant',
                        'Dwarf Planet',
                        'Gas Dwarf',
                        'Chthonian Planet',
                        'Ice Giant',
                        'Hot Jupiter',
                        'Protoplanet',
                        'Helium Planet',
                        'Lava Planet',
                        'Desert  Planet',
                        'Iron Planet',
                        'Ammonia Planet',
                        'Terrestrial',
                        'Terrestrial Rocky',
                        'Goldilocks Planet',
                        'Inferior Planets',

                    ];


                    foreach ($planet_types as $key => $value) {
                        $selected = isset($_POST['type']) && $_POST['type'] == $key ? 'selected' : '';
                        echo "\n\t\t\t\t\t<option value\"$key\" $selected>$value</option>";
                    }

                    ?>

                </select>
            </div>
            <div class="mb-3">
                <label for="diameter" class="form-label">Diameter in km</label>
                <input type="number" name="diameter" class="form-control" value="<?php if (isset($_POST['diameter'])) echo $_POST['diameter']; ?>">
            </div>
            <div class="mb-3">
                <label for="moons" class="form-label">Moon(s)</label>
                <input type="number" name="moons" class="form-control" value="<?php if (isset($_POST['moons'])) echo $_POST['moons']; ?>">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea name="description" id="description" cols="20" rows="3" class="form-control" value="<?php if (isset($_POST['description'])) echo $_POST['description']; ?>">

                </textarea>

            </div>

            <div class="mb-3">
                <label for="radius" class="form-label">Radius in km</label>
                <input type="number" name="radius" class="form-control" value="<?php if (isset($_POST['radius'])) echo $_POST['radius']; ?>">
            </div>

            <div class="mb-3">
                <label for="orbital_period" class="form-label">Orbital Period in Earth days</label>
                <input type="number" name="orbital_period" class="form-control" value="<?php if (isset($_POST['orbital_period'])) echo $_POST['orbital_period']; ?>">
            </div>

            <div class="mb-3">
                <label for="discovered" class="form-label">Year Discovered</label>
                <input type="text" name="discovered" class="form-control" value="<?php if (isset($_POST['discovered'])) echo $_POST['discovered']; ?>">
            </div>


            <input type="submit" value="Save" name="submit" class="btn btn-success">
        </form>



    </section>
</main>
<?php include("includes/footer.php"); ?>