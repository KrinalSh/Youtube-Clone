var menuIcon=document.querySelector(".menu");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

menuIcon.onclick= function(){
    sidebar.classList.toggle("smallbar");
    container.classList.toggle("large-container");
}

// const division = document.getElementById('.sidebar');

   
//     container.addEventListener('scroll', () => {
//         division.style.overflowY = 'hidden';
//     });

    const image = document.querySelector(".image");
    const popup = document.getElementById("popup");  
    const imageName = document.getElementById("imageName"); 

    const mic = document.querySelector(".mic");
    const popup2 = document.getElementById('popup2');
    const image2 = document.getElementById('imageName2');


    // Add a click event listener to the image
    image.addEventListener('mouseenter', function() {
        // Get the name related to the image (replace with your logic to retrieve the name)
        const name = "Search";

        // Update the content of the popup
        imageName.textContent = name;

        // Show the popup
        popup.style.display = 'block';
    });

    image.addEventListener('mouseleave', function() {
        // Hide the popup
        popup.style.display = 'none';
    });

    mic.addEventListener('mouseenter', function() {
        
        const name = "Search with your voice.";

        // Update the content of the popup
        imageName2.textContent = name;

        // Show the popup
        popup2.style.display = 'block';
    });

    mic.addEventListener('mouseleave', function() {
        // Hide the popup
        popup2.style.display = 'none';
    });

   