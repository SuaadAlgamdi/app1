//import Counter from "./components/counter"

//function App() {
//return (
//<>
//<Counter />
//</>
//)
//}

//export default App
import Navbar from "./Navbar"
import Card from "./Card"
import Crousel from "./Crousel"

function App() {
  return (
    <>
      <Navbar />
      <h1> hello</h1>
      <div class="row row-cols-4 g-4">
        <div class="col">
          <Card
            image="https://th.bing.com/th/id/OIP.B1ZwgoguAcCmsudU3kR-VAHaEh?w=278&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            title="Mak book"
            text="(9999 SR)"
          />
        </div>
        <Card
          image="https://th.bing.com/th/id/OIP.bx8kKTcraG78mNEzTA4ECAHaDu?w=321&h=176&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          text="LENOVO Pro max"
          title="(9087SR)"
        />
        <Card
          image="https://th.bing.com/th/id/OIP.9Axr8vPax63IfW3NbSAshgHaEx?w=270&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          text=""
          title="Acr Pro  (8888) SR"
        />
        <Card
          image="https://th.bing.com/th/id/OIP.dyuirURsQl0p0M6_w3HB2AHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          text="asdfghhgfds"
          title="sdfghjhgfdsa"
        />
        <Card
          image="https://th.bing.com/th/id/OIP.kzy5CtJI4J3Xal5fmUI3lQHaEc?w=275&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          text="pro Max"
          title="NVIDIA  (9897 SR)"
        />
        <Card
          image="https://th.bing.com/th/id/OIP.Is5-Fk5jGJZpwlv1wZ7TCQHaFN?w=220&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          text="acr pro Max"
          title="ACR (8000 SR)"
        />
        <Card
          image="https://th.bing.com/th/id/OIP.Lc7pwompPotzb6ivWi_qJAHaEw?w=253&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          text="LENOVO Pro"
          title="Lenovo (5000 SR)"
        />
        <Card
          image="https://th.bing.com/th/id/OIP.WWiS58tSJE0xGrg8_c9bQQHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          text="MAK BOOK Pro"
          title="Mak BOOk (8056 SR)"
        />
      </div>

      <div>
        <Crousel
        
        image="https://th.bing.com/th/id/OIP.kzy5CtJI4J3Xal5fmUI3lQHaEc?w=275&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        text="new one"
               />
        <Crousel

        image="https://th.bing.com/th/id/OIP.sjAb26uTVdTvQbijRE52vwHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        
        text="best one"
        />
<Crousel
       image= "https://th.bing.com/th/id/OIP.dyuirURsQl0p0M6_w3HB2AHaEK?w=317&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
       />

       
      </div>
    </>
  )
}

export default App
