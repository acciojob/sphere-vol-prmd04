function volume_sphere() {
   let r = parseFloat(document.getElementById("radius").value);
   let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
   document.getElementById("volume").value = volume.toFixed(4); 
}
	window.onload = function () {
    // This is where preventDefault() is correctly used
    document.getElementById("MyForm").addEventListener("submit", function(e) {
        e.preventDefault(); // <-- It's already here!
        volume_sphere();
    });
};function volume_sphere() {
			let r = parseFloat(document.getElementById("radius").value);
			let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
			document.getElementById("volume").value = volume.toFixed(4); 
		}

		window.onload = function () {
			document.getElementById("MyForm").addEventListener("submit", function(e) {
				e.preventDefault();
				volume_sphere();
	});
};

