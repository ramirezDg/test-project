import { useCallback, useState } from 'react';
import { getUserById, getUsers } from '../services/usersService';
import { User } from '../types';
import { AxiosError } from 'axios';


export const useUsers = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError |  null | unknown>(null);

  const getUsersData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getUsers();
      if (response.statusCode === 200) {
        setUsers(response.data);
      } else {
        setError(
          { message: response.message, statusCode: response.statusCode }
        );
      }
    } catch (err) {
      console.error('Error:', err); // Agrega este log para verificar el error
      setError({ message: 'Error fetching users', statusCode: 500 });
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, error, getUsersData };
};



export const useUsersById = () => {
  const [user, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError |  null | unknown>(null);

  const getUsersById = useCallback(async (id:string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getUserById(id);
      if (response.statusCode === 200) {
        setUsers(response.data);
      } else {
        setError(
          { message: response.message, statusCode: response.statusCode }
        );
      }
    } catch (err) {
      console.error('Error:', err); // Agrega este log para verificar el error
      setError({ message: 'Error fetching users', statusCode: 500 });
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, loading, error, getUsersById };
};
