<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Dashboard</title>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/dashboard.css">
    <link rel="stylesheet" href="assets/css/utils.css">
    <link href="https://unpkg.com/boxicons/css/boxicons.min.css" rel="stylesheet">
    <script type="module" src="assets/js/logged.js" defer></script>
</head>
<body>
    <!-- HEADER -->
    <?php include_once('assets/crud_html/header.html');?>
    
    <div class="grid-container">
        
        <!-- Main -->
        <main class="main-container">
            <div class="main-cards">
                <div class="card">
                    <div class="card-inner">
                        <h3>Total de pets:</h3>
                        <span class="material-icons-outlined">pets</span>
                    </div>
                    <h1 id="total_animais"></h1>
                </div>

                <div class="card">
                    <div class="card-inner">
                        <h3>Total de cães:</h3>
                        <i class='bx bxs-dog bx-flip-horizontal' ></i>
                    </div>
                    <h1 id="total_caes"></h1>
                </div>

                <div class="card">
                    <div class="card-inner">
                        <h3>Total de gatos:</h3>
                        <i class='bx bxs-cat bx-flip-horizontal' ></i>
                    </div>
                    <h1 id="total_gatos"></h1>
                </div>
            </div>

            <div class="charts">
                <div class="charts-card">
                    <h2 class="chart-title">Percentual de adoção por espécie</h2>
                    <div id="adoption-chart"></div>
                </div>

                <div class="charts-card">
                  <h2 class="chart-title">Raças mais doadas no site</h2>
                  <div id="raça-chart"></div>
              </div>
            </div>
        </main>
        <!-- End Main -->
    </div>

    <!-- ApexCharts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.35.5/apexcharts.min.js"></script>
    <!-- Custom JS -->
    <script src="assets/js/dashboard.js"></script>

    <!-- FOOTER -->
    <?php include_once('assets/crud_html/footer.html');?>
</body>
</html>