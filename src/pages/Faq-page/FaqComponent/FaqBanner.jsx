import bannerImg from "../../../assets/images/Frame.png"


function FaqBanner() {
    return (
        <section className="container">
            <article className="faq-banner">
                <h1>Frequently Asked Question</h1>
                <img src={bannerImg} alt="Banner" />
            </article>
        </section>
    )
}

export default FaqBanner
