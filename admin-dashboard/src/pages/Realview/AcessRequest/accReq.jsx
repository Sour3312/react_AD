import "./accReq.css";

export default function AcessRequest() {
    return (
        <div className="AccessRequest-mainDiv">
            <h1>This is AcessRequest page</h1>
            <p>All requests from user <a href="#">sourabh@gmail.com</a></p>:
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Javascript"
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Dashboard
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Python"
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                TripList
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Java"
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                TripUpload
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="PHP"
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Mapview
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="C#"
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                AcessRequest
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="C++"
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                AcessPage
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="C"
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                C
                            </label>
                        </div>
                        <div className="form-check m-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="languages"
                                value="Typescript"
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Typescript
                            </label>
                        </div>
                    </div>
                </div>


            </form>
        </div>
    );
}
