<template>
  <b-modal id="openModal" hide-footer>
    <div class="d-block">
      <h3 class="my-3">
        Create new product
      </h3>

      <form action="" @submit.prevent="onSave">
        <div class="form-group">
          <label>Title</label>
          <input v-model="editProduct.title" type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label>Snippet</label>
          <input v-model="editProduct.snippet" type="text" class="form-control" placeholder="Snippet">
        </div>
        <div class="form-group">
          <label>Thumbnail</label>
          <input v-model="editProduct.thumbnail" type="text" class="form-control" placeholder="Thumbnail">
        </div>
        <div class="text-right">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <b-button class="" @click="$bvModal.hide('openModal')">
            Close Me
          </b-button>
        </div>
      </form>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: false,
      // eslint-disable-next-line vue/require-valid-default-prop
      default () {
        return {
          title: '',
          snippet: '',
          thumbnail: ''
        }
      }
    }
  },
  data () {
    return {
      editProduct: this.product
        ? { ...this.product }
        : {
            title: '',
            snippet: '',
            thumbnail: ''
          }

    }
  },
  methods: {
    onSave () {
      console.log('saveeee')
      this.$emit('updateProduct', this.editProduct)
    }
  }

}
</script>

<style scoped>

</style>
