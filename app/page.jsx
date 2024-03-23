import Feed from "@/components/Feed"
import SearchArea from "@/components/SearchArea"

const Home = () => {
   return (
      <section className="lateral-spacing">
         <SearchArea />
         <Feed />
      </section>
   )
}

export default Home