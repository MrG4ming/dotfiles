<script>
    /**
   * @type {HTMLInputElement}
   */
    let navButton;
    let unCheck = () => {
        navButton.checked = false;
    }
</script>

<nav>
    <input class="nav-button" type="checkbox" bind:this={navButton} name="" id="" />
    <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
    </div>
    <div class="nav-menu">
        <ul>
            <li><a href="/">Home</a></li>
            <li>Mid</li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>
    <div class="nav-menu-fill" on:click={unCheck}></div>
    
    <div class="nav-center">
        <slot></slot>
    </div>
</nav>


<style>
    nav {
        position: fixed;
        width: 100%;
        height: 55px;
        background: #1f1f66;
        z-index: 1;
    }

    .nav-menu {
        position: fixed;
        top: 55px;
        left: 0px;
        bottom: 0px;
        width: auto;
        min-width: 150px;
        height: 100vh;
        background-color: #000066;
        z-index: 1;

        transition: transform 0.2s ease-in-out;
        transform: translate(-100%);
    }
    .nav-menu-fill {
        position: fixed;
        top: 55px;
        right: 0px;
        bottom: 0px;
        width: 100%;
        height: 100vh;
        
        display: none;
        background-color: #000000a0;
        opacity: 0%;
        transition: opacity 0.2s ease-in-out;
    }

    nav input[type="checkbox"]:checked ~ .nav-menu {
        transform: translate(0%);
    }
    nav input[type="checkbox"]:checked ~ .nav-menu-fill {
        display: block;
        opacity: 100%;
    }

    .nav-menu ul {
        list-style-type: none;
        padding: 0;
        font-size: 20px;
        height: 100%;

        /* float: right; */
        
        display: flex;
        flex-direction: column;
    }
    .nav-menu ul li {
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;
    }
    .nav-menu ul li:hover {
        background-color: #00000050;
    }
    .nav-menu ul li a {
        display: block;
        /* padding-left: 5px; */
        color: #f0f0f0;
    }

    .nav-center {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 100%;
    }

    .nav-button, .hamburger-lines {
        display: block;
    }

    .nav-button {
        position: absolute;
        display: block;
        height: 30px;
        width: 30px;
        top: 10px;
        left: 20px;
        z-index: 5;
        opacity: 0;
    }

    .hamburger-lines {
        display: block;
        height: 23px;
        width: 35px;
        position: absolute;
        top: 17px;
        left: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .hamburger-lines .line {
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background-color: #f0f0f0;
    }

    .hamburger-lines .line1 {
        transform-origin: 0% 0%;
        transition: transform 0.2s ease-in-out;
    }

    .hamburger-lines .line2 {
        transition: transform 0.2s ease-in-out;
    }

    .hamburger-lines .line3 {
        transform-origin: 0% 100%;
        transition: transform 0.2s ease-in-out;
    }

    nav input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
        transform: rotate(35deg);
    }

    nav input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
        transform: scaleY(0);
    }

    nav input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
        transform: rotate(-35deg);
    }
</style>
