fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
    res.json().then((users)=>{
        console.log(users)

    users.forEach((data)=>{
    output.innerHTML += `
    <tr>
    <td> ${data.id}</td>
    <td> ${data.name}</td>
    <td> ${data.email}</td>
    <td> ${data.address.street},${data.address.city},${data.address.zipcode}</td>
    <td> ${data.phone}</td>
    <td> ${data.website}</td>
    <td> ${data.company.name}</td>
    </tr>
    `
})
 })
})