export default function getItemIndex(selectedItems, id, price) {
  return selectedItems.findIndex(item => item.id === id)
}
