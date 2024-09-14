var toggleButton = document.getElementById('toggleButton');
var skillDiv = document.getElementById('skills');
if (toggleButton && skillDiv) {
    toggleButton.addEventListener('click', function () {
        if (skillDiv.style.display === 'none') {
            skillDiv.style.display = 'block';
            toggleButton.value = 'Hide';
        }
        else {
            skillDiv.style.display = 'none';
            toggleButton.value = 'Show ';
        }
    });
}
else {
    console.log('Required element not found in the DOM!!');
}
