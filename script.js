const form  = document.querySelector(".myForm");
const amount = document.querySelector("#amount");
const category = document.querySelector("#category");
const description = document.querySelector("#description");
const tbody = document.querySelector("tbody");

//object
//{ amount, category, description }

form.addEventListener("submit",(e) => {
    e.preventDefault();

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${category.value}</td>
         <td>${description.value}</td>
        <td>${amount.value}</td>
        <td><button class="delbtn">Delete</button></td>
    `;
    // <tr> 
            // <td>${category.value}</td>
            // <td>${description.value}</td>
            // <td>${amount.value}</td>
    // </tr>

    tbody.appendChild(row);

    const amountValue = amount.value;

    if (amountValue <= 0) {
        alert("Amount must be greater than 0");
        return;
    }

    amount.value = " ";
    description.value = " ";

    //element.addEventListener(event,callback)
    const deleteBtn = row.querySelector(".delbtn");
    deleteBtn.addEventListener("click",() => {
        row.remove();
    });
});
