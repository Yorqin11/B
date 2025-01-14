function order(name, price) {
  const col = +prompt(`${name}: сколько сетов хотите заказать?`, '')
  const totalPrice = col * price;
  confirm(`${col} ${name} вы заказывайте на общую сумму ${totalPrice}`)
}