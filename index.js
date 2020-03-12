

$(function(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        const userInput = document.getElementById('shopping-list-entry').value;
        $('.shopping-list').append(`<li><span class="shopping-item"> ${userInput}</span><div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`)
    })
});


$(function(){
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        this.closest('li').remove();
    });     
})



$(function(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
    });
})






