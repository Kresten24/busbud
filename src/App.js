import "./App.css";
import Departure from "./components/departure/Departure";
import TopPanel from "./components/departure/TopPanel";
import BottomPanel from "./components/departure/BottomPanel";
import Card from "./components/UI/Card";

function App() {
  return (
    <>
      <Card>
        <Departure
          departureTime="8AM"
          departureLocation="Montreal"
          departureCity="QC"
          arrivalTime="8AM"
          arrivalLocation="Montreal"
          arrivalCity="QC"
          label="$45"
        ></Departure>
      </Card>
      <br></br>
      <Card>
        <Departure isSummary = 'true'
          departureTime="8AM"
          departureDate="Wed"
          departureLocation="Montreal"
          departureCity="QC"
          arrivalTime="8AM"
          arrivalDate="Fri"
          arrivalLocation="Montreal"
          arrivalCity="QC"
          label="Itinerary"
        ></Departure>
      </Card>
      <br></br>
      <TopPanel>
        <Card>
          <Departure
            departureTime="8AM"
            departureLocation="Montreal"
            departureCity="QC"
            arrivalTime="8AM"
            arrivalLocation="Montreal"
            arrivalCity="QC"
            label="$45"
          ></Departure>
        </Card>
      </TopPanel>
      <br></br>
      <BottomPanel>
        <Card>
          <Departure
            departureTime="8AM"
            departureLocation="Montreal"
            departureCity="QC"
            arrivalTime="8AM"
            arrivalLocation="Montreal"
            arrivalCity="QC"
            label="$45"
          ></Departure>
        </Card>
      </BottomPanel>
    </>
  );
}

export default App;
