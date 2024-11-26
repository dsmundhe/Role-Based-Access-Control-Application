import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Dipak Mundhe",
    userinfo: { name: "dipak" },
    loginInfo: '',
    groups: []
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getName: (state, action) => {
            return state.name;
        },
        addUser: (state, action) => {
            const newuser = action.payload;
            state.userinfo = newuser;
        },
        loginUser: (state, action) => {
            state.loginInfo = action.payload;
        },
        addGroup: (state, action) => {
            const group = action.payload;
            state.groups.push(group);
        },
        deleteGroup: (state, action) => {
            const groupName = action.payload;
            state.groups = state.groups.filter((val) => val.groupname !== groupName)
        }
    }
})

export const { getName, addUser, loginUser, addGroup, deleteGroup } = userSlice.actions;

export default userSlice.reducer