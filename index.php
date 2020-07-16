<!DOCTYPE html>
<html>
<title>Mobile</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="CSS/style.css">
<script src='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />
<script src="JS/jquery.js"></script>

<body>

    <div class="container">
        <div id="mapContainer"></div>
        <div class="baixo">
            <div class="search-bar">

                <input type="search" name="busca" id="bus">
                <img src="Assets/search.png" alt="seach" id="square">

            </div>
            <div class="inf">
                <span>Confirme seu local</span>
                <br>
                <p id="txt">Ajude o seu prestador a localiza-lo mais<br>
                    rapidamente, ajuste sua localização acima!</p>
            </div>
            <div class="button">
                <p id="texto-button">Confirmar o local da ocorrência </p>
                <div id="traco"></div>
                <div id="seta"></div>

            </div>
            <div class="footer">
                <div class="logo"><img src="Assets/logo.png" alt="logo"></div>
                <div class="plc">
                    <div class="placa_txt">Placa</div>
                    <div class="numero_plc">IXS-8269</div>
                </div>
                <div class="prt">
                    <div class="prt_txt">PROTOCOLO</div>
                    <div class="numero_prt">1457845856894</div>
                </div>

            </div>
        </div>

    </div>
    </div>
    </div>



    </div>

    <script src="JS/script.js"></script>
</body>

</html>