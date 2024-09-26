<?php
session_start();
if (!isset($_SESSION['catalog'])) {
    header("location:login.php");
}
// connect to your DB
require_once("/home/dho9/data/connect.php");



require_once("../private/prepared.php"); //load our prepared statements

$title = "Edit a Planet | Database of Planets";

include("includes/header.php"); // load our common design header/footer




// Our "Pagesetter" variable: This is necessary to ID the one (and only one) row of data that will be edited.

$id = isset($_GET['id']) ? $_GET['id'] : "";

if (isset($_GET['id'])) {
    $id = $_GET['id'];
} elseif (isset($_POST['id'])) {
    $id = $_POST['id'];
} else {
    $id = "";
}

$message = "";

$update_message = "";

// has user submitted the form? Grab the form values.

$user_planet_name = isset($_POST['name']) ? trim($_POST['name']) : "";
$user_type = isset($_POST['type']) ? trim($_POST['type']) : "";
$user_diameter = isset($_POST['diameter']) ? trim($_POST['diameter']) : "";
$user_moons = isset($_POST['moons']) ? trim($_POST['moons']) : "";
$user_description = isset($_POST['description']) ? trim($_POST['description']) : "";
$user_radius = isset($_POST['radius']) ? trim($_POST['radius']) : "";
$user_orbital_period = isset($_POST['orbital_period']) ? trim($_POST['orbital_period']) : "";
$user_discovered = isset($_POST['discovered']) ? trim($_POST['discovered']) : "";



// next, values from the DB to prepopulate the form

$existing_name = "";
$existing_type = "";
$existing_diameter = "";
$existing_moons = "";
$existing_description = "";
$existing_radius = "";
$existing_orbital_period = "";
$existing_discovered = "";


if (isset($id)) {
    if (is_numeric($id) && $id > 0) {

        $planet = select_planet_by_id($id);

        if ($planet) {

            $existing_name = $planet['name'];
            $existing_type = $planet['type'];
            $existing_diameter = $planet['diameter'];
            $existing_moons = $planet['moons'];
            $existing_description = $planet['description'];
            $existing_radius = $planet['radius'];
            $existing_orbital_period = $planet['orbital_period'];
            $existing_discovered = $planet['discovered'];
        } else {
            $message .= "Sorry, there are no records that match that query.";
        }
    }
}


// validation. Let's carefully copy from add.php
if (isset($_POST['submit'])) {

    // some simple validation
    $do_i_proceed = TRUE; // our validation boolean

    // CITY NAME VALIDATION
    $user_planet_name = filter_var($user_planet_name, FILTER_SANITIZE_STRING);
    if (strlen($user_planet_name) < 2 || strlen($user_planet_name) > 30) {
        $do_i_proceed = FALSE;
        $update_message .= "<p>Please enter a planet name that is between 2 - 30 characters</p>";
    } else {
        if (str_contains($user_planet_name, "'") || str_contains($user_planet_name, '"')) {
            $user_planet_name = mysqli_real_escape_string($con, $user_planet_name);
        }
    }

    // TYPE VALIDATION
    $user_type = filter_var($user_type, FILTER_SANITIZE_STRING);
    if (strlen($user_type) < 2 || strlen($user_type) > 30) {
        $do_i_proceed = FALSE;
        $message .= "<p>Please enter the planet type that is between 2 - 30 characters</p>";
    } else {
        if (str_contains($user_type, "'") || str_contains($user_type, '"')) {
            $user_type = mysqli_real_escape_string($con, $user_type);
        }
    }

    // DIAMETER VALIDATION

    $user_diameter = filter_var($user_diameter, FILTER_SANITIZE_NUMBER_INT);
    if ($user_diameter < 0 || !is_numeric($user_diameter) || $user_diameter == FALSE) {
        $do_i_proceed = FALSE;
        $message .= "<p>Diameter must be a positive number.</p>";
    }

    // MOON VALIDATION

    $user_moons = filter_var($user_moons, FILTER_SANITIZE_NUMBER_INT);
    if ($user_moons < 0 || !is_numeric($user_moons) || $user_moons == FALSE) {
        $do_i_proceed = FALSE;
        $message .= "<p>Please enter the amount of moons this planet has.</p>";
    }

    // DESCRIPTION VALIDATION

    $user_description = filter_var($user_description, FILTER_SANITIZE_STRING);
    if (strlen($user_description) < 0) {
        $do_i_proceed = FALSE;
        $message .= "<p>Please enter a short description. </p>";
    } else {
        if (str_contains($user_description, "'") || str_contains($user_description, '"')) {
            $user_description = mysqli_real_escape_string($con, $user_description);
        }
    }

    // RADIUS VALIDATION


    $user_radius = filter_var($user_radius, FILTER_SANITIZE_NUMBER_INT);
    if ($user_radius < 0 || !is_numeric($user_radius) || $user_radius == FALSE) {
        $do_i_proceed = FALSE;
        $message .= "<p>Radius must be a positive number.</p>";
    }

    // ORBITAL PERIOD VALIDATION

    $user_orbital_period = filter_var($user_orbital_period, FILTER_SANITIZE_NUMBER_INT);
    if ($user_orbital_period < 0 || !is_numeric($user_orbital_period) || $user_orbital_period == FALSE) {
        $do_i_proceed = FALSE;
        $message .= "<p>Orbital period must be a positive number.</p>";
    }

    // IF VALIDATION PASSED, THEN GO AHEAD AND INSERT INTO DB

    if ($do_i_proceed == TRUE) {

        update_planet($user_planet_name, $user_type, $user_diameter, $user_moons, $user_description, $user_radius, $user_orbital_period, $user_discovered, $id);

        $message .= "<p>" . $user_planet_name . " updated!</p>";

        $city_id = "";
    }
} // \ if submit

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] == 'Request Delete') {
        // Show a confirmation form
        echo '<form action="' . htmlspecialchars($_SERVER['PHP_SELF']) . '" method="post">
                <p>Are you sure you want to delete this record?</p>
                <input type="hidden" name="id" value="' . htmlspecialchars($_POST['id']) . '">
                <input type="submit" name="action" value="Confirm Delete" class="btn btn-danger">
                <input type="submit" name="action" value="Cancel" class="btn btn-secondary">
              </form>';
        exit;
    } elseif ($_POST['action'] == 'Confirm Delete') {
        // Proceed with deletion
        if (isset($_POST['id']) && is_numeric($_POST['id'])) {
            $id = intval($_POST['id']);
            $delete_statement = $con->prepare("DELETE FROM planets_catalogue WHERE id = ?");
            $delete_statement->bind_param("i", $id);
            $delete_statement->execute();
        }
    }
    // Handle other actions like 'Save' or 'Cancel'
}
?>




<main>
    <section>
        <h1 class="fw-light text-center mt-5">Edit a Record</h1>
        <p class="text-muted text-center mb-5">To edit a record in our database, click 'Edit' beside the planet you would like to change. Next, add your updated values into the form and hit 'Save'.</p>
    </section>

    <?php if ($message != "") : ?>
        <div class="alert alert-info">
            <?php echo $message; ?>
        </div>
    <?php endif; ?>

    <div class="list">
        <?php

        $planets = get_all_planets();

        if (count($planets) > 0) {
            echo "\n<table class=\"table table-bordered table_hover\">";
            echo "\n\t<tr>";
            echo "\n\t<th scope=\"col\">Planet Name</th>";
            echo "\n\t<th scope=\"col\">Planet Type</th>";
            echo "\n\t<th scope=\"col\">Diameter</th>";
            echo "\n\t<th scope=\"col\">Moons</th>";
            echo "\n\t<th scope=\"col\">Description</th>";
            echo "\n\t<th scope=\"col\">Radius</th>";
            echo "\n\t<th scope=\"col\">Orbital Period</th>";
            echo "\n\t<th scope=\"col\">Year Discovered</th>";
            echo "\n\t<th scope=\"col\">Edit</th>";
            echo "\n\t</tr>";
            foreach ($planets as $planet) {
                extract($planet); // takes the array elements and creates seprate variables from them (called the same name)
                echo "\n<tr>
            <td>$name</td>
            <td>$type</td>
            <td>$diameter</td>
            <td>$moons</td>
            <td>$description</td>
            <td>$radius</td>
            <td>$orbital_period</td>
            <td>$discovered</td>
            
            <td><a href=\"edit.php?id=$id\">Edit</a></td>";
            }
            echo "\n</tr>\n</table>";
        }

        ?>

        <!--  Modal -->

        <div class="modal fade" id="mymodal" tabindex="1" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title fs-5">
                            Edit <?php echo $existing_name; ?>

                        </h2>
                    </div>
                    <div class="modal-body">
                        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">

                            <?php if (isset($update_message)) : ?>
                                <div class="message text-danger">
                                    <?php echo $update_message; ?>
                                </div>
                            <?php endif; ?>

                            <div class="mb-3">
                                <label for="name">Planet Name</label>
                                <input type="text" id="name" name="name" class="form-control" value="<?php
                                                                                                        if ($user_planet_name != "") {
                                                                                                            echo $user_planet_name;
                                                                                                        } else {
                                                                                                            echo $existing_name;
                                                                                                        }
                                                                                                        ?>">
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
                                <input type="number" name="diameter" class="form-control" value="<?php
                                                                                                    if ($user_diameter != "") {
                                                                                                        echo $user_diameter;
                                                                                                    } else {
                                                                                                        echo $existing_diameter;
                                                                                                    }
                                                                                                    ?>">
                            </div>
                            <div class="mb-3">
                                <label for="moons" class="form-label">Moon(s)</label>
                                <input type="number" name="moons" class="form-control" value="<?php
                                                                                                if ($user_moons != "") {
                                                                                                    echo $user_moons;
                                                                                                } else {
                                                                                                    echo $existing_moons;
                                                                                                }
                                                                                                ?>">
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea name="description" id="description" cols="20" rows="3" class="form-control" value="<?php
                                                                                                                                if ($user_description != "") {
                                                                                                                                    echo $user_description;
                                                                                                                                } else {
                                                                                                                                    echo $existing_description;
                                                                                                                                }
                                                                                                                                ?>">

                </textarea>

                            </div>

                            <div class="mb-3">
                                <label for="radius" class="form-label">Radius in km</label>
                                <input type="number" name="radius" class="form-control" value="<?php
                                                                                                if ($user_radius != "") {
                                                                                                    echo $user_radius;
                                                                                                } else {
                                                                                                    echo $existing_radius;
                                                                                                }
                                                                                                ?>">
                            </div>

                            <div class="mb-3">
                                <label for="orbital_period" class="form-label">Orbital Period in km</label>
                                <input type="number" name="orbital_period" class="form-control" value="<?php
                                                                                                        if ($user_orbital_period != "") {
                                                                                                            echo $user_orbital_period;
                                                                                                        } else {
                                                                                                            echo $existing_orbital_period;
                                                                                                        }
                                                                                                        ?>">
                            </div>

                            <div class="mb-3">
                                <label for="discovered" class="form-label">Year Discovered</label>
                                <input type="number" name="discovered" class="form-control" value="<?php
                                                                                                    if ($user_discovered != "") {
                                                                                                        echo $user_discovered;
                                                                                                    } else {
                                                                                                        echo $existing_discovered;
                                                                                                    }


                                                                                                    ?>">


                            </div>




                            <!-- Hidden value: Another way of doing this is to to use $_SERVER[REQUEST_URI]  instead of PHP_SELF-->
                            <input type="hidden" name="id" value="<?php echo $id; ?>">

                            <input type="submit" name="submit" class="btn btn-success" value="Save">
                            <input type="submit" name="action" class="btn btn-danger" value="Request Delete">

                        </form>

                    </div>
                </div>
            </div>
        </div>





    </div>
</main>






<?php include("includes/footer-edit.php"); ?>