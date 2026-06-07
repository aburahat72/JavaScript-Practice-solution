let placedbtn = document.querySelector("#placedbtn");
placedbtn.addEventListener("click", () => {
  placedorder();
});
async function placedorder() {
  let promise = new Promise((resolve, reject) => {
    // let randomdelay = Math.floor();
    let randomdelay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      alert("order placed successfully");
      resolve("done");
    }, randomdelay);
  });
  let results = await promise;
  console.log(results);
}
