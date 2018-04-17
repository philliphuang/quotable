/*
 * ACTIONS.JS
 *
 * Redux Actions
 */

export function changeScreen(screen) {
    return {
        type: 'CHANGE_SCREEN',
        screen
    };
}

export function addPhoto(src, text) {
    return {
        type: 'ADD_PHOTO',
        src,
        text
    };
}

export function changeMood(mood) {
    return {
        type: 'CHANGE_MOOD',
        mood
    };
}