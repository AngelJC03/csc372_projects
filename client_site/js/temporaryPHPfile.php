<?php
class Employee {
    public $name;
    public $occupation;
    public $description;

    public function __construct($name, $occupation, $description) {
        $this->name = $name;
        $this->occupation = $occupation;
        $this->description = $description;
    }
}

// Create employee objects
$employees = [
    new Employee(
        "Angelo Garcia",
        "Chair of the Davis/Tennon Foundation",
        "Angelo Garcia is the Founder and Executive Director of the Segue Institute for Learning..."
    ),
    new Employee(
        "Jennie Sousa",
        "Administrative Support Specialist",
        "Jennie Sousa, born and raised in Central Falls..."
    ),
    new Employee(
        "Jeniffer Corrigan",
        "Public Relations Specialist",
        "Jennifer Toone Corrigan is the founder and principal of In Toone Communication..."
    ),
    new Employee(
        "Angel Castano",
        "Technical Solutions Specialist",
        "Angel Castano is a Software Engineer based in Central Falls..."
    )
];
?>
