function myFunction() {
    if (document.querySelector("#dropDown").style.display == 'none') {
      document.querySelector("#dropDown").style.display = 'block'
    } else {
      document.querySelector("#dropDown").style.display = 'none'
    }
  }

var isLiteratureVisible = false;

function openLiteratureContent() {
    if (isLiteratureVisible) {
        document.querySelector(".pagesContent.literature").style.display = 'block';
        isLiteratureVisible = false;
    } else {
        document.querySelector(".pagesContent.literature").style.display = 'none';
        isLiteratureVisible = true;
    }
}
if (document.getElementById("literature")) {
    document.getElementById("literature").addEventListener("click", openLiteratureContent)
}

var isHistoryVisible = false;

function openHistoryContent() {
    if (isHistoryVisible) {
        document.querySelector(".pagesContent.history").style.display = 'block';
        isHistoryVisible = false;
    } else {
        document.querySelector(".pagesContent.history").style.display = 'none';
        isHistoryVisible = true;
    }
}
if (document.getElementById("history")) {
    document.getElementById("history").addEventListener("click", openHistoryContent)
}


var isDictVisible = false;

function openDictContent() {
    if (isDictVisible) {
        document.querySelector(".pagesContent.dict").style.display = 'block';
        isDictVisible = false;
    } else {
        document.querySelector(".pagesContent.dict").style.display = 'none';
        isDictVisible = true;
    }
}
if (document.getElementById("dict")) {
    document.getElementById("dict").addEventListener("click", openDictContent)
}