import API from '../../utils/Api';

export function getMyCourse(token) {
  return API.get('/api/courses/get-my-courses', {
    headers: {
      Authorization: 'Bearer ' + token
    }
  });
}