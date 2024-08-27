import { useCallback, useState } from 'react';
import { createEvent, Props, Event, getEvents} from '../services/eventService';
import { AxiosError } from 'axios';


export const useGetEvents = () => {
    const [events, setEvents] = useState<Event[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError |  null | unknown>(null);
  
    const getEventsData = useCallback(async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getEvents();
        if (response.statusCode === 200) {
            setEvents(response.data);
        } else {
          setError(
            { message: response.message, statusCode: response.statusCode }
          );
        }
      } catch (err) {
        console.error('Error:', err);
        setError({ message: 'Error fetching users', statusCode: 500 });
      } finally {
        setLoading(false);
      }
    }, []);
  
    return { events, loading, error, getEventsData };
  };

  export const useCreateEvent = () => {
    const [event, setData] = useState<Event[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AxiosError |  null | unknown>(null);
  
    const createEventData = useCallback(async (props: Props) => {
      setLoading(true);
      setError(null);
      try {
        const response = await createEvent(props);
        if (response.statusCode === 200) {
            setData(response.data);
        } else {
          setError(
            { message: response.message, statusCode: response.statusCode }
          );
        }
      } catch (err) {
        console.error('Error:', err);
        setError({ message: 'Error fetching users', statusCode: 500 });
      } finally {
        setLoading(false);
      }
    }, []);
  
    return { event, loading, error, createEventData };
  };