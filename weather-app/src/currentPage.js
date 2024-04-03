const currentPage = (() => {
    let page = 'main'

    const getPage = () => (page)

    const setPage = (str) => {
        page = str
    }

    return {
        getPage, setPage
    }
})()

export default currentPage