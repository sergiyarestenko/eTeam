var Slider = function () {
    var self = this;
    var sliderWidth = +getComputedStyle(document.getElementById('slider')).width.replace('px','');
    var sliderHeight = +getComputedStyle(document.getElementById('slider')).height.replace('px','');
    var currentPosition = 0;

  this.imgs = [
      {
          url:'https://cdn-4.motorsport.com/static/img/amp/800000/860000/862000/862100/862154/s6_3067040/f1-valencia-winter-testing-2006-valentino-rossi.jpg',
          alt: 'Ferrari',
          title: 'Rossi and Ferrari in F1'
      },
      {
          url:'https://cdn-7.motorsport.com/images/amp/YEXZdaK2/s6/f1-russian-gp-2016-daniel-ricciardo-red-bull-racing-rb12-with-the-aeroscreen.jpg',
          alt:'RedBull',
          title:'Rosberg hopes "haters" get over F1 cockpit protection'
      },
      {
          url:'https://cdn-4.motorsport.com/images/amp/Y9oREyA0/s6/f1-bahrain-april-testing-2017-oliver-turvey-mclaren-mcl32.jpg',
          alt:'McLaren',
          title:'Honda hits fresh problems in Bahrain F1 test'
      }
  ];
    function createImgDivs() {
        var imgDivs = '';
        for(var i = 0,max = self.imgs.length; i<max; i++){
            var currentImg = self.imgs[i];
            imgDivs = imgDivs + '<div class = "img-wrapper" style ="width: '+sliderWidth+'px;'+'height: '+ sliderHeight + 'px;'+'"><div class ="img-outer"></div><img src="'+ currentImg.url+'" alt ="'+currentImg.alt+'" title ="'+currentImg.title+' " /></div></div>';
        }
        return imgDivs;
    }
     function createImgWrapper() {
        var imgWrapper = document.createElement('div');
        imgWrapper.className = 'slider-inner';
        imgWrapper.id = 'slider-inner';
        imgWrapper.innerHTML = createImgDivs();
        imgWrapper.style.width = sliderWidth * self.imgs.length +'px';
        document.getElementById('slider').appendChild(imgWrapper);
    }

     this.goToLeft = function () {
         if(currentPosition == 0){
            document.getElementById('to-right').classList.remove('end');
         }
         if(currentPosition>(self.imgs.length-1)*-1) {
             currentPosition = currentPosition-1;
             if (currentPosition ==(self.imgs.length-1)*-1){
                 document.getElementById('to-left').classList.add('end');
            }
         }

        goSlider()
    };
   this.goToRight = function () {
        if (currentPosition == (self.imgs.length-1)*-1){
            document.getElementById('to-left').classList.remove('end');
        }
       if(currentPosition<0) {
           currentPosition = currentPosition+1;
           if (currentPosition ==0){
               document.getElementById('to-right').classList.add('end');
           }
       }
        goSlider()
    };

    function goSlider() {
        document.getElementById('slider-inner').style.marginLeft = sliderWidth*currentPosition+'px';
    }

    createImgWrapper();


};

var slider = new Slider();
