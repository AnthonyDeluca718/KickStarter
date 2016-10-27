export const edit = (user, success, error) => {
  $l.ajax({
    method: 'GET',
    url: '/api/user/edit',
    data: user,
    success,
    error
  })
}
