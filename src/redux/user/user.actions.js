import axios from "axios";
import UserActionTypes from "./user.types";

export const fetchUsers = () => {
   return async (dispatch) => {
    dispatch(fetchUsersRequest());

    var response = await axios.get('https://jsonplaceholder.typicode.com/users');
    var data = response.data;

    var users = data.map(user => {
        user.like = false;

        return user;
    });

    dispatch(fetchUsersSuccess(users));
   }
};

export const fetchUsersRequest = () => ({
    type: UserActionTypes.FETCH_USER_REQUEST
});

export const fetchUsersSuccess = (users) => ({
    type: UserActionTypes.FETCH_USER_SUCCESS,
    payload: users
});

export const changeLikeStatus = (users, user) => {
    return async (dispatch) => {
        await dispatch(fetchUsersRequest());

        user.like = !user.like;

        dispatch(fetchUsersSuccess(users));
    }
};

export const deleteUser = (users, userToDelete) => {
    return async (dispatch) => {
        var data = users.filter(user => user.id !== userToDelete.id);

        var newUsers = data.map(user => {
            if(user.id > userToDelete.id)
                user.id -= 1;

            return user;
        });

        dispatch(fetchUsersSuccess(newUsers));
    }
};
