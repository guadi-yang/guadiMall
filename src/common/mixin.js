import BackTop from 'components/content/backtop/BackTop'
export const mixinbacktop = {
  components:{
    BackTop
  },
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    }
  }
}