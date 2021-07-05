const ArtworkStyles = `
<style>
.art-board{
  position: absolute;
  width: 100%;
  height: 100%;
}

.bg-veil img{
  filter: brightness(50%);
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

.left-container img{
  width: 260px;
  height: 360px;
}

.left-container .img-txt{
  margin: 1px 0px;
  text-align: center;
  font-size: 13px;
}  

.right-container {
  padding: 20px;
  float: left;
  background: white;
  width: 350px;
  height: 400px;
  margin: 10px;
}

.right-container .custom-btn{
  cursor: pointer;
  width: 100%;
  text-align: end;
}

.right-container .artist-name{
  word-wrap: break-word;
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding: 0px 40px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
}

.right-container .art-name{
  word-wrap: break-word;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-top: 15px;
  padding: 0px 40px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
}

.right-container .art-date{
  word-wrap: break-word;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 15px;
  padding: 0px 40px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
}

.right-container .art-desc{
  word-wrap: break-word;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 15px auto;
  padding: 0px 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
}


.right-container .enquire {
  cursor: pointer;
  background-color: black;
  color: white;
  width: 70%;
  text-align: center;
  margin: 15px auto;
  padding: 10px 20px;
  border-radius: 10px;
}

.logo{
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo img{
  margin: 15px auto;
  width: 200px;
  height: 100px;
}

</style>
`;

export default ArtworkStyles;
