(function() {

            // sakrivanje i dodavanje videa
            var w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
            var targetWidth = 768;
            if ( w >= targetWidth) {     
              document.getElementById('video2').innerHTML = '<source src="assets/img/video/v-hero-desk.m4v" type="video/mp4">';
              console.log("desk");
            } else {
              document.getElementById('video1').innerHTML = '<source src="assets/img/video/v-hero-mob.m4v" type="video/mp4">';
              console.log("mob");
            }
          
            // kraj

})()