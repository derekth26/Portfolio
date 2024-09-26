<?php

// Prepared statement for selecting all the planets
$select_statement = $con->prepare("SELECT * FROM planets_catalogue");

// Insert a new planet
$insert_statement = $con->prepare("INSERT INTO planets_catalogue(name, type, diameter, moons, description, radius, orbital_period, discovered) VALUES (?,?,?,?,?,?,?,?)");

// Update a planet
$update_statement = $con->prepare("UPDATE planets_catalogue SET name = ?, type = ?, diameter = ?, moons = ?, description = ?, radius = ?, orbital_period = ?, discovered = ?  WHERE id = ?");

//Delete a planet
$delete_statement = $con->prepare("DELETE FROM planets_catalogue WHERE id = ?");

// Select a specific planet by ID
$specific_select_statement = $con->prepare("SELECT * FROM planets_catalogue WHERE id = ?");

function handle_database_error($statement)
{
    global $con;
    die("Error in: " . $statement . " Error details: " . $con->error);
}

function get_all_planets()
{
    global $con;
    global $select_statement;
    if (!$select_statement->execute()) {
        handle_database_error("fetching planets");
    }
    $result = $select_statement->get_result();
    $planets = [];
    while ($row = $result->fetch_assoc()) {
        $planets[] = $row;
    }
    return $planets;
}

function select_planet_by_id($id)
{
    global $con;
    global $specific_select_statement;

    $specific_select_statement->bind_param("i", $id);

    if (!$specific_select_statement->execute()) {
        handle_database_error("fetching planet");
    }
    $result = $specific_select_statement->get_result();
    $planet = $result->fetch_assoc();

    return $planet;
}


function insert_planet($name, $type, $diameter, $moons, $description, $radius, $orbital_period, $discovered)
{
    global $con;
    global $insert_statement;
    $insert_statement->bind_param("ssiiisii", $name, $type, $diameter, $moons, $description, $radius, $orbital_period, $discovered);
    if (!$insert_statement->execute()) {
        handle_database_error("inserting planet");
    }
}

function update_planet($name, $type, $diameter, $moons, $description, $radius, $orbital_period, $discovered, $id)
{
    global $con;
    global $update_statement;
    $update_statement->bind_param("ssiisiiii", $name, $type, $diameter, $moons, $description, $radius, $orbital_period, $discovered, $id);

    if (!$update_statement->execute()) {
        handle_database_error("updating planet");
    }
}
