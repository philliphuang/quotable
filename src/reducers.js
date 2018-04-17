/*
 * REDUCERS.JS
 *
 * Redux reducers.
 */


import square from './img/square.jpg';
import hall from './img/hall.jpg';
import students from './img/students.jpg';
import adams from './img/adams.jpg';
import starrynight from './img/starrynight.png';
import tiger from './img/tiger.png';
import annenberg from './img/annenberg.jpg';
import gate from './img/gate.jpg';
import yard from './img/yard.jpg';
import matthews from './img/matthews.jpeg';
import manny from './img/manny.jpg';
import housing from './img/housing.jpg';
import housing2 from './img/housing2.jpg';
import placeholder from './img/image-placeholder.png';

// Photo arrays for explore and profile history
const explore_temp = [{img: annenberg, text: 'annenberg'}, {img: gate, text: 'gate'}, {img: yard, text: 'yard'}, 
	{img: matthews, text: 'matthews'}, {img: adams, text: 'adams'}, {img: square, text: 'square'}, {img: manny, text: 'manny'}, 
    {img: housing, text: 'housing'}, {img: housing2, text: 'housing2'}];
const profileTemp = [
{
    img: {img: square, text: 'square'},
    wallpaper: {img: starrynight, text: 'starrynight'},
    date: 'March 3, 2018',
    quote: 'Go outside and take a breath',
    mood: ['😄', 'happy'],
},
{
    img: {img: hall, text: 'hall'},
    wallpaper: {img: tiger, text: 'tiger'},
    date: 'March 2, 2018',
    quote: 'Lorem ipsum whoo',
    mood: ['😡', 'angry'],
},
{
    img: {img: students, text: 'students'},
    wallpaper: {img: annenberg, text: 'annenberg'},
    date: 'March 1, 2018',
    quote: 'lorem ipsum this is a quote',
    mood: ['🤢', 'disgusted'],
}]

const initialState = {
    screen: 'tutorial',
    curPic: null,
    profileHistory: JSON.stringify(profileTemp),
    explorePhotos: JSON.stringify(explore_temp),
    mood: null,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SCREEN':
            return Object.assign({}, state, {
                screen: action.screen
            });

        case 'ADD_PHOTO':
            // Create new entry in profile and update explore page
            const newProfileImage = {
                img: {img: action.src, text: action.text},
                wallpaper: {img: placeholder, text: "wallpaper", placeholder: true},
                date: "April 10, 2018",
                quote: "Negative thoughts stick around because we believe them, not because we want or choose them.",
                mood: state.mood,
            };
            const newState = Object.assign({}, state, {
                curPic: newProfileImage
            });
            let profile = JSON.parse(newState.profileHistory);
            let explore = JSON.parse(newState.explorePhotos);
            profile.splice(0, 0, newProfileImage);
            explore.splice(0, 0, newProfileImage.img);
            newState.profileHistory = JSON.stringify(profile);
            newState.explorePhotos = JSON.stringify(explore);
            return newState;

        case 'CHANGE_MOOD':
            // Edit daily mood, including on profile if you've taken an image that day
            let edited_profile = JSON.parse(state.profileHistory);
            if (state.curPic) {
                edited_profile[0].mood = action.mood
            }
            return Object.assign({}, state, {
                mood: action.mood,
                profileHistory: JSON.stringify(edited_profile),
            });

        default:
            return state;
    }
}

export default reducer;
