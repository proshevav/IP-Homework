function findArea() {

        var side1 = parseInt(document.getElementById("firstside").value);

        var side2 = parseInt(document.getElementById("secondside").value);

        var side3 = parseInt(document.getElementById("thirdside").value);

        console.log(typeof(side1));
        var s = (side1 + side2 + side3) / 2;

        var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

        document.write("The triangle's area is: " + area);

}

