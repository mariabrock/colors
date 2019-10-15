import c from '../../helpers/data/colors';
import utilities from '../../helpers/utilities';

const cardListBuilder = () => {
  const colors = c.getColors();
  let domString = '';
  colors.forEach((color) => {
    domString += '<div class="col-3">';
    domString += `<div class="card" style="background-color: #${color.hexValue}">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${color.name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  utilities.printToDom('color-list', domString);
};

// const cardListEvents = () => {
//   $('body').on('click', '.card');
// };

export default { cardListBuilder };