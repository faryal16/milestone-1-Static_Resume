const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement|null;
const skillDiv = document.getElementById('skills') as HTMLDivElement|null;

if(toggleButton && skillDiv){
    toggleButton.addEventListener('click', () => {
       if( skillDiv.style.display === 'none' ){
        skillDiv.style.display = 'block';
        toggleButton.value = 'Hide'
    }else{
        skillDiv.style.display = 'none';
        toggleButton.value = 'Show ';
    }
      
    })
}else {
    console.log('Required element not found in the DOM!!');
    
}