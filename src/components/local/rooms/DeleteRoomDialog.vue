<template>
  <Dialog header="Edit Room" :style="{ width: '450px' }" :modal="true">
    <div class="flex align-items-center justify-content-center">
      <i
        class="pi pi-exclamation-triangle mr-3"
        style="font-size: 2rem; color: #f97316"
      />
      <span
        >Are you sure you want to
        <b>{{ formData.status === 1 ? "disable" : "enable" }}</b> this
        room?</span
      >
    </div>
    <template #footer>
      <Button label="No" icon="pi pi-times" text @click="hideDialog()" />
      <Button label="Yes" icon="pi pi-check" text @click="submit()" />
    </template>
  </Dialog>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: {},
    },
  },
  emits: ["formSubmit"],
  methods: {
    hideDialog() {
      this.$emit("formSubmit");
    },
    submit() {
      this.$toast.add({
        severity: "success",
        summary: "Delete Room",
        detail: "You have successfully delete this room.",
        life: 3000,
      });
      this.$emit("formSubmit");
    },
  },
};
</script>

<style scoped></style>
