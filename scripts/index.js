    var slide_index = 1; 

    displaySlides(slide_index);  
    
    function nextSlide(n) {  
        displaySlides(slide_index += n);  
    }  
    
    function currentSlide(n) {  
        displaySlides(slide_index = n);  
    }  
    
    function displaySlides(n) {  
        var i;
        var slides = document.getElementsByClassName("showSlide");  
        if (n >= slides.length) { slide_index = slides.length }  
        if (n < 1) { slide_index = 1 }  
        for (i = 0; i < slides.length; i++) {  
            slides[i].style.display = "none";  
        }  
        slides[slide_index - 1].style.display = "block";  
    } 

    setInterval(function () {
        var slides = document.getElementsByClassName("showSlide"); 
        document.getElementsByTagName("img")[0].src = "assets/avenger" + ++slide_index + ".jpeg";
        if (slide_index >= slides.length) { slide_index=0 }
    }, 2000);
    
