export const editProjectUtil = (project, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/projects/edit',
    data: user,
    success,
    error
  })
}

export const getProjectUtil = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`,
    success,
    error
  })
}

export const newProjectUtil = (project, success, error) => {
  debugger
  $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: {project: project},
    success,
    error
  })
}

export const showProjectUtil = (project, sucecess, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/projects/edit',
    data: {project: project},
    success,
    error
  })
}
