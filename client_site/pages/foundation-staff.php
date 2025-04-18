<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Davis Tennon Foundation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap-grid.min.css" rel="stylesheet"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap-reboot.min.css" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/loadJSON.js" defer></script> 
</head>
<body>
    <section class="banner">
        <div class="banner-container">
            <!-- Burger Menu -->
            <div class="burger">
                <img src="../images/menu.png" alt="Menu" class="menu-icon">
                <div class="burger-menu-content" id="burger-menu-content" style="display: none;">
                    <a href="about-viola-and-julius.html">About Viola and Julius</a>
                    <a href="in-the-news.html">In The News</a>
                    <a href="foundation-staff.php">Foundation Staff</a>
                    <a href="what-we-fund.html">What We Fund</a>
                    <a href="board-members.html">Board Members</a>
                    <a href="partners.html">Partners/Resources</a>
                </div>
            </div>
            
            <!-- Logo and Donate Button -->
            <a href="../index.html">
                <img src="../images/logo-photos/clear-background-dtf-logo.png" alt="Image" width="500" height="155">
            </a>
        </div>
    </section>
    
    <header>
        <div class="orangebar">
            <div class="orange-container">
            </div>
        </div>
        
        <!-- Bootstrap Navbar -->
        <div class="navbar-container">
            <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                <div class="container justify-content-center">
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav d-flex justify-content-center">
                            <li class="nav-item"><a class="nav-link" href="about-viola-and-julius.html">About Viola and Julius</a></li>
                            <li class="nav-item"><a class="nav-link" href="in-the-news.html">In The News</a></li>
                            <li class="nav-item"><a class="nav-link" href="foundation-staff.php">Foundation Staff</a></li>
                            <li class="nav-item"><a class="nav-link" href="what-we-fund.html">What We Fund</a></li>
                            <li class="nav-item"><a class="nav-link" href="board-members.html">Board Members</a></li>
                            <li class="nav-item"><a class="nav-link" href="partners.html">Partners/Resources</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    <script>
        $(document).ready(function() {
            // Burger Menu Toggle
            $(".burger img").click(function(event) {
                var menu = $("#burger-menu-content");
        
                menu.fadeToggle(200); // Smoothly show/hide the menu
        
                event.stopPropagation(); // Prevent click from bubbling to document
            });
        
            // Prevent menu from closing when clicking inside it
            $("#burger-menu-content").click(function(event) {
                event.stopPropagation(); // Stops the document click from closing it
            });
        
            // Close menu when clicking outside
            $(document).click(function(event) {
                var menu = $("#burger-menu-content");
                var burger = $(".burger");
        
                if (!burger.is(event.target) && !burger.has(event.target).length && !menu.is(event.target) && !menu.has(event.target).length) {
                    menu.fadeOut(200);
                }
            });
        });
        
        
    </script>

    <div class="title-of-page fade-in"> Foundation Staff </div>

    <style> 
        .title-of-page {
            font-size: 32px; /* Adjust font size */
            color: rgb(0, 0, 0); /* Adjust color */
            text-align: center; /* Center the text */
            margin: 20px 0; /* Add margin around the title */
        }
    </style>

    <div class="staff-container fade-in">
        <?php
        $imageNames = [
            "Angelo Garcia" => "Angelo-Garcia.webp",
            "Jennie Sousa" => "jennie-sousa.webp",
            "Jeniffer Corrigan" => "jeniffer-corrigan.webp",
            "Angel Castano" => "angel-castano.webp"
        ];

        foreach ($employees as $employee): 
            $imgFile = $imageNames[$employee->name] ?? 'default.png';
        ?>
            <div class="staff-member">
                <img src="../images/staff-photos/<?php echo $imgFile; ?>" alt="<?php echo $employee->name; ?>" class="staff-photo">
                <div class="staff-caption">
                    <h1 class="text-content-staff-page"><?php echo $employee->name; ?></h1>
                    <h3><?php echo $employee->occupation; ?></h3>
                    <p><?php echo $employee->description; ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
    
    <footer class="bg-dark text-light py-4">
        <div class="container">
            <div class="row align-items-center text-center text-lg-start">
                
                <!-- Left Section: Contact Info -->
                <div class="col-lg-4 mb-3 mb-lg-0">
                    <h5 class="text-uppercase">Author Details:</h5>
                    <p><a href="mailto:Angel_castano08@uri.edu" class="text-light text-decoration-none">Angel_castano08@uri.edu</a></p>
                </div>
    
                <!-- Middle Section: Logo & Navigation -->
                <div class="col-lg-4 text-center">
                    <a href="../index.html">
                        <img src="../images/logo-photos/dtf-logo.png" alt="DTF Logo" class="footer-logo img-fluid" style="max-width: 120px;">
                    </a>
                    <ul class="list-inline mt-2">
                        <li class="list-inline-item"><a href="in-the-news.html" class="text-light text-decoration-none">In The News</a></li>
                        <li class="list-inline-item"><a href="foundation-staff.php" class="text-light text-decoration-none">Foundation Staff</a></li>
                        <li class="list-inline-item"><a href="what-we-fund.html" class="text-light text-decoration-none">What We Fund</a></li>
                    </ul>
                </div>
    
    
            </div>
        </div>
    </footer>


</body>
</html>