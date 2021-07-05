const ArtworkStyles = `
<style>
.art-board{
  position: absolute;
  width: 100%;
  height: 100%;
}
.container{
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.left-container {
  padding: 20px;
  float: left;
  background: white;
  width: 300px;
  height: 400px;
  margin: 10px;
}

.right-container {
  padding: 20px;
  float: left;
  background: white;
  width: 350px;
  height: 400px;
  margin: 10px;
}
</style>
`;

export default ArtworkStyles;
