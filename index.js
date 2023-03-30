window.addEventListener("load", function () {
  const imgElement = document.querySelector(
    'img[src="/upload/images/tools.png"]'
  );
  if (imgElement) {
    imgElement.remove();
  }
});
const myDiv = document.getElementById("box_kqxs_minhngoc");
const observer = new MutationObserver((mutationsList, observer) => {
  console.log("Có sự thay đổi trong phần tử myDiv");
  const imgElement = document.querySelector(
    'img[src="/upload/images/tools.png"]'
  );
  if (imgElement) {
    imgElement.remove();
  }
});

const config = { attributes: true, childList: true, subtree: true };

observer.observe(myDiv, config);
function getnew_boxkqxs() {
  setTimeout(function () {
    var box_kqxs_minhngoc = document.getElementById("box_kqxs_minhngoc");
    var tinh = document.getElementById("box_kqxs_tinh").value;
    var scriptLoadNew = document.createElement("script");
    scriptLoadNew.src = "https://www.minhngoc.net.vn/getkqxs/" + tinh + '.js"';
    box_kqxs_minhngoc.innerHTM = "";
    box_kqxs_minhngoc.appendChild(scriptLoadNew);
    
  }, 500);
}
