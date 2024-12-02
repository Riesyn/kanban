import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {

  const response = await fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw Error('Failed to log in');
  }

}



export { login };