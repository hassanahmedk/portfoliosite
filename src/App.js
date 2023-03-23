import Main from "./components/Main";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Main CSS
import "./assets/css/main.css";

const theme = createTheme({
  typography: {
    fontFamily: "var(--primary-font)",
  },
  palette: {
    primary: {
      main: "#1bab7a",
    },
  },
});

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.type="text/javascript";
    script.id="hs-script-loader";
    script.src = "https://js-na1.hs-scripts.com/24291951.js";
    script.async = true; 
    script.defer = true;

    document.body.appendChild(script);


    return () => {
      document.body.removeChild(script);
      loadLocalJS();
    };
  }, []);

  function loadLocalJS(){

    const scriptLocal = document.createElement("script");

    scriptLocal.type="text/javascript";
  
    scriptLocal.src = "index.js";


    document.body.appendChild(scriptLocal);
  }
 

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </BrowserRouter>
   
    

    </div>

  );
}

export default App;


/* 

<!-- Start of HubSpot Embed Code -->
  <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/24291951.js"></script>
<!-- End of HubSpot Embed Code -->

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6415722b31ebfa0fe7f34e9f/1grpsbv10';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
*/