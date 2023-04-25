function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById("searchField");
      const fields = Array.from(document.querySelectorAll('tbody tr'));
      
      if (searchField.value !== ''){
         fields.forEach(field => {
            if (field.textContent.includes(searchField.value)){
               field.classList.add("select")
            } else {
               field.classList.remove("select")
            }
         });
      }
      searchField.value = ''
   }
}