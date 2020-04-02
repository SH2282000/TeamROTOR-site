<!DOCTYPE html>
<html>
<head>
  <meta name="google-site-verification" content="5zxM68XL-cAAGua-8UbkUByRPViTFXaDAh5baRt6EXo" />
  <title>ROTOR - Contactez-nous</title>
  <link rel="icon" type="image/png" href="OFavicon.png" />
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <script type="text/javascript" src="http://www.teamrotor.com/compte.php"></script>
  <link rel="stylesheet" href="stele.css" />
</head>
<body>
  <?php include("header.php") ?>
  <h1 class="leaveMessage">Laissez-nous un message en 3 clics...</h1>
    <form method="post" action=""> 
        <label for="mail">Votre E-mail : <input type="email" name="mail" placeholder="  Restera confidentiel"></label><br>
        <label for="message">Votre message à RotoR : <br><textarea placeholder="Rédiger un message." name="message" ></textarea></label><br>
        <label for="info">Voulez-vous être tenus informé des activitées de RotoR ? <br>(Pas de spam, c'est promis !) <input type="checkbox" name="tenuInfo"></label>
        <input type="submit" value="Envoyer" />
        <p>
          <?php
           $phrases = fopen('phrases.txt', 'a+');

           fputs($phrases, $_POST['mail']."
  ");
           fputs($phrases, $_POST['message']."

  "); 

           fclose($phrases);
        ?>
           </p>   
    </form>
  <meta name="google-site-verification" content="uLjDuWkU05tcPBhylDxUzJtPbmsrapWUDd4EKaGzk7w" />
  <link href="https://fonts.googleapis.com/css?family=Anton|Cabin|Francois+One|Oswald|Julius+Sans+One" rel="stylesheet">
  </div>
</body>
<?php include("footer.php") ?>
</html>
