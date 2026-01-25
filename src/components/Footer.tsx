import "../css/footer.css"
function Footer() {

    return (
        <div className="main-footer">
            <div className="card-footer">
                <div className="title-footer">Address</div>
                <div>71 Amsteroum Avenue Cronish Night, NY 35098</div>
            </div>
            <div className="card-footer">
                <div className="title-footer">Phone</div>
                <div>Reception : +995 590 010 203</div>
                <div>Office : +995 510 020 453</div>
            </div>
            <div className="card-footer">
                <div className="title-footer">Email</div>
                <div><span>Office : </span><a href="mailto:sao@example.com" className="link-footer">info@mollys.com</a></div>
                <div><span>Site : </span><a href="mailto:sao@example.com" className="link-footer">admin@mollys.com</a></div>
            </div>
            <div className="card-footer">
                <div className="title-footer">Social</div>
                <div className="footer-icons-list">
                    <img src="../paw.svg" alt="icon" className="footer-icon" />
                    <img src="../logo.svg" alt="icon" className="footer-icon" />
                    <img src="../runningimg/monge-logo.jpg" alt="icon" className="footer-icon" />
                    <img src="../favicon.ico" alt="icon" className="footer-icon" />
                    <img src="../favicon.ico" alt="icon" className="footer-icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer