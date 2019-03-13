// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.togglePanel.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.expandButton.classList.toggle('article')

    // togglePanel() {
    //   this.panelBtnOpen.classList.toggle('hide-btn');
    //   this.panelBtnClose.classList.toggle('hide-btn');
    //   this.panelContent.classList.toggle('toggle-on');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/
class Article {
  constructor(article) {
    this.article = panel;
    this.articleButtons = this.article.querySelector('.article');
    this.articleBtnOpen = this.article.querySelector('.article-open');
    this.articleBtnClose = this.article.querySelector('.article .close');
    // this.articleContent = this.article.querySelector('.panel-content');

    toggleArticle() {
      this.articleBtnOpen.classList.toggle('hide-btn');
      this.articleBtnClose.classList.toggle('hide-btn');
      this.articleContent.classList.toggle('toggle-on');
    }



let articles = document.querySelectorAll('.article');
articles.forEach(function (articles) {
return new Article(articles)
});


    
  }