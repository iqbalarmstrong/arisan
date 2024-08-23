import './header.css'

function Header(){
    return(
        <div className="header">
            <div className="kanan">
                <h1>Name picker</h1>
                <p>website for pick a random name</p>
            </div>
            <div className="kiri">
                <a className="link"href="">home</a>
                <a className="link" href="">about</a>
            </div>
        </div>
    )
}



export default Header