<template>
  <b-modal id="ModalPet" hide-footer>
    <div class="d-block">
      <h3 class="my-3">
        Create new pet
      </h3>

      <form action="" @submit.prevent="onSave">
        <div class="form-group">
          <label>Name</label>
          <input v-model="editPet.name" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter name">
        </div>
        <div class="form-group">
          <label>Description</label>
          <input v-model="editPet.des" type="text" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label>Thumbnail</label>
          <input v-model="editPet.thumbnail" type="text" class="form-control" placeholder="Thumbnail">
        </div>
        <div class="text-right">
          <button class="btn btn-primary">
            Submit
          </button>
          <b-button class="" @click="$bvModal.hide('ModalPet')">
            Close
          </b-button>
        </div>
      </form>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    pet: {
      type: Object,
      required: false,
      // eslint-disable-next-line vue/require-valid-default-prop
      default () {
        return {
          name: '',
          des: '',
          thumbnail: ''
        }
      }
    }
  },
  data () {
    return {
      editPet: this.pet
        ? { ...this.pet }
        : {
            name: '',
            des: '',
            thumbnail: ''
          }

    }
  },
  methods: {
    onSave () {
      console.log('save')
      console.log(this.editPet)
      this.$emit('updatePet', this.editPet)
    }
  }

}
</script>

<style scoped>

</style>
