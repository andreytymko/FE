var i=0;
        var next=document.getElementById("next");
        var image= document.getElementById("image")
        // Добавте свои картинки через запятую
        var imgs=new Array('img/img0.jpg ','img/img1.jpg ','img/img2.jpg ','img/img4.jpg ','img/img5.jpg ','img/img6.jpg ','img/img7.jpg ','img/img8.jpg ');
        function nextsrc() {
            i++;i%=imgs.length;
            next.src = imgs[i];}