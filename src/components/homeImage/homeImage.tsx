function HomeImage() {
    return (
        <div style={{position: "relative", width: "100%"}}>
            <img
                src="/banner.jpg"
                alt="banner"
                style={{width: "100%", height: "auto", maxHeight: "70vh", opacity: 0.7}}
            />
            <div
                style={{
                    position: "absolute",
                    top: "40%",
                    textAlign: "center",
                    width: "100%",
                    color: "lightgrey",
                }}
            >
                <div style={{fontSize: "35px", fontWeight: "bold", marginBottom:"10px"}}>
                    Crypto Currencies
                </div>
                <div style={{fontSize: "15px"}}>
                    Get Information From Here
                </div>
            </div>
        </div>
    );
}

export default HomeImage;
