// When I click submit, item should be added to screen and saved.
// When I click delete, it should delete from screen and storage.
// Item saved should still be present when user comes back to same browser.
{/* <input type = 'text' class = 'input-list' placeholder = 'What do you want to do?'>
            <button id='submit-todo' type="button">Enter</button> */} 


const button = document.getElementById('submit-todo').addEventListener('click', function(){
    let key;
    let value;

    localStorage.setItem(key,value);
});




// This will save the parameters inputted into the user's browser. No where else.

// localStorage.setItem('KeyName1', 5000);
// localStorage.setItem('KeyName2', true);
// localStorage.setItem('SavedItem' , 'This is saved in local storage');