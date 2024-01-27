export const apiFetch = async <T>(
  endpoint: string | URL,
  params?: RequestInit,
): Promise<T> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) { throw new Error('api url is invalid'); }

  try {
    const res = await fetch(`${API_URL}${endpoint}`, params);
    return res.json();
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
};
