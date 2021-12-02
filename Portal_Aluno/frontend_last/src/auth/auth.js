const isLogged = () => !!sessionStorage.getItem('token')

export { isLogged }