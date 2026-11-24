import "./App.css";

import SchedulePage from "./components/SchedulePage";
import ScheduleList from "./components/ScheduleList";

function App() {
  return (
    <>
      <SchedulePage>
        <ScheduleList />
      </SchedulePage>
      <footer className="footer">

2026 © Cricket Schedule. All rights reserved.

</footer>
    </>
  );
}

export default App;