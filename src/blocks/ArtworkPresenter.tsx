import ArtworkStyles from "./ArtworkPresenterStyles";

const artworkPresenter = {
  label: 'ArtWork Presenter',
  category: 'Assessment',
  content: `
  <div class="art-board" >
  <div class="bg-veil">
    <img data-gjs-type="image" src=""></img>
  </div>
  <div class="container">
    <div class="left-container">
      <img data-gjs-type="image" src=""></img>
      <div class="img-txt">enter image text here!!</div>
    </div>
    <div class="right-container">
      <div class="custom-btn">
        <div>X</div>
      </div>
      <div class="logo">
        <img data-gjs-type="image" src=""></img>
      </div>
      <div class="artist-name">artist name</div>
      <div class="art-name">art name</div>
      <div class="art-date">art date</div>
      <div class="art-desc">enter artwork description</div>
      <div class="custom-btn enquire">
        <div>Click Me</div>
      </div>
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
