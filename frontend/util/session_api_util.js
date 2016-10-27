import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user, success, error) => {
	$l.ajax({
		method: 'POST',
		url: '/api/session',
		data: user,
		success,
		error
	});
};

export const signup = (user, success, error) => {
	$l.ajax({
		method: 'POST',
		url: '/api/user',
		data: user,
		success,
		error
	});
};

export const logout = success => {
	$l.ajax({
		method: 'delete',
		url: '/api/session',
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};

export const editUser = (user, success, error) => {
  $l.ajax({
    method: 'PATCH',
    url: '/api/user',
    data: user,
    contentType: false,
    processData: false,
    success,
    error
  });
};
