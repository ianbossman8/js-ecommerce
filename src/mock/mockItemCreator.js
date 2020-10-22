function mockItem(name, size, imgSrc, price) {
  return {
    [name]: {
      subtitle: 'product subtitle here',
      size,
      imgSrc,
      price,
      quantity: 1,
    },
  }
}

export { mockItem }
