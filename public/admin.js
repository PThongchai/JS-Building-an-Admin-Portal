
// // Your Code Here
function main() {

    fetch('http://localhost:3001/listBooks', {
        // method:"GET",
        // headerS:null,
        // body:null
    })
        .then((response) => response.json())
        .then((books) => books.forEach(updateBook))


}

function updateBook(book) {
    let ulTag = document.createElement('ul')
    let root = document.getElementById('root')
   
    let liTag = document.createElement('li')
    liTag.textContent = book.title
    liTag.id = book.id

    let qtyTxtBox = document.createElement('input')
    qtyTxtBox.type = "text"
    qtyTxtBox.value = book.quantity
    qtyTxtBox.style.textAlign = 'right'

    let saveBtn = document.createElement('button')
    saveBtn.textContent = "save"
    saveBtn.style.border = 'none'

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "delete"
    deleteBtn.style.border = 'none'

    let submitBtn = document.createElement('button')
    submitBtn.textContent = "Submit"
    submitBtn.style.border = 'none'


    liTag.append(qtyTxtBox, saveBtn, deleteBtn)

    root.append(liTag)

    saveBtn.addEventListener('click', function (e) {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": book.id,
                "quantity": qtyTxtBox.value

            })
        })

    })

    deleteBtn.addEventListener('click', function (e) {
        fetch(`http://localhost:3001/removeBook/${book.id}`, {
            method: 'DELETE'
        })
            .then(()=> window.location.reload())

    })

    submitBtn.addEventListener('click', function (e) {
        // for(let i=0;i<book.length;i++){
        //     console.log(book.id)
        //     if()
        // }
        // fetch(`http://localhost:3001/addBook`, {
        //     method: 'POST', 
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //        "id": book.id                
        //     })
        // }).then(()=> window.location.reload())

    })
}

main()