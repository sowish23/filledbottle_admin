//page
const convert = 'convert' ;


function clickConvertPage(e) {
    return {
        type : convert,
        payload : e
    }
}

//search
const search = 'search'


function searchKeyword(e) {
    return {
        type : search,
        payload : e
    }
}

//product
const category = 'category'

function checkCategoryId(e) {
    return {
        type : category,
        payload : e,
    }
}

const family = 'family'

function checkFamily(e) {
    return {
        type : family,
        payload : e,
    }
}

const show = 'show'

function changeShow() {
    return {
        type : show
    }
}

//stock

const plant = 'plant'

function checkPlant(e) {
    return {
        type : plant,
        payload : e
    }
}

//order_export
const pagination = {
    convert,
}

const searchPage = {
    search
}

const product = {
    category,
    family,
    show
}

const stock = {
    plant
}

const pageFunction = {
    clickConvertPage,
}

const searchFunction = {
    searchKeyword
}

const productFunction = {
    checkCategoryId,
    checkFamily,
    changeShow
}

const stockFunction = {
    checkPlant
}

export { pagination, searchPage, product, stock }
export { searchFunction, pageFunction, productFunction, stockFunction }