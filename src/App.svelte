<script>
  import Container from "./lib/page/Container.svelte";
  import Calc from "./lib/calc/Calc.svelte";
  import Header from "./lib/page/Header.svelte";
  import Body from "./lib/page/Body.svelte";
  import "@fontsource/poppins";
  import "@fontsource/poppins/500.css";
  import "@fontsource/poppins/600.css";
  import Footer from "./lib/page/Footer.svelte";
</script>

<Container>
  <Header/>
  <Body>
    <Calc/>
  </Body>
  <Footer/>
</Container>