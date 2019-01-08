$(document).ready(function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
  /* POP-UP */

  $('#btn-effect').click(function(){
    $('#effect-dialogBox').dialogBox({
      width: 500,
      height: 260,
      autoHide: true,
      time: 7000,
      effect: 'flip-horizontal',
      title: 'Desarrollo Web',
      content: '<div class="logos-1"> <img class="html" src="../img/tecnologias/html.png"><img class="css" src="../img/tecnologias/css.png"><img class="js" src="../img/tecnologias/js.png"><img class="vagrant" src="../img/tecnologias/vagrant.png"><img class="git" src="../img/tecnologias/git.png"><img class="php" src="../img/tecnologias/php.png"></div></br><img class="react" src="../img/tecnologias/react.png"><img class="wordpress" src="../img/tecnologias/wordpress.png"><img class="mysql" src="../img/tecnologias/msql.png"><img class="github" src="../img/tecnologias/github.png"><img class="node" src="../img/tecnologias/node.png">'
    });
  });
  $('#btn-effect2').click(function(){
    $('#effect-dialogBox2').dialogBox({
      width: 250,
      height: 160,
      autoHide: true,
      time: 4000,
      effect: 'flip-horizontal',
      title: 'Diseño Gráfico',
      content: ' <img class="html" src="../img/tecnologias/photoshop.png"><img class="css" src="../img/tecnologias/illustrator.png"><img class="css" src="../img/tecnologias/indesign.png">'
    });
  });
  $('#btn-effect3').click(function(){
    $('#effect-dialogBox3').dialogBox({
      width: 400,
      height: 160,
      autoHide: true,
      time: 4000,
      effect: 'flip-horizontal',
      title: 'Vídeo',
      content: ' <img class="html" src="../img/tecnologias/premiere.png"><img class="css" src="../img/tecnologias/after.png"> <img class="css" src="../img/tecnologias/finatCut.png"><img class="css" src="../img/tecnologias/vmix.png">'
    });
  });

});



