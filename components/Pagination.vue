<template>
  <nav class="Pagination">
    <ul class="Pagination_Items">
      <li class="Pagination_Item">
        <button type="button" class="Pagination_Button">1</button>
      </li>
      <li class="Pagination_Item">
        <button type="button" class="Pagination_Button">2</button>
      </li>
      <li class="Pagination_Item">
        <button type="button" class="Pagination_Button">3</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.Pagination {
  padding: 16px 0;
}
.Pagination_Items {
  display: flex;
  margin: 0;
  padding: 0;
  align-item: center;
  justify-content: center;
}
.Pagination_Item {
  margin: 0 4px;
  padding: 0;
  list-style: none;
}
.Pagination_Button {
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  color: #333;
  text-decoration: none;
  transition: background .2s;
  font-weight: bold;
  font-size: 1.2rem;
  background: none;
  cursor: pointer;
}
.Pagination_Button:hover {
  background: #f8f8f8;
}
.Pagination_Button:active {
  background: none;
  transition: none;
}
</style>