const { createSlice } = require("@reduxjs/toolkit")

const getThemehLocalStorage = () => {
    const getThemeFromLocalStorage = localStorage.getItem("theme")
    if(!getThemeFromLocalStorage) {
        return {
            isDay : true
        }
    } else {
        const {isDay} = JSON.parse(getThemeFromLocalStorage)
        return {
            isDay
        }
    }
}

const saveThemeToLocalStorage = (isDay) => {
    const theme = {isDay: isDay}
    localStorage.setItem("theme", JSON.stringify(theme))
}

const initialThemeState = getThemehLocalStorage()

const themeSlicer = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        changeTheme(state) {
            state.isDay = !state.isDay
            saveThemeToLocalStorage(state.isDay)
        }
    }
})

export const themeAction = themeSlicer.actions

export default themeSlicer.reducer