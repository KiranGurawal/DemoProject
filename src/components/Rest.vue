<template v-slot:no-data>
  <v-btn color="primary" @click="initialize"> Reset </v-btn>
</template>
<script>
export default {
  name: "Rest",
methods:{
  initialize() {
      this.Books = [
        {
          name: "True Biz",
          author: "Sara Novic",
          published:"April 5th 2022",
          page:386
        },
       
        {
          name: "Lucy by the Sea",
          author: "Elizabeth Strout",
          published:"September 20th 2022",
          page:304
         
        },
        {
          name: "Olga Dies Dreaming",
          author: "Xochitl Gonzalez",
          published:"January 4th 2022",
          page:369
        },
        {
          name: "Honor",
          author: "Thrity Umrigar",
          published:"January 4th 2022",
          page:326
        },
        {
          name: "Notes on an Execution",
          author: "Danya Kukafka",
          published:"January 25th 2022",
          page:306
        },
        {
          name: "The Winners",
          author: "Fredrik Backman",
          published:"September 27th 2022",
          page:688
        },
        {
          name: "This Time Tomorrow",
          author: "Emma Straub",
          published:"May 17th 2022",
          page:320
        },
        {
          name: "To Paradise",
          author: "Hanya Yanagihara",
          published:"January 11th 2022",
          page:720
        },
       
      ];
},
 created() {
    this.initialize();
  },

}
}
</script>
