function getProducts() {
  apiGetProducts()
    .then((response) => {
      //   gọi hàm  display hiển thị giao diện
      display(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getProducts();

function display(products) {
  let html = products.reduce((result, value, index) => {
    let product = new Products(
      value.id,
      value.name,
      value.price,
      value.screen,
      value.backCamera,
      value.fontCamera,
      value.img,
      value.desc,
      value.type
    );
    return (
      result +
      `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.screen}</td>
            <td>${product.backCamera}</td>
            <td>${product.fontCamera}</td>
            <td>
                <img src="${product.img}" width ="100px" height ="100px" />
            </td>
            <td>${product.desc}</td>
            <td>${product.type}</td>
            <td>
                <button class ="btn btn-primary">Xem</button>
                <button class ="btn btn-danger">Xóa</button>
            </td>
        </tr>
        
    `
    );
  }, "");

  document.getElementById("tblDanhSachSP").innerHTML = html;
}
