<template>
  <AppLayout>
    <h1>Orders list</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col">
        <div class="d-flex align-items-center justify-content-end">
          <span>Visible rows:&nbsp;</span>
          <select class="form-select w-25" v-model="visibleRows" aria-label="Default select example">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'

const visibleRows = ref(10);

</script>
