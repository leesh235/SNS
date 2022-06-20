import {
    ROOMLIST,
    MESSAGELIST,
    JOINROOM,
    JOINROOMLIST,
    LEAVEROOM,
    CREATEGROUPROOM,
} from "../action/chat";
import { handleAsyncReducer, reducerUtils } from "../../utils/reducerUtils";
import { typeUtils } from "../../utils/actionUtils";

const initialState = {
    roomList: reducerUtils.initial(null),
    messageList: reducerUtils.initial(null),
    joinRoom: { id: "" },
    joinRoomList: [],
    createGroupRoom: reducerUtils.initial(null),
};

const reducer = (state = initialState, action: any) => {
    const { type, data } = action;
    switch (type) {
        case ROOMLIST:
        case typeUtils(ROOMLIST).success:
        case typeUtils(ROOMLIST).error:
            return handleAsyncReducer(
                ROOMLIST,
                "roomList",
                true
            )(state, action);
        case MESSAGELIST:
        case typeUtils(MESSAGELIST).success:
        case typeUtils(MESSAGELIST).error:
            return handleAsyncReducer(
                MESSAGELIST,
                "messageList",
                true
            )(state, action);
        case CREATEGROUPROOM:
        case typeUtils(CREATEGROUPROOM).success:
        case typeUtils(CREATEGROUPROOM).error:
            return handleAsyncReducer(
                CREATEGROUPROOM,
                "createGroupRoom",
                true
            )(state, action);
        case JOINROOM:
            return {
                ...state,
                joinRoom: data,
            };
        case JOINROOMLIST:
            return {
                ...state,
                joinRoomList: [...state.joinRoomList, data],
            };
        case LEAVEROOM:
            const arr = state.joinRoomList.filter((val) => {
                return val !== data;
            });
            return {
                ...state,
                joinRoomList: arr,
            };
        default:
            return state;
    }
};

export default reducer;
