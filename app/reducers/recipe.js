import createReducer from './createReducer'
import * as types from '../configs/type'

export const searchedRecipes = createReducer({}, {
    [types.SET_SEARCHED_RECIPES](state, action) {
        let newState = {}
        action.recipes.forEach( (recipe) => {
            newState[recipe.id] = recipe
        })
        return newState
    }
})

export const recipeCount = createReducer(0,{
    [types.SET_SEARCHED_RECIPES](state, action) {
        return action.recipes.length
    }
})