import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Submission {
    name: string;
    id: string;
    email: string;
    address: string;
    hobby: string;
    occupation: string;
}

interface InformationState {
    submissions: Submission[];
}

const initialState: InformationState = {
    submissions: [
        {
            name: "Mahbub Khan",
            id: "dsliyce",
            email: "mahbub@gmail.com",
            address: "front5376",
            hobby: "gardening",
            occupation: "Teaching"
        }
    ]
}

const informationSlice = createSlice({
    name: 'informationForm',
    initialState,
    reducers: {
        addSubmission: (state, action: PayloadAction<Submission>) => {
            state.submissions.push(action.payload);
        },
        resetSubmission: (state) => {
            state.submissions = [];
        }
    }
});

export const { addSubmission, resetSubmission } = informationSlice.actions;
export default informationSlice.reducer;
