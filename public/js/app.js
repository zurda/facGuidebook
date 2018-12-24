var recommendations = document.getElementById("recommendations");
var recsList = document.getElementById("recsList");

const createTag = (tag, value) => {
  let item = document.createElement(tag);
  if (tag === 'img') {
    item.setAttribute("src", value);  
  } else {
    item.textContent = value;
  }
  return item;
};

const displayData = display => {
  display.forEach(function(rec) {
    let li = document.createElement("li");    
    recsList.appendChild(li);
    li.appendChild(createTag("h2", rec.name));
    li.appendChild(createTag('img', rec.img_url));
    li.appendChild(createTag("p", rec.location));   
    li.appendChild(createTag("p", rec.review.substring(0, 100) + ' ...'));
  });
};

fetchData(displayData);
