export const FILTER_ROOM = 'FILTER_ROOM';

export function filterRoom(filter) {
    return {
        type: FILTER_ROOM,
        value: filter
    }
}