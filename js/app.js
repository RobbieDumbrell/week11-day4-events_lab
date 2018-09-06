document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('submit', handleDeleteSubmit);

});

const handleFormSubmit = function(event) {
  event.preventDefault();
  const readingList = document.querySelector('#reading-list');

  const newReadingListItem = document.createElement('ul');
  const newTitle = document.createElement('li');
  const newAuthor = document.createElement('li');
  const newCategory = document.createElement('li');
  newTitle.textContent = `Title: ${event.target.title.value}`;
  newAuthor.textContent = `Author: ${event.target.author.value}`;
  newCategory.textContent = `Category: ${event.target.category.value}`;

  newReadingListItem.appendChild(newTitle);
  newReadingListItem.appendChild(newAuthor);
  newReadingListItem.appendChild(newCategory);
  readingList.appendChild(newReadingListItem);

  const form = document.querySelector('#new-item-form');
  form.reset();

}

const handleDeleteSubmit = function(event) {
  event.preventDefault();
  const readingList = document.querySelector('#reading-list');

  // debugger;
  const readingListAllItems = readingList.querySelectorAll('ul')  

  for (const item of (readingListAllItems)){
    readingList.removeChild(item);
  }

}


