<template>
  <div class="paginator">
    <div class="page-indicator">
      Page: {{ pageIndex }} of {{ pageCount }}, total: {{ total }}
    </div>
    <div class="buttons">
      <button @click="previousPage"><ChevronLeftIcon class="icon" /></button>
      <select
        name="page-size"
        id="page-size"
        @change="updatePageSize"
        @click="updatePageSize"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <button @click="nextPage"><ChevronRightIcon class="icon" /></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters, mapActions } from "vuex";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

export default defineComponent({
  name: "PaginatorComponent",
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  computed: {
    ...mapState("pagination", {
      pageIndex: (state: any) => state.pagination.page,
      pageCount: (state: any) => state.pagination.pageCount,
      pageSize: (state: any) => state.pagination.pageSize,
      total: (state: any) => state.pagination.total,
    }),
    ...mapGetters("pagination", {
      totalPages: "totalPages",
    }),
  },
  methods: {
    ...mapActions("pagination", ["updatePageIndex", "updatePagination"]),
    nextPage() {
      if (this.pageIndex < this.totalPages) {
        const newPageIndex = this.pageIndex + 1;
        this.updatePagination({
          page: newPageIndex,
          pageCount: this.pageCount,
          pageSize: this.pageSize,
        });
      }
    },
    previousPage() {
      if (this.pageIndex > 1) {
        const newPageIndex = this.pageIndex - 1;
        this.updatePagination({
          page: newPageIndex,
          pageCount: this.pageCount,
          pageSize: this.pageSize,
        });
      }
    },
    updatePageSize(event: any) {
      this.updatePagination({
        page: this.pageIndex,
        pageCount: this.pageCount,
        pageSize: event.currentTarget.value,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.paginator {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .page-indicator {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #f0f0f0;
    box-shadow: 1px 5px 36px -12px rgba(0, 0, 0, 0.35);
    border: solid 1px;
    border-color: #ccc;
    overflow: hidden;

    select {
      height: 100%;
      border: none;
      background-color: #eee;
    }

    button {
      border: none;
      padding: 0;
      background-color: #eee;

      .icon {
        cursor: pointer;
        height: 20px;
        width: 20px;
        padding: 10px;
        color: #777;
      }

      :hover {
        background-color: #d9d9d9;
      }
    }
  }
}
</style>
