function handleResize() {
    if (window.matchMedia('(max-width: 775px)').matches) {
      document.getElementById('scroller').innerHTML = '<button class="navigation-button" style="box-shadow: 0 0px 10px 0 rgba(0,0,0,0.2);"><</button> <!-- Кнопка навигации влево -->       <div class="card" style="width: 18rem; background-color: #FAFAFA; border-radius: 30px; border: none;">           <img class="card-img-top" src="assets/pets-katrine.png" alt="Katrine">           <div class="card-body">               <h5 class="card-title">Katrine</h5>               <button class="card-button" style="box-shadow: 0 0px 10px 0 rgba(0,0,0,0.2);">LEARN MORE</button>           </div>       </div> <button class="navigation-button" style="box-shadow: 0 0px 10px 0 rgba(0,0,0,0.2);">></button>';   
    }
    else{
      document.getElementById('scroller').innerHTML = ' <button class="navigation-button" style="box-shadow: 0 0px 10px 0 rgba(0,0,0,0.2);"><</button> <!-- Кнопка навигации влево -->             <div class="card" style="width: 18rem; background-color: #FAFAFA; border-radius: 30px; border: none;">                 <img class="card-img-top" src="assets/pets-katrine.png" alt="Katrine">                 <div class="card-body">                     <h5 class="card-title">Katrine</h5>                     <button class="card-button" style="box-shadow: 0 0px 10px 0 rgba(0,0,0,0.2);">LEARN MORE</button>                 </div>             </div>             <div class="card" style="width: 18rem; background-color: #FAFAFA; border-radius: 30px; border: none;">                 <img class="card-img-top" src="assets/pets-jennifer.png" alt="Jennifer">                 <div class="card-body">                     <h5 class="card-title">Jennifer</h5>                     <button class="card-button" style="box-shadow: 0 0px 10px 0 rgba(0,0,0,0.2);">LEARN MORE</button>                 </div>             </div>             <div class="card" style="width: 18rem; background-color: #FAFAFA; border-radius: 30px; border: none;">                 <img class="card-img-top" src="assets/pets-woody.png" alt="Woddy">                 <div class="card-body">                     <h5 class="card-title">Woddy</h5>                     <button class="card-button" style="box-shadow: 0 0px 10px 0 rgba(0,0,0,0.2);">LEARN MORE</button>                 </div>             </div>             <button class="navigation-button" style="box-shadow: 0 0px 10px 0 rgba(0,0,0,0.2);">></button>';
    }
  }
  
window.addEventListener('resize', handleResize);
