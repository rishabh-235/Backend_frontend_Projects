let sum = 0;

function add(e) {
  e.preventDefault();

  let itemName = document.getElementById("item-name-input").value;
  let itemPrice = document.getElementById("item-price-input").value;
  let tableBody = document.getElementById("tablebody");
  let gradtotal = document.getElementById("gradtotal");

  if(itemName==="" || itemPrice=="")
  {
    alert("Enter ProductName or ProductPrice")
    return;
  }

  sum+=parseInt(itemPrice);

  tableBody.insertAdjacentHTML(
    "afterend",
    `<tr class="text-center h-8">
              <td>${itemName}</td>
              <td>Rs&nbsp;${itemPrice}</td>
            </tr>`
  );
  gradtotal.innerHTML=`Rs ${sum}`;

  document.getElementById("item-name-input").value = "";
  document.getElementById("item-price-input").value = "";

  return ;
}
