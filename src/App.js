import EventList from "./components/eventList/EventList";
import { events } from "./recipies";

function App() {
  return (
    <div>
      <h1>Список событий</h1>
      <EventList events={events} />
    </div>
  );
}

export default App;
