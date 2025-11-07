function toggleBulb()
{
    let bulb = document.getElementById("bulbImage");
    if (bulb.src.includes("bulboff"))
        {
            bulb.src = "images/Bulb.jpg";
        }
    else
        {
            bulb.src = "images/bulb1.jpg";
        }
}

