var cards = [
{
  id: 0,
  media: "https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/22829143_10107205639552478_681157761861362062_o.jpg?oh=901476845e99f2c96c7731d6c8668b27&oe=5A7BE25D",
  title: "About Me",
  alt: "Menu-About Me",
  subtitle: "Old News",
  content: "Hi! 👋 My name is Angela. I was born in Atlanta, GA and lived in Baton Rouge, LA before moving to the beautiful PNW when I was five. My husband’s name is James (that's him in the blue hat on the other side of Blitz - he’s alright, I guess…) and we have a dog named Ms. Pepper Potts (she’s great!). <br><br> #GoHawks!",
},

{
  id: 1,
  media: "https://media.giphy.com/media/BJDufXZnKoiE8/giphy.gif",
  title: "Where I'm Going",
  alt: "Menu-Where I'm Going",
  subtitle: "Back to the Future",
  content: "I’m not quite sure where life is going to lead me, but that’s OK and I’m happy to say that Galvanize will be a major stop along the way. <br><br> I never thought that I'd find myself going back to school and it's pretty scary tbh, but I hope to find myself in a career that will allow me to someday retire, rescue dogs, and visit Disneyland a bunch.",
},

{
  id: 2,
  media: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/22154710_10107136239116508_2638049624306936034_n.jpg?oh=c1925c773e57aa7c82ae6b94d3c37f57&oe=5A7EF35F",
  title: "Bonus!",
  alt: "Menu-Bonus!",
  subtitle: "Because, Why Not?",
  content: "This is Ms. Pepper Potts. She's a miniature schnauzer mix and she's pretty awesome :)",
}];


function createMenu(card) {
  var menuItem = $('<a>');
  menuItem.addClass('list-group-item');
  menuItem.attr('id', card.id);
  menuItem.attr('href', '#');
  menuItem.text(card.title);
  return menuItem;
}


function renderCollectionViewItem(cards) {
  var cardMenu = $('#cardMenu');

  for (var i = 0; i < cards.length; i++) {
    var cardMenuItems = createMenu(cards[i]);
    if (cardMenuItems) {
      cardMenu.append(cardMenuItems);
    }
  }
}


// jQuery document ready event
$(function () {
  $('.list-group-item').on("click",function(event) {
  //get the id of the link that was clicked
  var clickedCard = event.target.id;
    $('a.active').removeClass('active');
    $(this).addClass('active');

  renderDetailViewItem(clickedCard);

  });
});


function renderDetailViewItem(id) {
  var container = $('#cardDetail');
    //container.addClass('card mt-4');

  container.empty();

  var cardMedia = $('<img>');
  cardMedia.addClass('card-img-top img-fluid');
  cardMedia.attr('src', cards[id].media);

  var cardBody = $('<div>');
  cardBody.addClass('card-body');
  cardBody.attr('id', 'cardBodyId');

  var cardTitle = $('<h3>');
  cardTitle.addClass('card-title');
  cardTitle.text(cards[id].title);

  var cardSubtitle = $('<h5>');
  cardSubtitle.text(cards[id].subtitle);

  var cardText = $('<p>');
  cardText.html(cards[id].content);

  // Append items
  container.append(cardMedia);
  cardBody.append(cardTitle);
  cardBody.append(cardSubtitle);
  cardBody.append(cardText);
  container.append(cardBody);

}

renderCollectionViewItem(cards);
renderDetailViewItem(0);
  $('#0').addClass('active');
