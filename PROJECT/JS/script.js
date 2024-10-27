
const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    if (currentYearSpan) currentYearSpan.textContent = currentYear;
    if (lastModifiedSpan) lastModifiedSpan.textContent = lastModified; 

    $(document).ready(function() {
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            e.stopPropagation();
        });
    
        $('html').click(function(){
            $('.nav-dropdown').hide();
        })
        $('#nav-toggle').click(function(){
            $('nav ul').slideToggle();
        })
        $('#nav-toggle').on('click', function(){
            this.classList.toggle('active');
        });
    });
