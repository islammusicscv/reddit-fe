const SubCard = ({data}:{data}) => {
    return (
        <>
            <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p className="card-text">{data.content}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default SubCard;