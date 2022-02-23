<template>
  <div>
    <div>
      <TitleTop />
      <UploadForm v-if="user"/>
      <ImageGrid @selected="updateSelectedImgUrl" />
      <ModalPop v-if="selectedImgUrl" :imgUrl="selectedImgUrl" @close="handleClose"/>
     
    </div>
  </div>
</template>

<script>
import TitleTop from '../components/TitleTop.vue'
import UploadForm from '../components/UploadForm.vue'
import ImageGrid from '../components/ImageGrid.vue'
import ModalPop from '../components/ModalPop.vue'



import { ref } from '@vue/reactivity'
import { computed } from 'vue'
import { useStore } from 'vuex'



export default {

  components: {
    ImageGrid,
    TitleTop,
    UploadForm,
    ModalPop ,
  
    
  
  },
  setup(){

    const store = useStore();
 


    const selectedImgUrl = ref(null)
   
   const updateSelectedImgUrl = (url) =>{
     selectedImgUrl.value = url
     console.log(selectedImgUrl)
   }

  const handleClose = (url) =>{
     selectedImgUrl.value = url
  }


   return{ selectedImgUrl, updateSelectedImgUrl, handleClose, user: computed(() => store.state.user)  }
  }

}
</script>
