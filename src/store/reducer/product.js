
import { product, searchPage, pagination } from '../../action';

const InitialState ={
    category : 0,
    family : 0,
    show : true,
    keyword : '',
    pageNumbers : 1,
};

export default function pageReducer(state = InitialState, action) {
    switch(action.type) {
        case searchPage.search :
            return searchKeyword(state, action.payload);
        case pagination.convert :
            return convertPage(state, action.payload);
        case product.category :
            return checkCategoryId(state, action.payload);
        case product.family :
            return checkFamily(state, action.payload);
        case product.show :
            return changeShow(state);
        default : 
            return state;
    }
}

/*reducer function */

function checkCategoryId(state, category_c) {
    return {
        ...state,
        category : category_c,
        keyword : '',
        family : 0
    }
}

function checkFamily(state, family_c) {
    return {
        ...state,
        family : family_c,
        keyword : ''
    }
}

function changeShow(state) {
    return {
        ...state,
        show : !state.show,
        pageNumbers : 1
    }
}

function searchKeyword(state, keyword_s) {
    return {
        ...state,
        keyword : keyword_s,
        pageNumbers : 1,
        family : 0
    }
}

function convertPage(state, next_page) {
    console.warn(next_page)
    return {
        ...state ,
        pageNumbers : next_page
    }
}