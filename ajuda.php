<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiauJuda</title>

    <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="assets/css/utils.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="shortcut icon" href="assets/img/patasfundo.png" type="image/x-icon">

    <script type="module" src="assets/js/modalCad.js" defer></script>
    <script type="module" src="assets/js/logged.js" defer></script>
    <script type="module" src="assets/js/ajuda.js" defer></script>
</head>
<body>
    
    <!-- HEADER -->
    <?php include_once('assets/crud_html/header.html');?>
    
    <div class="container">
        
        <main>
            <section class="help-section">
                <h2>Encontrou um animal em situação de vulnerabilidade e não sabe o que fazer?</h2>
                <button class="help-button">QUERO AJUDAR</button>
            </section>

            <section id="helpModal" class="modal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <div class="l1">
                        <br>
                        <h2>O que se classifica como maus tratos?</h2><br>
                        <p>Abandono, envenenamento, confinamento constante em correntes ou cordas muito curtas, manutenção em locais anti-higiênicos, mutilação, confinamento em espaços incompatíveis com seu porte ou sem adequada iluminação e ventilação, participação em eventos que possam causar danos físicos, pânico ou estresse, agressão física, submissão a esforço excessivo (tração), participação em rinhas, entre outros.</p><br>
                    </div>
            
                    <!-- TOPICO 2 -->
                    <h2>Para quem ligar?</h2><br>
                    <div class="l2">
                        <p><i class="fa">&#xf1b0</i> Núcleo de Proteção aos Animais (NPA)</p>
                        <p><i class="fa">&#xf1b0</i> Delegacia de Meio Ambiente (tel.: (27) 3236-8136)</p>
                        <p><i class="fa">&#xf1b0</i> Assembleia Legislativa do ES – Comissão de Maus Tratos a Animais (E-mail: defesadosanimaises@gmail.com)</p>
                        <p><i class="fa">&#xf1b0</i> Polícia Militar (tel.: 190)</p>
                        <p><i class="fa">&#xf1b0</i> Ouvidoria do Ministério Público do ES (Tel.: (27) 3194-4500)</p>
                    </div>
                </div>
            </section>

            <section class="section-pets">
                <h2>Animais Perdidos</h2><br>
                <div class="tabs">
                    <button class="tab-button active" data-tab="todos">TODOS</button>
                    <button class="tab-button" data-tab="caes">CÃES</button>
                    <button class="tab-button" data-tab="gatos">GATOS</button>
                </div>
                <div id="petList" class="pet-list">
                </div>
                <div class="pagination">
                </div>
            </section>

            <section id="petDetailsModal" class="modal">
                <!-- detalhes do pet -->
            </section>

            <!-- botao de cadastrar pets -->
            <?php include_once('assets/crud_html/cadastrarPets.html')?>

        </main>
        
    </div>
    
    <!-- FOOTER -->
    <?php include_once('assets/crud_html/footer.html');?>
</body>
</html>