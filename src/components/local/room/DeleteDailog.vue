<template>
  <Dialog
    header="Edit Room"
    :style="{ width: '450px' }"
    :modal="true"
  >
    <div class="flex align-items-center justify-content-center">
      <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
      <span>Are you sure you want to disable this room?</span>
    </div>
    <template #footer>
      <Button label="No" icon="pi pi-times" text @click="cancel" />
      <Button label="Yes" icon="pi pi-check" text @click="submit" />
    </template>
  </Dialog>
</template>

<script>
export default {
  props: {
    visibility: String,
  },
  emits: ["formSubmit"],
  methods: {
    submit() {
      this.$toast.add({
        severity: "success",
        summary: "Delete Room",
        detail: "You have successfully delete this room.",
        life: 3000,
      });
      this.$emit("formSubmit");
    },
    cancel() {
      this.$emit("formSubmit");
    },
  },
};
</script>

<style scoped></style>
