export const edit = (user, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/user/edit',
    data: user,
    success,
    error
  })
}
