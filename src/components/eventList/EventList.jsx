import EventItem from "./eventItem/EventItem";

const EventList = ({ events }) => {
  return (
    <ul className="eListUl">
      {events &&
        events.map(
          ({ location, name, speaker, time: { end, start }, type }) => {
            return (
              <EventItem
                key={name}
                location={location}
                speaker={speaker}
                end={end}
                start={start}
                type={type}
              />
            );
          }
        )}
    </ul>
  );
};

export default EventList;
