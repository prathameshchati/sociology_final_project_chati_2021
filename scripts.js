function toggleOccipitalText() {

    
    clearTextBox();
    clearHeader();
    

    var text = document.getElementById("occipital_text");

    var header = document.getElementById("occipital_header");
    

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }


    
  }
  
  function toggleCorpusText() {

    clearTextBox();
    clearHeader();

    var text = document.getElementById("corpus_text");

    var header = document.getElementById("corpus_header");

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }


    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function toggleThalamusText() {

    clearTextBox();
    clearHeader();

    var text = document.getElementById("thalamus_text");

    var header = document.getElementById("thalamus_header");

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function togglePituitaryText() {

    clearTextBox();
    clearHeader();

    var text = document.getElementById("pituitary_text");

    var header = document.getElementById("pituitary_header");

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function toggleMidbrainText() {

    clearTextBox();
    clearHeader();

    var text = document.getElementById("midbrain_text");

    var header = document.getElementById("midbrain_header");

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function togglePonsText() {

    clearTextBox();
    clearHeader();

    var text = document.getElementById("pons_text");

    var header = document.getElementById("pons_header");

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function toggleCerebellumText() {

    clearTextBox();
    clearHeader();

    var text = document.getElementById("cerebellum_text");

    var header = document.getElementById("cerebellum_header");

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function toggleParietalText() {

    clearTextBox();
    clearHeader();

    var text = document.getElementById("parietal_text");

    var header = document.getElementById("parietal_header");

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }


  function toggleFrontalText() {

    clearTextBox();
    clearHeader();

    var text = document.getElementById("frontal_text");

    var header = document.getElementById("frontal_header");

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  
  function toggleTemporalText() {

    clearTextBox();
    clearHeader();

    var text = document.getElementById("temporal_text");

    var header = document.getElementById("temporal_header");

    if (header.style.display === "none") {
        header.style.display = "block";
      } else {
        header.style.display = "none";
    }

    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

    
  function clearTextBox() {
    var textArray = ["occipital_text","corpus_text","thalamus_text","pituitary_text","midbrain_text","pons_text","cerebellum_text","parietal_text","frontal_text","temporal_text"];

    var textArrayLength = textArray.length;

    for (var i = 0; i < textArrayLength; i++) {
        var text = document.getElementById(textArray[i]);
        text.style.display = "none";

    }

  }

  function clearHeader() {
    var headerArray = ["occipital_header","corpus_header","thalamus_header","pituitary_header","midbrain_header","pons_header","cerebellum_header","parietal_header",
    "frontal_header","temporal_header"];

    var headerArrayLength = headerArray.length;

    for (var i = 0; i < headerArrayLength; i++) {
        var header = document.getElementById(headerArray[i]);
        header.style.display = "none";

    }

  }
