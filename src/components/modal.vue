<template>
 <div class="wrapper-modal" :style="position">
     <span class="label"></span>
     <p>
        <span></span>
        <span></span>
        <span></span>
     </p>
     <b-button to="/#" type="is-info">Подготовить декларацию</b-button>
     <p>
         <b-button>Похожие документы</b-button>
         <b-button>Подробнее</b-button>
     </p>
 </div>
</template>

<script>
// import './styles.css'

export default {
  name: 'EventModal',
  props: {
    position: {
        required: false,
        type: Object,
        default: {
            left: '733px',
            top: '391px'
        }
    }
  },
  mounted: function(){
      console.log(this.position);
  },
  methods: {
    
  }
}
</script>
<style scoped>
.wrapper-modal{
    position: fixed;
    width: 355px;
    height: 260px;
    z-index: 100;
    background: #FFFFFF;
    box-shadow: 0px 7px 30px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}
</style>