<template>
  <v-data-table
    :headers="headers"
    :items="Books"
    sort-by="author"
    class="elevation-1"
  >
  <Add />
  <Edit />
  <Rest />
  </v-data-table>
</template>
<script>
import Add from '../components/Add.vue'
import Rest from '../components/Rest.vue'
import Edit from '../components/Edit.vue'
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Books name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Author name", value: "author" },
      { text: "Published on", value: "published" },
      { text: "Page no", value: "page" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    
  }),
  components:{
    Add,
    Edit,
    Rest,
  }
,
  


 
 
};
</script>
<style scoped></style>
