const div = document.getElementById("pdf_content"); //get class pdf_content

const jsonfile = '../db/pdf.json'; //locate json file
async function getPdf()  {
  const response = await fetch(jsonfile);
  const data = await response.json();

  //iterate each object in json file
  data.forEach( pdf_element => {
    const elem = document.createElement('a');
    elem.innerText = pdf_element.filename //get json filename values
    elem.href = pdf_element.pdf //get pdf values
    elem.setAttribute("class", "pdf_links") //set class attribute to archor tag
    div.appendChild(elem); //get all archor tag and put inside the div tag, in short make archor tag as child of div tag
  });
}

getPdf()