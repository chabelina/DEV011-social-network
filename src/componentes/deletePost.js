export function pupUpDelete() {
//   const pupUpDelete = document.getElementById('popUp');

  const popUpContainer = document.createElement('div');
  popUpContainer.classList.add('pupUp');
  popUpContainer.id = 'popUp';

  const deletePopUp = document.createElement('div');
  deletePopUp.classList.add('alertPopUp');

  const deleteText = document.createElement('span');
  deleteText.classList.add('delete-text');
  deleteText.textContent = 'Seguro que quieres eliminar la publicación';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('standarButton');
  deleteButton.id = 'deleteButton';
  deleteButton.textContent = 'Eliminar';

  deletePopUp.appendChild(deleteText);
  deletePopUp.appendChild(deleteButton);

  popUpContainer.appendChild(deletePopUp);

  deleteButton.addEventListener('click', () => {
    popUpContainer.style.display = 'none';
  });

  return popUpContainer;
}
