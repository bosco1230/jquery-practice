$(function() {
  let listContainer = $('<div id="list-container">')
    .css('display', 'flex')
    .css('justify-content', 'space-between');
  $('body').append(listContainer);

  for (let i = 1; i <= 3; i++) {
    let listWrapper = $(`<div id="list-wrapper-${i}">`);
    listContainer.append(listWrapper);

    let listTitle = $(`<p id="list-title-${i}">`).text(`List${i}`);
    listWrapper.append(listTitle);

    let list = $(`<ul id="list-${i}">`).css('list-style', 'none');
    listWrapper.append(list);

    let listItem1 = $(`<li>`).text('Mon-20°C');
    let listItem2 = $(`<li>`).text('Tue-21°C');
    let listItem3 = $(`<li>`).text('Wed-22°C');
    list.append(listItem1);
    list.append(listItem2);
    list.append(listItem3);

    const createButton = (text, id, className) => {
      let button = $('<button>');

      button.text(text);
      button.attr('id', id);
      button.click(function() {
        listWrapper.toggleClass(className);
      })

      return button;
    }

    switch (i) {
      case 1:
        listWrapper.append(createButton('Make Red', 'button-red', 'text-red'));
        break
      case 2:
        listWrapper.append(createButton('Make Yellow', 'button-yellow', 'text-yellow'));
        break
      case 3:
        listWrapper.append(listWrapper.append(createButton('Make Green', 'button-green', 'text-green')));
        break
    }
  }
});