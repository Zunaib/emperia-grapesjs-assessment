import ArtworkStyles from "./ArtworkPresenterStyles";

const artworkPresenter = {
  label: 'ArtWork Presenter',
  category: 'Assessment',
  content: `
  <div class="art-board" >
    <div class="bg-veil">
    </div>
    <div class="container">
      <div class="left-container">
      </div>
      <div class="right-container">
      </div>
    </div>
  </div>
  `+ ArtworkStyles,
  attributes: {
    class: "fa fa-square",
    title: 'Insert Artwork',
  }
}

export default artworkPresenter;
