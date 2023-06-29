import MainContent from "./components/mainContent";
import Sidebar from "./components/sidebar";

import "./styles/components/app.sass";

const App = () => {
  return (
    <div id="portfolio">
      <h1>Lucas Januário Honório</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
