const Header = () => {


    const view = `
    <div class="header-main">
        <div class="header-logo">
            <h1>
                <a href="/">
                   Home
                </a>
            </h1>
        </div>
        <div class="header-nav">
            <a class="header-nav--about" href="#/about/">
                About
            </a>
            <button class="header-nav--switch" id="switch">
            <span> <i class="fas fa-sun"></i> </span>
            <span><i class="fas fa-moon"></i> </span>
            </button>

        </div>
    </div>
    `
    return view

}
export default Header