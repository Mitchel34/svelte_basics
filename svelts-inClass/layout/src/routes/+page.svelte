<script>
    // We will create 3 components under the root to hold 3 different visualizations
    import Para from "../components/Para.svelte";
    import Pie from "../components/Pie.svelte";
    import Radviz from "../components/Radviz.svelte";
    import * as d3 from "d3";
    import { onMount } from "svelte";

   //Loading data from a csv file
   let data = [];
   let arrDimensions = [];
   onMount(() => {
       d3.csv('https://raw.githubusercontent.com/fengtinghao/CS3435/refs/heads/main/Sample%20Data/iris.csv').then(loadedData => {
           data = loadedData; // Assign loaded data to the data variable
           console.log(data);
           // Process data to extract dimensions
           arrDimensions = data.columns.slice(0,5); 
       });
   });
   //define data


</script>

<div id="root">
    <Para {data} {arrDimensions}/>
    <Pie {data} {arrDimensions} />
    <Radviz {data} {arrDimensions}/>
</div>

