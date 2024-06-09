<template>
  <Toolbar class="mb-4">
    <template v-slot:start>
      <div class="my-2">
        <Button
          label="New"
          icon="pi pi-plus"
          class="mr-2"
          severity="success"
          @click="openNew()"
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          @click="confirmDeleteSelected()"
          :disabled="!selectedDatas || !selectedDatas.length"
        />
      </div>
    </template>

    <template v-slot:end>
      <div class="">
        <Button
          label="Print"
          icon="pi pi-print"
          severity="info"
          @click="print()"
          class="mr-2"
        />
        <Button
          label="Export to excel"
          icon="pi pi-file-excel"
          @click="excel()"
          class="mr-2"
        />
        <Button
          label="Export to pdf"
          icon="pi pi-file-pdf"
          severity="danger"
          @click="pdf()"
        />
      </div>
    </template>
  </Toolbar>
</template>

<script>
export default {
  props: {
    selectedDatas: Object,
  },
  methods: {
    openNew() {
      this.$emit("openNew");
    },
    confirmDeleteSelected() {
      this.$emit("confirmDeleteSelected");
    },
    print() {
      this.$emit("print");
    },
    excel() {
      this.$emit("excel");
    },
    pdf() {
      this.$emit("pdf");
    },
  },
};
</script>

<style scoped></style>
