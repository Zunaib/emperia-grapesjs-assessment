import CustomButtonStyles from "./CustomButtonStyles";

const customButton = {
  label: 'Button',
  category: 'Assessment',
  content: `
  <div class="custom-btn">
      <div>Click Me</div>
  </div>
  `+ CustomButtonStyles,
  attributes: {
    class: "fa fa-cube",
    title: 'Insert Custom Button',
  }
}

export default customButton;
