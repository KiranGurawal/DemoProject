<template v-slot:[`item.actions`]="{ item }">
 <v-icon>
  <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
  <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
 </v-icon> 
</template>
<script>
export default {
  name: "Edit",
  
  methods:{
     editItem(item) {
      this.editedIndex = this.Books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.Books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
  }
};
</script>
